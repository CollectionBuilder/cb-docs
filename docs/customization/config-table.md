---
title: Table
parent: Page Config
nav_order: 6
---

# Table Configuration (config-table.csv)

CollectionBuilder uses [DataTables](https://datatables.net/) to generate a table that can be searched, sorted, and downloaded as a whole or in a filtered version.
The table appears on the collection's "Data" page, and the "_data/config-table.csv" allows you to add or remove data from the table and adjust its display name.

We recommend not using more than 5 or 6 fields here, as the table can become overcrowded. 

The columns are described below, and an [example](#example) is provided for your convenience:

### field: 
- Determines the metadata field that is included on the table. 

### display_name: 
- Determines the label that is displayed for that field.

---

### Example 

```
field,display_name
title,Title
date,Date
creator,Photographer
subject,Subjects
```