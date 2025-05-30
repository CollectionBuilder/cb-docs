---
title: Browse Page
parent: Theme Options
nav_order: 2
---

# Browse Page

This section of "_data/theme.yml" configures your collection's Browse page features.

{:.alert .alert-blue}
**NOTE:** The options described below only apply to **CSV**. **GH** and **SHEETS** do not have faceted/advanced search options or default sort (yet).

## Browse Page Options:

### advanced-search:

- This option enables or disables the advanced search functionality.
- When enabled, users can access advanced search options by clicking the advanced search button above the search box. This opens a modal in which more complex searches can be constructed.
- It can be either:
```yaml
advanced-search: true
```
- or:
```yaml
advanced-search: false
```

### faceted-search:

- This option enables or disables faceted search functionality.
- When enabled, a field selection panel appears to the left of the search results, allowing users to filter results by specific metadata fields.
- It can be either:
```yaml
faceted-search: true
```
- or:
```yaml
faceted-search: false
```

{:.alert .alert-yellow}
**Simple Search Option:** The below options enable advanced/faceted search options. To use the basic search functionality instead, set both `advanced-search` and `faceted-search` to `false` in theme.yml.



### default-sort-field:

- Determines which metadata field is used for the default sorting of browse results.
- The value must match one of the field values (first column) in the browse-config.csv file.
- For example:
```yaml
default-sort-field: date
```
- If left blank or if the value doesn't match any field in browse-config.csv's first column, the default sort will be a random sort.


{:.alert .alert-blue}
**Note:** The Browse page's display fields are configured in "_data/browse-config.csv". This file defines which metadata fields will be displayed and how they'll appear in the browse view. [More Here]({{'/docs/customization/config-browse/' | relative_url }})

{:.alert .alert-green}
**Pro Tip**: When configuring your Browse page, consider what fields are most important for your users to search and filter by. Including too many facets can be overwhelming, while too few might limit discovery.