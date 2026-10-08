# Builds a standalone, shareable copy of the CB-Essay recipe walkthrough.
# It renders docs/walkthroughs/essay-walkthrough.md with kramdown (as Jekyll does)
# and inlines assets/js/walkthrough.js and assets/css/walkthrough.css, so the
# standalone page and the docs page come from the same source.
#
#   bundle exec ruby prototypes/essay-recipe/build.rb
#
require "kramdown"
require "kramdown-parser-gfm"
require "yaml"
require "json"
require "cgi"

root = File.expand_path("../..", __dir__)
src = File.read(File.join(root, "docs/walkthroughs/essay-walkthrough.md"))
_, front, body = src.split(/^---\s*$/, 3)
page = YAML.safe_load(front)
body = body.gsub(/\{%-?\s*(raw|endraw)\s*-?%\}/, "")

html = Kramdown::Document.new(body, input: "GFM", hard_wrap: false, syntax_highlighter: "rouge").to_html
css = File.read(File.join(root, "assets/css/walkthrough.css"))
js = File.read(File.join(root, "assets/js/walkthrough.js"))
shell = File.read(File.join(__dir__, "shell.html"))

out = shell
  .sub("/*WALKTHROUGH_CSS*/") { css }
  .sub("/*WALKTHROUGH_JS*/") { js }
  .sub("<!--CONTENT-->") { html }
  .sub("DATA_COMMIT") { CGI.escapeHTML(page["commit_in"].to_s) }
  .sub("DATA_PERSONALIZE") { CGI.escapeHTML(JSON.generate(page["personalize"] || {})) }

File.write(File.join(__dir__, "index.html"), out)
puts "Wrote #{File.join(__dir__, 'index.html')} (#{out.bytesize} bytes)"
