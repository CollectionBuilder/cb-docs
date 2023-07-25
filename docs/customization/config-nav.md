---
title: Navigation
parent: Page Config
nav_order: 1
---

# Navigation Bar Configuration (config-nav.csv)

The "_data/config-nav.csv" CSV controls what and in what order the links appear in your collection site's navigation bar and footer navigation. 
The config provides a lot of flexibility to customize what is discoverable on your site.
Information below describes the details, or check the [example](#example).

The CSV has three columns, `display_name`, `stub`, and `dropdown_parent`.
Each row in the CSV will become one element in the nav bar, either a direct link or in a dropdown, following these conventions:

### display_name: 

- The text that will display in the nav bar or dropdown.

### link: 

- The URL the display text will link to.
- In most cases, `stub` values will match a `permalink` value in the front matter of your page files found in the "pages" folder. In this case the `stub` is a relative link within the project, e.g. `/browse.html`, and should start with a `/` forward slash.
- To link to an external page, paste in a full URL, e.g. `https://example.com/about.html`
- For dropdown parents, i.e. the nav label that you will click to open a dropdown, `stub` will be blank.

### dropdown_parent: 

- For items that should appear inside a dropdown only, list the `display_name` of the dropdown parent.
- For any non-dropdown nav items, this will be blank.
- Follow these rules to configure your nav dropdown:
    - If the item has a `stub`, but no value in `dropdown_parent`, it becomes a normal nav item.
    - If the item has no `stub`, it will become a dropdown menu.
    - If the item has a value in `dropdown_parent`, it will only show up under its matching parent dropdown.

<div class="alert alert-blue" markdown="1">

**Important notes:**

- If a page isn't listed in config-nav, it won't be directly discoverable! This is the fastest way to remove a page from your collection (rather than deleting the stub file in "pages"). 
- The same is true if you create a new page--don't forget to add it to the nav! See the [Add Page]({{ '/docs/pages/add_page/' | relative_url }}) for more details.
- The data downloads displayed on the "Data" page, on the home page "Collections as Data" box, and in the data markup schemas is based on which pages are present in "config-nav.csv" `stub` field. If `stub` contains "subject", "location", "map", and/or "timeline" the corresponding data formats will be displayed for download and included in the markup. See "docs/data.md" in your repository for more details.

</div>

------

## Example

```
display_name,stub,dropdown_parent
Home,/,
Browse,/browse.html,
Subjects,/subjects.html,
Map,/map.html,
Timeline,/timeline.html,
Data,/data/,
About,,
About the Collection,/about.html,About
CollectionBuilder,/tech.html,About
```

### Example Explained

The above example will create seven links in the top nav bar for the referenced pages. These same nav items will also automatically appear in the footer. 

See a screenshot of this example nav bar below:

{% include feature/image.html img="example-nav-bar.png" alt="Example navigation bar including Home, Browse, Subjects, Map, Timeline, Data, and About with two drop down options for About the Collection and CollectionBuilder" border=true width="80%" %}

You might have noticed that the Locations Page has been deleted from this example, so it won't show up in the nav bar. If you want to add it back in, you'll just need to add a line after the `Subjects,/subjects.html,` line that reads: `Locations,/locations.html,`

### How the Dropdown Works

The last two lines of this CSV will appear within the "About" dropdown menu. 
To enable this, "About" must have no value in `stub` or `dropdown_parent` cells--this will direct the code to make "About" a dropdown button and store any link that lists "About" as its `dropdown_parent` in its dropdown menu. 

So in the above example, when About is clicked the dropdown menu will appear with "About the Collection" and "CollectionBuilder" listed, both linking to their respective pages.

{:.alert .alert-red}
**Note**: Dropdowns do NOT appear in the footer nav. The parent will appear, with a link to the top child. 
