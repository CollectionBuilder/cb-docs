---
title: Search
parent: Page Config
nav_order: 5
---

# Search Configuration (config-search.csv)

The "_data/config-search.csv" enables GH and CSV users to select which metadata fields they would like indexed for the collection object search powered by [Lunr.js](https://lunrjs.com/){:target="_blank" rel="noopener"}. 
The values here will determine the results that appear when the site's users search for a term or phrase using the search box on the right-hand side of the header. 
Three columns in this CSV allow you to configure your search.

The columns are described below, and an [example](#example) is provided for your convenience:

### field: 
- Determines the metadata field to be indexed for search
    - *Example:* `title`, `date`, `description`, etc.

### index: 
- Determines whether the field is searchable. 
    - *Options:* `true`, `false`

### display: 
- Determines whether the value of that metadata field is displayed in the search results.
    - *Options:* `true`, `false`

------

## Example 

```
field,index,display
title,true,true
date,true,true
creator,true,false
description,true,true
subject,true,true
location,true,false
```