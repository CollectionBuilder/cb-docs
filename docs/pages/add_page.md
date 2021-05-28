---
title: Add Page
parent: Edit Pages
nav_order: 3
---

# Add a Page to Your Site

You can add pages to your site in just a couple steps. 
This is especially useful for adding interpretive content to move your project beyond the *curation* and *aggregation* of the digital collection into *analysis* and *reflection*.
Rather than publishing your interpretive work in a separate context, you can integrate it directly into the project, using collection objects in your writing.

## Add a Content Page

To add a new page, you'll need to create a new markdown stub or html file and add front matter to it. 
Then, you'll need to add a link to the new page in your navigation bar.

Follow these steps:

### Create a New Page

1. First, navigate to the "pages" directory and create a new file. In most cases, this will probably be a markdown file (with file extension ".md"), but you can also create an HTML file. For example, for a page on your collection's history, you might create a file named "history.md".
2. Edit your new markdown file by adding the following YAML front matter variables to the top of the file (make sure you include the three hyphens before and after the variables, too!):

```yaml
---
title: Collection History
layout: about
permalink: /history.html
---
```

Jekyll will use these front matter variables to generate your new page, so you'll need to replace the values in the example above with your own:

- **title**: the title of the page.
- **layout**: this specifies an HTML layout for the page, chosen from a layout in the "_layouts" directory. For interpretive pages, we recommend using the `about` layout because it allows for easy reading. But if you're creating another type of page (say, another map visualization) you'll want to select from one of the other existing layouts or create your own. Check out the front matter in the other files in the "pages" directory for examples.
- **permalink**: sets the page's URL, i.e. where it is located when the site is generated.
    - CollectionBuilder templates gather all pages in the "page" folder to keep things organized. The `permalink` value allows us to control where the page's final ".html" file will be located in the site output. 
    - The permalink value: 
        - will start with a `/` forward slash (meaning its location starts after the site's `url` + `baseurl`)
        - have a base filename for the page (usually matching the Markdown file's base name, e.g. "history.md" --> "history")
        - will usually end in `.html` extension (since it will be an HTML page!). If you want to use "pretty links" style, the permalink can end in a slash instead, e.g. `permalink: /history/`.
        - this is a URL and sets the filename so no spaces or weird characters! 
    - For example, the file "pages/about-cats.md" might have `permalink: /about-cats.html`
- You may need to add additional front matter variables, depending on the page you're creating. For instance, [three more variables]({{ '/docs/advanced/cloudpage/#create-a-new-cloud-page-using-cloud-layout-and-front-matter' | relative_url }}) are needed to create a new cloud page.

### Add a New Page to the Nav

Your users will need a way to access the page you just created.
In most cases, you'll want to add a path to it in the site's navigation menu, either directly to the nav bar itself, or as a dropdown option under a current nav element.

Navigate to the "_data" directory and open the "config-nav.csv" file.

To add your page as a new nav bar entry:

- create a new row in the CSV with info for your new page. 
- Fill in a value for `display_text` (the label that will show up in the nav bar) and `link` (matching the permalink of your page). Leave `dropdown_parent` blank.
```
display_text,link,dropdown_parent
Collection History,/history.html,
About,/about.html,
```

To add your page as a dropdown nav item:

- create a new row for the parent, i.e. the nav option that you will click to open the dropdown. This row will have `display_text` filled, and nothing else. Alternatively, you may want to use an existing row, such as "About", by deleting the `link` value.
- Fill in a value for `display_text` (the label that will show up in the dropdown), `link` (matching the permalink of your page), and `dropdown_parent` (matching the `display_text` of the parent you set up).
```
display_text,link,dropdown_parent
About,,
Collection History,/history.html,About
About the Collection,/about.html,About
```

For more detail on adding to and configuring the navigation bar, see the [Navigation Config]({{ '/docs/customization/config-nav/' | relative_url }}) documentation.

## Get Creative By Adding Collection Items

To really convey your interpretive content to your site's users, we've made it easy to include and write about collection items as well as supplemental items. 
See the [Interpretive Pages]({{ '/docs/pages/interpretive/' | relative_url }}) section for instructions on how to include these features.