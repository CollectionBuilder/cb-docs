---
title: Data
parent: Theme
nav_order: 9
---

# Data 

The data section helps connect your metadata to the variety of data derivatives that CollectionBuilder can create. This can be a powerful section to enable machine readable metadata derivatives for your collection and to use yourself, via the facets.json file, which we often use to determine which fields should be visualized using a word cloud feature. 

### **metadata-export-fields**: 
- A list of metadata fields available for export via data downloads.
	- If you'd like all your fields included, paste in the first row of your collection's CSV
	- This variable determines what metadata will be made available for download via the 'Download Data' options on the Home page and on the Data page.
	- Format: Comma-delimited list contained between quotes
	- example --> `metadata-export-fields: "title,description,subject,date,date is approximate,source,latitude,longitude,subject (lcsh),format-original,donor,identifier,format,language,type,rights,rightsstatement,cdmid,objectid"`

{:.alert}
**Pro Tip:** For the **metadata-export-fields** section, copy and paste the first row of your collection metadata CSV (i.e. your metadata fields) into this variable. 

### **metadata-facets-fields**: 
- Generates a facets list download option for given fields.
	- Format: Comma-delimited list contained between quotes
	- example --> `metadata-facets-fields: "subject,locations,format"`

{:.alert}
**Pro Tip:** We use the `facets.json` file quite extensively when designing our sites. By adding a variety of fields here, you can generate a quick overview of the metatdata terms and their counts that are used for a certain category. This often leads to our adding more fields to our `subject-fields` option described in the [Subjects Page](subjects/) section above.
