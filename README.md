# CollectionBuilder Documentation

<https://collectionbuilder.github.io/cb-docs/>

Documentation for CollectionBuilder, an open source tool for creating digital collection and exhibit websites that are driven by metadata and powered by modern static web technology.

This documentation covers details for CollectionBuilder-GH, CollectionBuilder-CONTENTdm, and CollectionBuilder-CSV.

## Contributing 

Outside contributors are welcome and encouraged to help make these docs better!
If you discover an error, or a page in need of an update or clarification, please [open an new Issue](https://github.com/CollectionBuilder/cb-docs/issues) describing the problem, including link to the page.
If you would like to edit directly, please [Fork this repository and open a Pull Request with your changes](https://guides.github.com/activities/forking/). 
This can be facilitated by following the "Edit this page on GitHub" link at the bottom of any content page.

Documentation follows these conventions:

- All documentation files are written in Markdown. For clearer version control, editing, and accessibility please:
    - write one sentence per line.
    - always provide a blank line between elements (i.e. headers, paragraphs, lists, code blocks).
    - headers should follow logical order on page without skipping levels.
    - page should always start with an H1 (`# `).
    - code and variables should be given `code` class using backticks, filenames should be given in "quotes".
- Markdown files are located in the "docs" folder and are further organized into folders for each section.
- Each section should have an "index.md" presenting an introduction to the section. 
    - The index should have front matter variables `nav_order` (setting over all order in side bar nav) and `has_children: true`. 
    - The index does NOT need a TOC of section contents, as that will be added automatically by the template.
- Individual doc topics should be their own Markdown file. 
    - Each should have front matter variables `parent` (matching the title of section index) and `nav_order` (setting order within the section). 
    - Content can be styled using [Just the Docs classes and utilities](https://just-the-docs.github.io/just-the-docs/) and CB specific features documented below.
- For pages that shouldn't appear in nav, add front matter `nav_exclude: true`.

Example section index front matter:

```
---
title: Software
nav_order: 2
has_children: true
---
```

Example doc file front matter: 

```
---
title: Install Git and GitHub Desktop
parent: Software
nav_order: 1
---
```

## Content Features

Basic styling components can be added to content pages using Kramdown ["Attribute List syntax"](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions).
The theme started with [Just the Docs docs](https://just-the-docs.github.io/just-the-docs/docs/ui-components), so contains JTD's built in UI components and helpers (however, it does not match the most recent version of JTD!).
This project adds some additional component styles:

**Buttons**

- add the attribute list directly next to a markdown link starting with the `.btn` class
- add color using `.btn-primary`, `.btn-purple`, `.btn-blue`, or `.btn-green` 
- make into outline only using `.btn-outline`
- e.g. `[Example Link](https://example.com){:.btn .btn-purple}`
- To make the link open in a new tab add `target="_blank" rel="noopener"` to the attribute list syntax.
    - e.g. `[Example Link](https://example.com){:target="_blank" rel="noopener"}`
    - e.g. `[Example Link](https://example.com){:.btn .btn-purple target="_blank" rel="noopener"}`

**Alerts**

The `.alert` class adds "card" like styling to a paragraph of text or div (a rounded border, drop shadow, and padding).
This can help text stand out on the page, useful for asides or for important warnings and hints.

In a Markdown paragraph: 

- on the line above *or* below the paragraph, add the class `{:.alert}`
- add color using `.alert-primary`, `.alert-purple`, `.alert-blue`, `.alert-green`, `.alert-yellow`, or `.alert-red`
- e.g. `{:.alert .alert-red}`

As a div around Markdown content:

- on a line above the content you want in the alert, add `<div class="alert alert-red" markdown="1">` (modifying the color class as desired)
- on a line below the markdown content you want in the alert, close the div `</div>`

## Adding Images 

Most content in cb-docs does not include images to keep it simple and sustainable. 
When we do need to add images, here are some guidelines: 

- ensure the image files are optimized for the web (use [Squoosh app](https://squoosh.app/) to optimize)
- add image files to the "assets/images/" folder
- img tags have `max-width: 100%` applied by default, so you can include the images directly using markdown if desired, e.g. `![good alt text]({{ '/assets/images/example.jpg' | relative_url }})`
- alternatively, if necessary use the include feature/image.html, e.g. `{% include feature/image.html img="filename.jpg" alt="description of the image content" width="50%" %}`
- if the page includes multiple images, you can lazy load by adding `lazyload: true` to the front matter of the page and using the feature/image.html include to add the images
- the `img-border` class can be used to add styling similar to Alerts (or add the option `border=true` to the feature/image.html include).

To add a video embed from YouTube or Vimeo, use the include feature/video-embed.html e.g. `{% include feature/video-embed.html video="https://www.youtube.com/watch?v=ZPOKRpxGJqg" title="A quick history of CollectionBuilder" %}`.

## Collections

CB-docs uses two Jekyll "collections" to generate special content pages, "_glossary" and "_change-log". 

The "glossary" collection contains short descriptions of various technical components used by CB along with links to further resources. 
The glossary items are pulled into a single page in the file "docs/glossary.md".

The "change-log" collection contains short descriptions of major and breaking changes to the templates and docs to help people debug issues between versions. 
The change items are pulled into a single page in the file "docs/changes.md".

## Use Locally

- clone repository, `git clone https://github.com/collectionbuilder/cb-docs.git`
- in repository folder, `bundle install` (this project uses "github-pages" gem to keep in sync with GH Pages. this necessary **first time** you use the repository only!)
- in repository folder, `bundle exec jekyll s` to serve the site locally

## Customize Template

- create new UI components in "_includes/feature"
- develop custom color scheme by overriding base variables in "_sass/color_schemes/cb.scss"
- add new custom SASS to "_sass/custom/custom.scss"

## About the Theme

This repository is built on "Just the Docs" theme (<https://github.com/just-the-docs/just-the-docs>).
The theme was forked in 2021-04 and all files are included in this repository (rather than as a gem theme). 
Some aspects of the theme are customized, some additional component styles are added, and it does not track JTD's updates (it isn't compatible with current JTD versions!).
