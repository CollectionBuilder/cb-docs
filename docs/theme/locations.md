---
title: Locations Page
parent: Theme Options
nav_order: 6
---

# Locations Page

This section of "_data/theme.yml" configures the content of the collection's location word cloud page. It functions exactly as the Subjects page does. 

### locations-fields: 
- Choose metadata fields from your collection metadata CSV to be included in the Locations page tag cloud.
	- Multiple fields must be separated by a semicolon(`;`)
```yaml
locations-fields: location;stadium
```
	- When this field is left blank, locations will not be generated and the tag cloud on the Locations page will be blank. 

{:.alert .alert-yellow}
***Important note:*** You must also remove the "Locations" line from the [_data/config-nav.csv]({{ '/customization/config-nav/' | relative_url }}) in order to remove the Locations page from the site completely.

### locations-min: 
- Minimum number of times a location term must appear before being displayed in the tag cloud. 
	- Use this to improve load and build times. Too many terms = slow load time!
	- Range: `1` - `30` (note that a really large number will likely make no locations appear)
```yaml
location-min: 1
```

### locations-stopwords: 
- A set of words/phrases to be removed from the tag cloud.
	- Multiple fields must be separated by a semicolon(`;`)
```yaml
stopwords: Moscow;Pullman
```