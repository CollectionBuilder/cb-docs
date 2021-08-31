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

First, you will notice the front matter block which configures some page options (see [page basics]({{ '/docs/pages/basics/' | relative_url }}).
In most cases you will leave this unedited.

Below the front matter block is content written in [Markdown]({{ '/docs/glossary/#markdown' | relative_url }}).
This is where you can start writing about your collection!

However, notice that the first content line you will see looks like:

```
{% raw %}{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}{% endraw %}
```

This a [Liquid Include](https://jekyllrb.com/docs/includes/) command that is adding a large image with text at the top of the default page.
Includes are a powerful feature of Jekyll that allow modular elements or content to be drawn into your site's pages from a central location.

In this case the include is calling the file `feature/jumbotron.html`, and providing the option `objectid` with a URL to an external image.
You should update the value of `objectid` replacing the URL with either an objectid of an image item from your collection or a URL for your own external image (or [see Jumbotron]({{ '/docs/pages/features/#jumbotron' | relative_url }}) on the Feature Includes page).
If you don't want the "jumbotron" feature, just delete the full line of the include.

The template file contains some placeholder CollectionBuilder information and content.
Towards the bottom of the template "about.md" you will notice a comment and "about_the_about.md" include.
Be sure to delete this and anything else you don't want to appear on your "About" page.
But first, check out the generated "About" page, since this content demonstrates using feature includes!

You can learn more about the includes feature as well as the variety of options offered at the [Feature Includes Options]({{ '/docs/pages/features/' | relative_url }}) page.

{% include feature/button.html link="/docs/pages/features/" text="See a List of Features"%}
