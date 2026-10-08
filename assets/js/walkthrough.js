/*
  Walkthrough enhancer. Loaded only by _layouts/walkthrough.html.

  Reads the ordinary Markdown output inside .wt-content and rearranges it:
    h2                  -> a part (first paragraph = what you'll have at the end)
    h3 {: app video}    -> a step, with app labels and a media pane (video + clips)
    ol in a step        -> lettered actions; images inside become clips with "Show me" links
    ul.task-list        -> a checklist that remembers what's ticked
    > **Done when:**    -> checkpoint with a "Mark done" button
    > **Careful:**      -> warning
    > **Save point:**   -> commit reminder
    > **Note:**         -> side note
    h4                  -> collapsed section, up to the next heading
    h2 with no steps    -> an ordinary section, left where it is. Those before the first step
                           (e.g. "Ingredients") sit side by side at the top.
    dl in the intro     -> a row of facts (Makes, Time, Skill level...)
  Placeholder text listed in front matter "personalize" is replaced with the reader's own values.
  If anything here fails, the page stays a readable Markdown page.
*/
(function () {
  "use strict";

  var root = document.getElementById("walkthrough");
  if (!root) return;
  var content = root.querySelector(".wt-content");
  if (!content) return;

  var PLAYLIST = root.getAttribute("data-playlist") || "";
  // Where readers commit: "github" (the GitHub.com editor) or VS Code (default).
  var COMMIT_HOWTO = root.getAttribute("data-commit") === "github"
    ? "<li>Choose <strong>Commit changes…</strong> at the top right of the editor.</li><li>Type the message.</li><li>Choose <strong>Commit changes</strong>.</li>"
    : "<li>Open <strong>Source Control</strong> (Ctrl + Shift + G).</li><li>Hover over <strong>Changes</strong> and choose <strong>+</strong>.</li><li>Type the message and choose <strong>Commit</strong>.</li>";
  var personalize = {};
  try { personalize = JSON.parse(root.getAttribute("data-personalize") || "{}") || {}; } catch (e) {}

  var APPS = {
    web: "GitHub.com", desktop: "GitHub Desktop", vscode: "VS Code", term: "Terminal",
    browser: "Browser", sheets: "Google Sheets", files: "Your computer"
  };
  // Inline video embeds work on the docs site; local file previews can't frame YouTube.
  var CAN_EMBED = location.protocol !== "file:";
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- storage ----------
  var KEY = "cb-walkthrough:" + location.pathname;
  var MODE_KEY = "cb-walkthrough:mode";
  var VALUES_KEY = "cb-walkthrough:values";
  function load(key, fallback) { try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; } }
  function store(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }
  var progress = load(KEY, { done: [], checks: [] });
  progress.done = progress.done || []; progress.checks = progress.checks || [];
  var mode = load(MODE_KEY, "read");
  var values = load(VALUES_KEY, {});

  // ---------- helpers ----------
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function headingText(h) {
    var c = h.cloneNode(true);
    Array.prototype.forEach.call(c.querySelectorAll(".anchor-heading"), function (a) { a.remove(); });
    return c.textContent.trim();
  }
  // A blockquote whose first paragraph starts with <strong>Label:</strong> is a callout.
  function calloutKind(bq) {
    var p = bq.firstElementChild;
    if (!p || p.tagName !== "P") return null;
    var first = p.firstChild;
    while (first && first.nodeType === 3 && !first.textContent.trim()) first = first.nextSibling;
    if (!first || first.nodeName !== "STRONG") return null;
    var key = first.textContent.trim().replace(/:$/, "").toLowerCase();
    if (["done when", "careful", "save point", "note", "tip"].indexOf(key) < 0) return null;
    first.remove();
    p.innerHTML = p.innerHTML.replace(/^\s*:?\s*/, "");
    return key;
  }

  var toastEl = el("div", { "class": "wt-toast", role: "status", "aria-live": "polite" });
  document.body.appendChild(toastEl);
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("is-shown");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("is-shown"); }, 2000);
  }

  // ---------- lazy GIF player: shows a still first frame until played ----------
  var lazyIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { lazyIO.unobserve(en.target); en.target._wtLoad(); } });
  }, { rootMargin: "600px 0px" }) : null;

  function makePlayer(src, label, alt) {
    var btn = el("button", { type: "button", "class": "wt-clip", "aria-label": "Play clip: " + (alt || label) },
      '<span class="wt-loading">Loading clip…</span><canvas aria-hidden="true"></canvas><span class="wt-playbar"><i aria-hidden="true"></i><span>Play</span></span>');
    var canvas = btn.querySelector("canvas");
    var pbLabel = btn.querySelector(".wt-playbar span");
    var still = new Image();
    still.onload = function () {
      canvas.width = still.naturalWidth; canvas.height = still.naturalHeight;
      btn.style.aspectRatio = still.naturalWidth + " / " + still.naturalHeight;
      try { canvas.getContext("2d").drawImage(still, 0, 0); } catch (e) {}
      btn.classList.add("is-ready");
    };
    still.onerror = function () { btn.querySelector(".wt-loading").textContent = "Clip unavailable"; };
    var start = function () { if (!still.src) still.src = src; };
    if (lazyIO) { btn._wtLoad = start; lazyIO.observe(btn); } else start();

    btn.addEventListener("click", function () {
      var live = btn.querySelector("img");
      if (live) {
        live.remove(); canvas.hidden = false; btn.classList.remove("is-playing");
        pbLabel.textContent = "Play"; btn.setAttribute("aria-label", "Play clip: " + (alt || label));
        return;
      }
      start();
      var anim = el("img", { alt: alt || label, src: src }); // a fresh element restarts the GIF
      btn.insertBefore(anim, btn.querySelector(".wt-playbar"));
      canvas.hidden = true; btn.classList.add("is-playing", "is-ready");
      pbLabel.textContent = "Stop"; btn.setAttribute("aria-label", "Stop clip: " + (alt || label));
    });
    return btn;
  }

  // Pull an <img> out of the flow; remove its paragraph if that's all it held.
  function takeImage(img) {
    var p = img.parentElement;
    var clip = { src: img.getAttribute("src"), label: img.getAttribute("title") || img.getAttribute("alt") || "Clip", alt: img.getAttribute("alt") || "" };
    img.remove();
    if (p && p.tagName === "P" && !p.textContent.trim() && !p.children.length) p.remove();
    return clip;
  }

  // A GFM task list ("- [ ] item") becomes a checklist whose ticks are remembered.
  function makeChecklist(ul, prefix) {
    ul.classList.add("wt-checklist");
    Array.prototype.forEach.call(ul.children, function (li, i) {
      var cb = li.querySelector("input[type=checkbox]");
      if (!cb) return;
      var cid = prefix + "-check-" + i;
      cb.removeAttribute("disabled"); cb.id = cid; cb.setAttribute("data-check", cid);
      var label = el("label", { "for": cid });
      label.appendChild(cb);
      var span = el("span");
      while (li.firstChild) span.appendChild(li.firstChild);
      label.appendChild(span); li.appendChild(label);
    });
  }
  // A section with no steps keeps its heading and content as they are.
  function sectionEl(p) {
    var sec = el("section", { "class": "wt-section" });
    if (p.head) sec.appendChild(p.head);
    p.pre.forEach(function (n) {
      if (n.tagName === "UL" && n.classList.contains("task-list")) makeChecklist(n, p.head && p.head.id || "section");
      sec.appendChild(n);
    });
    return sec;
  }

  // ---------- parse ----------
  var nodes = Array.prototype.slice.call(content.children);
  var intro = [], parts = [], part = null, step = null;
  nodes.forEach(function (n) {
    if (n.tagName === "H2") { part = { head: n, pre: [], steps: [] }; parts.push(part); step = null; return; }
    if (n.tagName === "H3") {
      if (!part) { part = { head: null, pre: [], steps: [] }; parts.push(part); }
      step = { head: n, els: [] }; part.steps.push(step); return;
    }
    if (step) step.els.push(n); else if (part) part.pre.push(n); else intro.push(n);
  });
  var stepParts = parts.filter(function (p) { return p.steps.length; });
  if (!stepParts.length) return;
  // Sections before the first part with steps are preparation (e.g. "Ingredients").
  var firstStepPart = parts.indexOf(stepParts[0]);
  var prep = parts.slice(0, firstStepPart);

  // ---------- build ----------
  var layout = el("div", { "class": "wt-layout" });
  var main = el("div", { "class": "wt-main" });
  var rail = el("nav", { "class": "wt-rail", "aria-label": "Walkthrough steps" });
  layout.appendChild(main); layout.appendChild(rail);

  var introEl = el("div", { "class": "wt-intro" });
  intro.forEach(function (n) {
    if (n.tagName === "DL") {
      // Wrap each dt + dd pair so the facts can wrap as a grid.
      n.classList.add("wt-facts");
      var pair = null;
      Array.prototype.slice.call(n.children).forEach(function (c) {
        if (c.tagName === "DT") { pair = el("div"); n.insertBefore(pair, c); }
        if (pair) pair.appendChild(c);
      });
    }
    introEl.appendChild(n);
  });
  main.appendChild(introEl);

  if (prep.length) {
    var prepEl = el("div", { "class": "wt-prep" });
    prep.forEach(function (p) { prepEl.appendChild(sectionEl(p)); });
    main.appendChild(prepEl);
  }

  var setup = el("section", { "class": "wt-setup", "aria-label": "Set up this walkthrough" });
  main.appendChild(setup);

  var allSteps = [];
  var stepNum = 0;
  var tocHtml = "";

  parts.slice(firstStepPart).forEach(function (p) {
    if (!p.steps.length) { main.appendChild(sectionEl(p)); return; }
    var pi = stepParts.indexOf(p);
    var sec = el("section", { "class": "wt-part" });
    var head = el("header", { "class": "wt-part-head" });
    head.appendChild(el("span", { "class": "wt-eyebrow" }, "Part " + (pi + 1) + " of " + stepParts.length));
    if (p.head) head.appendChild(p.head);
    sec.appendChild(head);
    var outcomeTaken = false;
    p.pre.forEach(function (n) {
      if (n.tagName === "P" && !outcomeTaken) { outcomeTaken = true; head.appendChild(n); return; }
      if (n.tagName === "BLOCKQUOTE" && calloutKind(n)) { var note = el("aside", { "class": "wt-note" }); while (n.firstChild) note.appendChild(n.firstChild); sec.appendChild(note); n.remove(); return; }
      sec.appendChild(n);
    });

    var tocItems = "";
    p.steps.forEach(function (s) {
      stepNum += 1;
      var h = s.head;
      var id = h.id || ("step-" + stepNum);
      var title = headingText(h);
      var apps = (h.getAttribute("app") || "").split(/\s+/).filter(Boolean);
      var video = h.getAttribute("video");
      var badge = h.getAttribute("badge");
      var info = { id: id, n: stepNum, title: title, video: video, clips: [] };
      allSteps.push(info);
      tocItems += '<li><a href="#' + esc(id) + '" data-step="' + esc(id) + '"><span class="wt-toc-num">' + stepNum + '</span><span>' + esc(title) + "</span></a></li>";

      var art = el("article", { "class": "wt-step", "data-step": id });
      info.el = art;
      var sh = el("div", { "class": "wt-step-head" });
      sh.appendChild(el("span", { "class": "wt-num", "aria-hidden": "true" }, String(stepNum)));
      var st = el("div", { "class": "wt-step-title" });
      st.appendChild(h);
      var where = apps.map(function (a) { return '<span class="wt-app" data-app="' + esc(a) + '">' + esc(APPS[a] || a) + "</span>"; }).join('<span class="wt-arrow" aria-hidden="true">→</span>');
      if (where || badge) st.appendChild(el("div", { "class": "wt-where" }, (where ? "<span>In</span> " + where : "") + (badge ? ' <span class="wt-badge">' + esc(badge) + "</span>" : "")));
      sh.appendChild(st);
      art.appendChild(sh);

      var grid = el("div", { "class": "wt-grid" });
      var body = el("div", { "class": "wt-body" });
      var media = el("div", { "class": "wt-media" });
      grid.appendChild(body); grid.appendChild(media);
      art.appendChild(grid);

      var more = null, hasCheck = false;
      s.els.forEach(function (n) {
        if (n.tagName === "H4") {
          more = el("details", { "class": "wt-more" });
          var sum = el("summary"); sum.appendChild(n); more.appendChild(sum);
          more.appendChild(el("div", { "class": "wt-more-body" }));
          body.appendChild(more);
          return;
        }
        if (more) {
          more.querySelector(".wt-more-body").appendChild(n);
          Array.prototype.forEach.call(n.tagName === "IMG" ? [n] : n.querySelectorAll("img"), function (img) {
            var c = takeImage(img);
            more.querySelector(".wt-more-body").appendChild(makePlayer(c.src, c.label, c.alt));
          });
          return;
        }
        if (n.tagName === "OL") {
          n.classList.add("wt-actions");
          Array.prototype.forEach.call(n.children, function (li) {
            var wrap = el("div", { "class": "wt-act" });
            while (li.firstChild) wrap.appendChild(li.firstChild);
            li.appendChild(wrap);
            Array.prototype.forEach.call(wrap.querySelectorAll("img"), function (img) {
              info.clips.push(takeImage(img));
              wrap.appendChild(el("button", { type: "button", "class": "wt-show", "data-clip": String(info.clips.length - 1) }, "Show me"));
            });
          });
          body.appendChild(n);
          return;
        }
        if (n.tagName === "UL" && n.classList.contains("task-list")) {
          makeChecklist(n, id);
          body.appendChild(n);
          return;
        }
        if (n.tagName === "BLOCKQUOTE") {
          var kind = calloutKind(n);
          if (kind === "done when") {
            hasCheck = true;
            var chk = el("div", { "class": "wt-check" }, '<span class="wt-label">You\'re done when</span>');
            while (n.firstChild) chk.appendChild(n.firstChild);
            chk.appendChild(el("button", { type: "button", "class": "wt-done-btn", "aria-pressed": "false" }, "Mark step " + stepNum + " done"));
            body.appendChild(chk); return;
          }
          if (kind === "careful") {
            var c = el("div", { "class": "wt-careful" }, '<span class="wt-label">Careful</span>');
            while (n.firstChild) c.appendChild(n.firstChild);
            body.appendChild(c); return;
          }
          if (kind === "save point") {
            var msg = n.textContent.trim();
            body.appendChild(el("div", { "class": "wt-savepoint" },
              '<span class="wt-label">Save point</span><span>Commit your changes with the message <code>' + esc(msg) + "</code></span>" +
              "<details><summary>How do I commit again?</summary><ol>" + COMMIT_HOWTO + "</ol></details>"));
            return;
          }
          if (kind) { var nt = el("aside", { "class": "wt-note" }); while (n.firstChild) nt.appendChild(n.firstChild); body.appendChild(nt); return; }
        }
        // Loose images in the step body become clips without a "Show me" link.
        Array.prototype.forEach.call(n.tagName === "IMG" ? [n] : n.querySelectorAll("img"), function (img) { info.clips.push(takeImage(img)); });
        if (n.tagName === "P" && !n.textContent.trim() && !n.children.length) return;
        body.appendChild(n);
      });
      if (!hasCheck) {
        body.insertBefore(el("div", { "class": "wt-check" }, '<button type="button" class="wt-done-btn" aria-pressed="false">Mark step ' + stepNum + " done</button>"), more ? body.querySelector(".wt-more") : null);
      }

      // copy buttons on code blocks
      Array.prototype.forEach.call(body.querySelectorAll("pre"), function (pre) {
        if (pre.closest(".wt-more")) return;
        var box = pre.closest("div.highlighter-rouge");
        if (!box) { box = el("div"); pre.parentNode.insertBefore(box, pre); box.appendChild(pre); }
        if (box.classList.contains("wt-snippet")) return;
        box.classList.add("wt-snippet");
        box.appendChild(el("button", { type: "button", "class": "wt-copy" }, "Copy"));
      });

      // media pane
      if (video || info.clips.length) {
        var tabs = "";
        if (video) tabs += '<button type="button" role="tab" data-tab="video">Video</button>';
        info.clips.forEach(function (c, ci) {
          tabs += '<button type="button" role="tab" data-tab="clip" data-clip="' + ci + '">' + (info.clips.length > 1 ? (ci + 1) + ". " : "") + esc(c.label) + "</button>";
        });
        media.innerHTML = '<div class="wt-tabs" role="tablist" aria-label="Media for step ' + stepNum + '">' + tabs + '</div><div class="wt-stage"></div>';
      } else {
        media.remove();
        grid.classList.add("no-media");
      }
      sec.appendChild(art);
    });
    tocHtml += '<li><span class="wt-toc-part">' + (pi + 1) + " · " + esc(p.head ? headingText(p.head) : "Steps") + "</span><ol>" + tocItems + "</ol></li>";
    main.appendChild(sec);
  });

  // ---------- setup panel ----------
  var placeholders = Object.keys(personalize);
  var hasVideo = allSteps.some(function (s) { return s.video; });
  var setupHtml = !hasVideo ? "" :
    '<div><h2>How do you like to learn?</h2><p class="wt-help">Every step has a short video and written steps with screen clips. Choose which one each step shows first. You can switch on any step.</p>' +
    '<div class="wt-mode" role="group" aria-label="Learning mode"><button type="button" data-mode="read">Read and look</button><button type="button" data-mode="watch">Watch videos</button></div>' +
    (PLAYLIST ? '<a class="wt-playlist" href="https://www.youtube.com/playlist?list=' + esc(PLAYLIST) + '">Or watch the whole series on YouTube ↗</a>' : "") + "</div>";
  if (placeholders.length) {
    setupHtml += '<div><h2>Your project</h2><p class="wt-help">Fill these in once and the commands and settings below will use your names, ready to copy.</p><div class="wt-fields">' +
      placeholders.map(function (ph, i) {
        return '<div class="wt-field"><label for="wt-field-' + i + '">' + esc(personalize[ph]) + '</label><input id="wt-field-' + i + '" data-ph="' + esc(ph) + '" type="text" autocomplete="off" spellcheck="false" placeholder="' + esc(ph) + '"></div>';
      }).join("") + "</div></div>";
  }
  if (setupHtml) setup.innerHTML = setupHtml; else setup.remove();
  if (setup.children.length === 1) setup.classList.add("is-single");

  rail.innerHTML = '<div class="wt-rail-inner"><div class="wt-progress"><span class="wt-progress-label"></span><div class="wt-meter" aria-hidden="true"><span></span></div></div>' +
    '<details class="wt-toc-details"><summary>All steps</summary><ol class="wt-toc">' + tocHtml + "</ol></details>" +
    '<div class="wt-rail-foot"><span>Your progress is saved in this browser.</span><button type="button" class="wt-linklike wt-reset">Reset progress</button></div></div>';

  content.replaceWith(layout);
  root.classList.add("is-enhanced");

  // ---------- personalization ----------
  // Placeholders read naturally ("your-repo"), so they're plain words, not {tokens}.
  var isSlug = function (ph) { return !/\s/.test(ph); };
  var tidy = function (ph, v) {
    v = v.trim();
    if (!isSlug(ph)) return v;
    v = v.replace(/\s+/g, "-").replace(/[^A-Za-z0-9._-]/g, "");
    return ph === ph.toLowerCase() ? v.toLowerCase() : v; // lowercase placeholder = lowercase value
  };
  if (placeholders.length) {
    var sorted = placeholders.slice().sort(function (a, b) { return b.length - a.length; });
    // Whole words only, so "your-repo" doesn't match inside "your-repository".
    var re = new RegExp("(?<![A-Za-z0-9-])(" + sorted.map(function (p) { return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")(?![A-Za-z0-9])", "g");
    var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
      acceptNode: function (t) { return t.parentNode.closest(".wt-setup, script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    var hits = [];
    while (walker.nextNode()) { re.lastIndex = 0; if (re.test(walker.currentNode.nodeValue)) hits.push(walker.currentNode); }
    hits.forEach(function (t) {
      var frag = document.createDocumentFragment();
      t.nodeValue.split(re).forEach(function (part, i) {
        if (i % 2) { var s = el("span", { "data-v": part }); s.textContent = part; frag.appendChild(s); }
        else if (part) frag.appendChild(document.createTextNode(part));
      });
      t.parentNode.replaceChild(frag, t);
    });
    Array.prototype.forEach.call(main.querySelectorAll("a[href]"), function (a) {
      re.lastIndex = 0;
      if (a.getAttribute("href").charAt(0) !== "#" && re.test(a.getAttribute("href"))) a.setAttribute("data-href-tpl", a.getAttribute("href"));
    });
    var paint = function () {
      Array.prototype.forEach.call(main.querySelectorAll("[data-v]"), function (s) { s.textContent = values[s.getAttribute("data-v")] || s.getAttribute("data-v"); });
      Array.prototype.forEach.call(main.querySelectorAll("[data-href-tpl]"), function (a) {
        a.setAttribute("href", a.getAttribute("data-href-tpl").replace(re, function (m) { return values[m] || m; }));
      });
    };
    Array.prototype.forEach.call(setup.querySelectorAll("input[data-ph]"), function (inp) {
      var ph = inp.getAttribute("data-ph");
      inp.value = values[ph] || "";
      inp.addEventListener("input", function () { values[ph] = tidy(ph, inp.value); store(VALUES_KEY, values); paint(); });
      inp.addEventListener("blur", function () { inp.value = values[ph] || ""; });
    });
    paint();
  }

  // ---------- media ----------
  var byId = {};
  allSteps.forEach(function (s) { byId[s.id] = s; });

  function renderVideo(stage, s) {
    var url = "https://www.youtube.com/watch?v=" + encodeURIComponent(s.video) + (PLAYLIST ? "&list=" + encodeURIComponent(PLAYLIST) : "");
    stage.innerHTML = '<a class="wt-video" href="' + esc(url) + '" target="_blank" rel="noopener"><span class="wt-video-top">Video · Step ' + s.n + " of " + allSteps.length + '</span><span class="wt-video-title">' + esc(s.title) + '</span><span class="wt-video-play"><i aria-hidden="true"></i>' + (CAN_EMBED ? "Play video" : "Watch on YouTube ↗") + "</span></a>" +
      '<div class="wt-caption"><span>From the walkthrough video series</span>' + (PLAYLIST ? '<a href="https://www.youtube.com/playlist?list=' + esc(PLAYLIST) + '" target="_blank" rel="noopener">Full playlist ↗</a>' : "") + "</div>";
    if (!CAN_EMBED) return;
    stage.querySelector(".wt-video").addEventListener("click", function (e) {
      e.preventDefault();
      var f = el("iframe", { "class": "wt-frame", title: "Video: " + s.title, allow: "autoplay; encrypted-media; picture-in-picture", allowfullscreen: "",
        src: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(s.video) + "?rel=0&modestbranding=1&autoplay=1" });
      this.replaceWith(f);
    });
  }
  function show(s, which, ci, play) {
    var stage = s.el.querySelector(".wt-stage");
    if (!stage) return;
    if (which === "clip" && !s.clips.length) which = "video";
    if (which === "video" && !s.video) { which = "clip"; ci = 0; }
    Array.prototype.forEach.call(s.el.querySelectorAll(".wt-tabs button"), function (b) {
      var on = which === "video" ? b.getAttribute("data-tab") === "video" : b.getAttribute("data-tab") === "clip" && +b.getAttribute("data-clip") === ci;
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    Array.prototype.forEach.call(s.el.querySelectorAll(".wt-show"), function (b) {
      b.setAttribute("aria-current", which === "clip" && +b.getAttribute("data-clip") === ci ? "true" : "false");
    });
    if (which === "video") { renderVideo(stage, s); return; }
    var c = s.clips[ci];
    stage.innerHTML = "";
    var player = makePlayer(c.src, c.label, c.alt);
    stage.appendChild(player);
    stage.appendChild(el("div", { "class": "wt-caption" }, "<span>" + esc(c.label) + '</span><a href="' + esc(c.src) + '" target="_blank" rel="noopener">Open full size ↗</a>'));
    if (play) player.click();
  }
  function applyMode() {
    if (!hasVideo) mode = "read";
    Array.prototype.forEach.call(setup.querySelectorAll(".wt-mode button"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-mode") === mode ? "true" : "false"); });
    allSteps.forEach(function (s) { show(s, mode === "watch" ? "video" : "clip", 0, false); });
  }
  Array.prototype.forEach.call(setup.querySelectorAll(".wt-mode button"), function (b) {
    b.addEventListener("click", function () { mode = b.getAttribute("data-mode"); store(MODE_KEY, mode); applyMode(); });
  });
  applyMode();

  // ---------- progress ----------
  var label = rail.querySelector(".wt-progress-label");
  var meter = rail.querySelector(".wt-meter span");
  function paintProgress() {
    allSteps.forEach(function (s) {
      var d = progress.done.indexOf(s.id) >= 0;
      s.el.classList.toggle("is-done", d);
      var b = s.el.querySelector(".wt-done-btn");
      b.setAttribute("aria-pressed", d ? "true" : "false");
      b.textContent = d ? "Step " + s.n + " done" : "Mark step " + s.n + " done";
      var a = rail.querySelector('a[data-step="' + s.id + '"]');
      if (a) { a.classList.toggle("is-done", d); a.querySelector(".wt-toc-num").textContent = d ? "✓" : String(s.n); }
    });
    var count = allSteps.filter(function (s) { return progress.done.indexOf(s.id) >= 0; }).length;
    label.innerHTML = count === allSteps.length ? "<b>All " + count + " steps done.</b> Nice work." : "<b>" + count + "</b> of " + allSteps.length + " steps done";
    meter.style.transform = "scaleX(" + count / allSteps.length + ")";
    Array.prototype.forEach.call(main.querySelectorAll("[data-check]"), function (cb) { cb.checked = progress.checks.indexOf(cb.getAttribute("data-check")) >= 0; });
  }
  paintProgress();

  // ---------- events ----------
  main.addEventListener("click", function (e) {
    var t = e.target;
    var tab = t.closest(".wt-tabs button");
    if (tab) { show(byId[tab.closest(".wt-step").getAttribute("data-step")], tab.getAttribute("data-tab"), +tab.getAttribute("data-clip") || 0, false); return; }
    var sm = t.closest(".wt-show");
    if (sm) {
      var art = sm.closest(".wt-step");
      show(byId[art.getAttribute("data-step")], "clip", +sm.getAttribute("data-clip"), true);
      var m = art.querySelector(".wt-media"), r = m.getBoundingClientRect();
      if (r.top < 0 || r.bottom > innerHeight) m.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    var db = t.closest(".wt-done-btn");
    if (db) {
      var id = db.closest(".wt-step").getAttribute("data-step");
      var i = progress.done.indexOf(id);
      if (i >= 0) progress.done.splice(i, 1); else progress.done.push(id);
      store(KEY, progress); paintProgress();
      if (i < 0) {
        var idx = allSteps.findIndex(function (s) { return s.id === id; });
        var next = allSteps[idx + 1];
        toast(next ? "Step " + (idx + 1) + " done. Next: " + next.title : "All done. Your site is live!");
      }
      return;
    }
    var cp = t.closest(".wt-copy");
    if (cp) {
      var code = cp.parentNode.querySelector("pre");
      var text = code ? code.textContent : "";
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(code); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); toast("Selected. Press Ctrl/⌘ + C to copy"); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { cp.textContent = "Copied"; setTimeout(function () { cp.textContent = "Copy"; }, 1500); }, fallback);
      else fallback();
    }
  });
  main.addEventListener("change", function (e) {
    var cb = e.target.closest("[data-check]");
    if (!cb) return;
    var cid = cb.getAttribute("data-check");
    progress.checks = progress.checks.filter(function (c) { return c !== cid; });
    if (cb.checked) progress.checks.push(cid);
    store(KEY, progress);
  });

  var resetBtn = rail.querySelector(".wt-reset"), armed = false, armT;
  resetBtn.addEventListener("click", function () {
    if (!armed) { armed = true; resetBtn.textContent = "Click again to clear progress"; armT = setTimeout(function () { armed = false; resetBtn.textContent = "Reset progress"; }, 4000); return; }
    clearTimeout(armT); armed = false; resetBtn.textContent = "Reset progress";
    progress = { done: [], checks: [] }; store(KEY, progress); paintProgress(); toast("Progress cleared");
  });

  // ---------- rail: open on wide screens, highlight the current step ----------
  var det = rail.querySelector(".wt-toc-details");
  var wide = window.matchMedia("(min-width: 80rem)");
  var syncDet = function () { if (wide.matches) det.open = true; };
  syncDet();
  if (wide.addEventListener) wide.addEventListener("change", syncDet);
  det.addEventListener("click", function (e) { if (e.target.closest("a") && !wide.matches) det.open = false; });
  if ("IntersectionObserver" in window) {
    var links = rail.querySelectorAll(".wt-toc a");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Array.prototype.forEach.call(links, function (l) { l.removeAttribute("aria-current"); });
        var a = rail.querySelector('a[data-step="' + en.target.getAttribute("data-step") + '"]');
        if (a) a.setAttribute("aria-current", "step");
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    allSteps.forEach(function (s) { spy.observe(s.el); });
  }
})();
