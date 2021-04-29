# cb-docs

> work in progress! 
> Please see current docs <https://collectionbuilder.github.io/docs/introduction.html>

Draft documentation for CollectionBuilder, migrating docs from collectionbuilder.github.io.

## About 

This repository is based on "Just the Docs" theme (<https://github.com/pmarsceill/just-the-docs>).
The theme was forked in 2021-04 and all files are included in this repository (rather than as a gem theme). 

## Contributing 

Outside contributors are welcome and encouraged to help make these docs better!
If you discover an error, or a page in need of an update or clarification, please [open an new Issue](https://github.com/CollectionBuilder/cb-docs/issues) describing the problem, including link to the page.
If you would like to edit directly, please [Fork this repository and open a Pull Request with your changes](https://guides.github.com/activities/forking/). 
This can be facilitated by following the "Edit this page on GitHub" link at the bottom of any content page.

Documentation follows these conventions:

- All documentation files are written in Markdown. For clearer version control and editing, please:
    - write one sentence per line.
    - provide a blank line between elements (i.e. headers, paragraphs, lists, code blocks).
    - headers should follow logical order on page without skipping levels.
    - page should start with an H1 (`# `)
- Files are located in the "docs" folder and are further organized into folders for each section.
- Each section should have an "index.md" presenting an introduction to the section. 
    - The index should have front matter variables `nav_order` (setting over all order in side bar nav) and `has_children: true`. 
    - The index does NOT need a TOC of section contents, as that will be added automatically.
- Individual doc topics should be their own Markdown file. 
    - Each should have front matter variables `parent` (matching the title of section index) and `nav_order` (setting order within the section). 
- Pages that shouldn't appear in nav, add front matter `nav_exclude: true`.

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

## Use Locally

- clone repository, `git clone https://github.com/collectionbuilder/cb-docs.git`
- in repository folder, `bundle install` (this project uses "github-pages" gem to keep in sync with GH Pages)
- in repository folder, `bundle exec jekyll s` to serve the site locally

## Customize

- create new UI components in "_includes/feature"
- develop custom color scheme by overriding base variables in "_sass/color_schemes/cb.scss"
- add new custom SASS to "_sass/custom/custom.scss"
