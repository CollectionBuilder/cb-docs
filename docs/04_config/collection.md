---
title: Collection Settings
parent: Config
nav_order: 3
---

# Collection Settings

This section of "_config.yml" provides important values to CollectionBuilder used to generate your site content and pull in images.

### metadata: 

- The filename **without the extension** of your metadata CSV file. 
- Metadata specified in this value will drive the browsing features and item page generation--this is the true heart of your CollectionBuilder project!
- example --> `metadata: boxing`

{:.alert .alert-blue}
**GH users**: At this point you can skip to the [Additional Variables]({{ '/docs/04_config/additional/' | relative_url }}) section.

---

## Required Settings for CONTENTdm

### cdm-collection-id: 

- The "collection alias" of your CONTENTdm collection
- The alias is a path assigned by CONTENTdm and can be found in CONTENTdm Admin on the Collections > Profile page, or by looking at the URL of the collection on the web. For example "https://cdm17254.contentdm.oclc.org/digital/collection/ui_ep/search" the collection alias is given after "/collection/", so would be `ui_ep`.
- example --> `cdm-collection-id: boxing` 

### cdm-url (for CONTENTdm skin): 

- The full url for your public CONTENTdm instance (*with NO trailing slash!*). 
- Generally these follow the pattern "https://cdm" + a number + ".contentdm.oclc.org", although custom domains should also work. However, your CDM admin interface url (starting with "server", e.g. https://server12345.contentdm.oclc.org) will not work.
- example --> `cdm-url: https://cdm12345.contentdm.oclc.org`

---

## Optional Page Generation Settings

CollectionBuilder-CONTENTdm and -SA use a custom Jekyll plugin to generate individual HTML pages for each item (row) in your metadata CSV.
By default, the "CollectionBuilder Page Generator" plugin needs no additional configuration--it will automatically use the value set in `metadata` to generate pages.

In advanced use cases, you may want to tweak the CB defaults or generate pages from more than one data file. 
The values under the `page_gen` key can be used to customize page generation. 

For details, please see "docs/plugins.md" in the template you are using.
