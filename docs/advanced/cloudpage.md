---
title: New Cloud Pages
parent: Advanced
nav_order: 2
---

# Create Cloud Visualizations

## Built-in Clouds

For simplicity, the default CollectionBuilder theme has two pre-configured cloud visualizations named "subjects" and "locations." 
These can be easily edited and controlled using variables in the ["_data/theme.yml"]({{ '/docs/theme/' | relative_url }}) file to generate clouds from any field(s) (*not necessarily just a "subject" or "location" field*). 
The files "pages/subjects.md" and "pages/locations.md" pull in these theme values to create the default cloud pages and also create matching data outputs in the "assets/data/" folder.
If you change from "Subject" and "Location", be sure to edit the markdown stub's titles to match your new featured fields.

Generally, it is simplest to first customize these built in cloud pages to your collection needs before creating new ones--
however, you can also quickly create new custom Cloud pages or add term clouds as a feature Include on content pages following the instructions below. 

## Create a New Cloud Page Using Cloud Layout and Front Matter

Custom cloud pages can be easily created using the cloud layout and page front matter. 

{:.alert .alert-yellow}
**Important note:** When you create a new cloud page, you will need to add this new page to the config-nav.csv file so it is accessible from the top navigation menu. See our [Add a New Page documentation](https://collectionbuilder.github.io/cb-docs/docs/pages/add_page/#add-a-new-page-to-the-nav){:target="_blank" rel="noopener"} for more info.

To create a new cloud page, follow these steps:

1. First, navigate to the "pages" directory and create a new markdown file. (For example, to create an Authors cloud page, create a file named "authors.md").
2. Edit your new markdown file by adding the following content at the start of the file:

```yaml
---
title: Authors
layout: cloud
permalink: /authors.html
cloud-fields: creator
cloud-min: 
cloud-stopwords:
---

## Browse Authors

Example custom cloud page.
```
3. Substitute your own values for "title" and "permalink" based on the name of your new page. 
4. Leave `cloud` as the value for "layout" (this value is necessary for the cloud page to generate).
5. Add your values for the remaining three variables according to the following parameters:
    - `cloud-fields:` (required), a metadata field, or a set of metadata fields separated by `;`, to be featured in the cloud.
    - `cloud-min:` (optional), an integer value such as `2`.
    - `cloud-stopwords:` (optional), a value or set of values separated by `;` that will be removed from display

Additional Cloud options can be tweaked (shuffle, background, or button color), check the full options documented in the comments of the cloud feature include "_includes/feature/cloud.html".

## Cloud Feature Include

In some cases you might want to add a cloud visualization to an existing page, such as an interpretive About page.
Clouds can be added to any page using the "feature/cloud.html" Include in the page content. 

In the location where you want to term cloud to appear, add the include on its own line, for example:

`{% raw %}{% include feature/cloud.html fields="subject;creator" min=2 %}{% endraw %}`

The "fields" option is required, matching one or more metadata fields you want to display in the cloud.
Check the comments at the top of the include file "_includes/feature/cloud.html" in your project for the full options!
