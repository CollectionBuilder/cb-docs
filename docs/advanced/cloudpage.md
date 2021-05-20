---
title: New Cloud Pages
parent: Advanced
nav_order: 2
---

# Create Cloud Visualizations

## Built-in Clouds

For simplicity, the default CollectionBuilder theme has two pre-configured cloud visualizations named "subjects" and "locations." 
These can be easily edited and controlled using variables in the "theme.yml" file to generate clouds from any field(s) (not necessarily just a "subject" or "location" field). 

```yaml
# Subject page
subjects-fields: subject;creator # set of fields separated by ; to be featured in the cloud
subjects-min: 1 # min size for subject cloud, too many terms = slow load time!
subjects-stopwords: # set of subjects separated by ; that will be removed from display, e.g. boxers;boxing

# Locations page
locations-fields: location # set of fields separated by ; to be featured in the cloud
locations-min: 1 # min size for subject cloud, too many terms = slow load time!
locations-stopwords: # set of subjects separated by ; that will be removed from display, e.g. boxers;boxing
```

These theme configuration options drive pre-made pages (with layouts "subjects" and "locations" respectively).
Modifying the values in the "theme.yml" file can easily transform these two pages into clouds based on any metadata field.
These settings also create matching subject and location data outputs in the "/assets/data/" folder.

If "subjects-fields" or "locations-fields" are blank or commented out, the template will not build out the related cloud page or data, which saves build time. 
If you are developing a particularly large collection, you can comment out these "subjects-fields" and "locations-fields" options in the "theme.yml" to make rebuild during development much quicker. 

Keep in mind these page stub values (`/subjects.html`, `/locations.html`) will also have to be present in "_data/config-nav.csv" to show up in your navigation. 

## Create a New Cloud Page Using Cloud Layout and Front Matter

Custom cloud pages can be easily created using the cloud layout and page front matter.

1. First, navigate to the "pages" directory and create a new markdown file. (For example, to create an Authors cloud page, create a file named "authors.md").
2. Edit the "authors.md" file by adding the following content at the start of the file:

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
4. Leave `cloud` as the value for "layout" (this value is necessary for the cloud page to generate properly).
5. Add your values for the remaining three variables according to the following:

- `cloud-fields:` a value of a set of metadata fields separated by `;` to be featured in the cloud.
- `cloud-min:` (optional), an integer value such as `2`.
- `cloud-stopwords:` (optional), a set of values separated by `;` that will be removed from display

## Cloud _include 

In some cases you might want to add a cloud visualization to an existing page.
Clouds can be added to any page using the "_include/js/cloud-js.html" _include in the page content, with the variable "fields", and optional variables "min" and "stopwords". 
The cloud-js _include assumes a div with `id="cloud"` exists on the page for the cloud to fill.
So putting them together, you can add a cloud anywhere in a page:
```
{% raw %}
<div id="cloud" class="text-center my-4 bg-light border rounded p-2"></div>
{% include js/cloud-js.html fields="creator;publisher" min="2" stopwords="example;another" %}
{% endraw %}
```