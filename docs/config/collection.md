---
title: Collection Settings
parent: Site Config
nav_order: 3
---

# Collection Settings

This section of "_config.yml" provides important values to CollectionBuilder used to generate your site content and pull in images.

### metadata: 

- The filename **without the extension** of your metadata CSV file. 
- Metadata specified in this value will drive the browsing features and item page generation--this is the true heart of your CollectionBuilder project!
```yaml
metadata: boxing
```

{:.alert .alert-blue}
**GH users**: At this point you can skip to the [Additional Variables]({{ '/docs/config/additional/' | relative_url }}) section.

------

## Optional Page Generation Settings

CollectionBuilder-CSV uses a custom Jekyll plugin to generate individual HTML pages for each item (row) in your metadata CSV.
By default, the "CollectionBuilder Page Generator" plugin needs no additional configuration--it will automatically use the value set in `metadata` to generate pages.

In advanced use cases, you may want to tweak the CB defaults or generate pages from more than one data file. 
The values under the `page_gen` key can be used to customize page generation. 

For details, please see "docs/plugins.md" in the project template you are using.
