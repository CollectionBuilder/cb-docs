---
title: Interpretive Pages
parent: Edit Pages
nav_order: 2
---

# Interpretive Pages

The best way to tell your collection's story is to create interpretive content that combines collection items with descriptive text.

CollectionBuilder promotes an easy transition between curating your collection data to writing *with* it, allowing you to combine featured objects and text on interpretive exhibit pages in a format that engages your audience and encourages them to analyze and reflect on the the wider, critical implications of your collection data.

You can create as many interpretive pages as you'd like, and use them for a variety of purposes, but most often our collections' interpretive pages take the form of an "About" page outlining the details of the collection.

For this reason, an "about.md" file is included in the CollectionBuilder template for you to edit following the instructions below. 
You can always add other interpretive pages using the same features by following the instructions in the [Add Page]({{ '/docs/pages/add_page/' | relative_url }}) section.

## About Page

To edit the About page, navigate to the "pages" directory and open the "about.md" file. 

### About Front Matter Options 

First, you will notice a *large* YAML front matter block.
These options are used to configure the built in features of the default `about` page layout.

Here are the options (which are all optional!):

- `credits:` true/false, adds information about CollectionBuilder at the bottom of the page.
- `about-featured-image:` Add a full width image feature to top of the content area. Similar to featured-image in "theme.yml", this value can be an objectid, a relative path, or full url to any image. If left blank no image will be displayed.
- `position:` Set background-position for featured image, choosing from `center`, `top`, or `bottom`. The image is set to cover the whole feature width, so will be cropped differently depending on the user's screen size--this option gives you a bit of control to focus the image.
- `heading:` Add a main heading displayed over the featured image. This is often "About the Collection" or the title of the collection. Leave blank to have no heading.
- `sub-heading:` Add smaller heading below the main heading, often a sub title or collection tagline. Leave blank to have none.
- `padding:` Add additional padding to increase the size of the feature. The value will be in em, rem, or px, such as `5em`.
- `toc:` true/false, adds the auto-generated side bar TOC feature. Note, this option is not included on the default template front matter and defaults to true, but can be added in if you want to turn off the TOC! The TOC will automatically create nav links for all headings in your content from h1 - h3. It is possible to customize the options further by directly editing the include in "_layouts/about.html". The TOC is based on [allejo/jekyll-toc](https://github.com/allejo/jekyll-toc) Liquid plugin.

### About Markdown and Includes 

Below the front matter block is content written in [Markdown]({{ '/docs/glossary/#markdown' | relative_url }}).
This is where you can start writing about your collection!

You will notice that the template file starts with a h2 heading (`##`) which fits the expected layout in the output html.
Use h2 (`##`) for the main headings on your About page.

You will see some placeholder CollectionBuilder information and content in the template "about.md"--use this as a model and demonstration of how features work, then *please DELETE it!*

Notice further down the example content a line that looks like:

```
{% raw %}{% include feature/image.html objectid="demo_001" width="75" %}{% endraw %}
```

This is a [Liquid Include](https://jekyllrb.com/docs/includes/) command that is adding an image from the demo metadata.
Includes are a powerful feature of Jekyll that allow re-useable modular components to be added to your site's pages.

In this case the include is calling the file `feature/image.html`, and providing the option `objectid` with a objectid of a item in the demo metadata.

There is a whole set of Includes designed to add features to your interpretive pages that can be found in "_includes/feature/" in your project.
Information about how to use them can be found directly at the top of each Include file.
You can learn more about the includes and how to use them on the [Feature Includes Options]({{ '/docs/pages/features/' | relative_url }}) page.

**Remember to DELETE all the placeholder content once you have your collection set up!**

[View About the About Demo Page](https://collectionbuilder.github.io/collectionbuilder-gh/about.html)
