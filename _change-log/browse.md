---
title: Browse Page Enhancements
release: 2025-05-30
---

CollectionBuilder-CSV now supports enhanced browse functionality with new advanced search and filtering capabilities:

## New Browse Features

- **Advanced Search**: Users can now access detailed search options via a modal dialog by clicking the advanced search button above the search box. This allows for more complex search construction and filtering.
- **Faceted Search**: A new field selection panel appears to the left of search results, enabling users to filter results by specific metadata fields configured in config-browse.csv.
- **Default Sorting**: Collections can now specify a default sort field that determines the initial order when users first visit the Browse page.

These features are controlled through new options in "_data/theme.yml":
- `advanced-search: true/false`
- `faceted-search: true/false` 
- `default-sort-field: [field-name]`


{:.alert .alert-red}
**Note:** Enhanced browse features are currently only available in **CollectionBuilder-CSV**. GH and SHEETS templates continue to use simple search functionality.

## Template Integration Updates

- **URL Filtering**: Browse page now supports dynamic filtering through URL parameters (e.g., `browse.html#subject:forests`)
- **Word Cloud Links**: Links from word clouds now integrate with the new browse filtering system
- **Item Page Links**: Subject and location links on item pages now properly filter browse results

## Home Page Content Update

The home page feature formerly called "Objects"  has been renamed to "Content" for better clarity and it's include snippet is now at `_includes/index/content.html` rather than `_includes/index/objects.html`. The functionality remains unchanged.

## Backward Compatibility

Users preferring the simpler search functionality can disable the enhanced features by setting both `advanced-search` and `faceted-search` to `false` in theme.yml. The template will revert to the previous search behavior.



These enhancements are documented in the [Browse Page theme options]({{ '/docs/theme/browse/' | relative_url }}) and [Browse Configuration]({{ '/docs/customization/config-browse/' | relative_url }}) sections.

