# Walkthrough authoring: three options

The same two steps of the CSV walkthrough, written three ways. All three produce the
walkthrough prototype in `../csv-walkthrough/`. All three work on the standard GitHub Pages
build, which doesn't allow custom Jekyll plugins.

| | A. YAML data file | B. Markdown with conventions | C. One file per step |
|---|---|---|---|
| Where | `_data/walkthroughs/csv.yml` | `docs/walkthroughs/csv-walkthrough.md` | `_walkthroughs/csv/03-repo.md` … |
| Writing feels like | Filling in a config file | Writing a normal docs page | A form (front matter) plus a page |
| Prose | Inside quoted strings | Plain Markdown | Plain Markdown |
| Breaks when | Indentation or a stray `:` is wrong, and the whole page fails | A convention is missed, and that bit renders as plain Markdown | Front matter is mistyped, and that one step fails |
| Without JavaScript | Rendered by Liquid, so it's fine | A complete, readable Markdown page | Rendered by Liquid, so it's fine |
| Reordering steps | Move a block | Move a section | Rename files |
| Rendering code | Liquid include (medium) | Small JS enhancer (medium) | Liquid layout and collection (medium) |
| Contributors on GitHub | Hard to review prose diffs | Same as today | Fine, but 17 files per walkthrough |

**Recommendation: B.** It's closest to what people already write, and it degrades into an
ordinary docs page. The only new things to learn are four conventions:
`### step` + `{: app="…" video="…"}`, an image indented under a numbered item,
`> **Done when:**`, and `#### more`.

Implementation notes for B:
- kramdown (Jekyll's Markdown converter) keeps the `{: app=… video=…}` attributes on the `<h3>`,
  keeps indented images inside their `<li>`, and keeps blockquotes as blockquotes.
  This was checked against the local kramdown 2.3.2.
- Use plain-word placeholders (`your-repo`). `{repo}` gets split across spans by
  syntax highlighting inside code blocks.
- Write image paths as `/assets/images/…`. The `walkthrough` layout runs
  a Liquid `replace` on `content` that turns `src="/assets/` into `src="` + `site.baseurl` + `/assets/`
  (build that string with `assign` first, because Liquid doesn't expand `{{ }}` inside a filter argument).
- A small linter (rake task or GitHub Action) could warn when a step has no
  `Done when` or no video. That replaces most of the structure YAML would enforce.
