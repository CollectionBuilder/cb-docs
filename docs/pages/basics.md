---
title: Page Basics
parent: Edit Pages
nav_order: 1
---

# Page Basics

The pages that appear on your collection site start as [Markdown]({{ '/docs/glossary/#markdown' | relative_url }}) files in the "pages" folder of your project repository.
We usually call these "stubs", because Jekyll will process their content and wrap it in template elements to create the final HTML pages.

Most of the page stubs are placeholders for the CollectionBuilder visualization features, such as "Browse" or "Subjects", so **you will rarely have to edit any of the default page stubs.**

However, we hope you *will* [edit the "about.md"]({{ '/docs/pages/interpretive/' | relative_url }}) and perhaps [add more interpretive pages]({{ '/docs/pages/add_page/' | relative_url }}).

The sections below outline important basics of page files.

## YAML Front Matter

For Jekyll to process the page stub, it must have ["YAML Front Matter"](https://jekyllrb.com/docs/front-matter/) at the top of the file. 
If you look at any of the stubs in the "pages" folder you can see examples. 
It looks like:

```yaml
---
title: Browse
layout: browse
permalink: /browse.html
---
```

The front matter block starts with `---` and ends with `---`.
In between those lines, the content is read by Jekyll as [YAML]({{ '/docs/glossary/#yaml' | relative_url }}) data.
Similar to editing "_config.yml" or "theme.yml", this section will be key value pairs, with some special keys that Jekyll is looking for:

- `title` is used for meta tags on the page.
- `layout` corresponds to a template file in the "_layouts" folder (see [Jekyll layouts](https://jekyllrb.com/docs/layouts/) for details). CollectionBuilder provides a variety of layouts for specific page types.
- `permalink` tells Jekyll where to output the page in the site. This will start with slash `/`, and be a filename matching the stub, with the extension `.html`.

You may also see comments (following `#`) with more information about the page or configuration options.

The front matter block will not appear in the final page.
Lines below the front matter block are interpreted by Jekyll as Markdown, and will be the content that appears in the rendered web page.

## Markdown (.md)

The default CollectionBuilder page stubs are written in [Markdown](https://daringfireball.net/projects/markdown/syntax){:target="_blank" rel="noopener"}, thus the ".md" extension.
Markdown is a standard to simplify writing content for the web.
When Jekyll builds the site, the Markdown content is converted into HTML for the final page.

You can use Markdown to write content for your ["About" page or other interpretive pages]({{ '/docs/pages/interpretive/' | relative_url }}).
Markdown is used for in many blogging platforms, static generators, and everywhere on GitHub, so it's a good skill to learn as you get further into this type of development. 

Check our [Markdown glossary entry]({{ '/docs/glossary/#markdown' | relative_url }}) for resources and tutorials!

Alternatively, you can create page stubs with the `.html` extension if you prefer writing HTML directly.

## Navigation

Keep in mind that a page will not appear in the navigation bar unless it appears in ["config-nav.csv"]({{ '/docs/customization/config-nav/' | relative_url }}).

Not all page stubs need to appear in the nav (especially if you aren't using it)!
If a page stub exists, Jekyll will still generate the page whether it is in nav or not.
You can add a link to a page in other content pages, even if the page is not in the main nav.
