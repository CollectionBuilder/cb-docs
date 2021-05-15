---
title: Map
parent: Page Config
nav_order: 4
---

# Map Page Configuration (config-map.csv)

The `_data/config-map.csv` determines what information displays on the pop-ups on the map. More on map search options can be found on the [Theme Options - Map]({{ '/docs/theme/map/' | relative_url }}) page.

The columns are described below, and an [example](#example) is provided for your convenience:

### field: 
- Determines the metadata field that is included on the pop-up. 

### display_name: 
- Determines the label that is displayed for that field. 

### search: 
- Determines whether the field is searchable. 
    - *Options*: `true` or leave blank

---

## Example 

```
field,display_name,search
date,Date,true
creator,Creator,true
location,Location,true
```