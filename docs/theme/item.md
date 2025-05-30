---
title: Item Page
parent: Theme Options
nav_order: 5
---

# Item Page 

This section of "_data/theme.yml" lets you add or remove browsing navigation features to every item page.

When set to `true`, every item page will have arrow keys and "previous" and "next" buttons allowing users to browse through the collection items. 
The order follows the order represented in the metadata CSV. 
Users will be able to click the buttons or use right/left arrow keys to move through the collection item pages.

In collections where this sort of browsing does not make sense, set this option to `false`.

### browse-buttons: 
- Adds previous/next arrows to items. 
	- Options: `true`, `false`
```yaml
browse-buttons: true
```

*Tip:* Adding the browse buttons will slightly increase build time in very large collections--in this case, try turning browse button to `false` during development to save time.
