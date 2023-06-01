---
title: Compound Objects
parent: Theme Options
nav_order: 10
---

# Compound Objects

<div class="alert alert-yellow" markdown="1"> 
If there are no compound objects in your collection, **ignore this section.**
</div>

This section of "_data/theme.yml" configures the display of compound object children on the site's visualization and data pages.
Following the conventions below, any child object with the proper corresponding metadata (lat/long for map, date for timeline) can be added to or removed from visualizations.

A "Compound Object" describes an item that is made up of a set of digital files intended to be treated as one connected item in the collection site and displayed on a single Item page. Note that this section configures compound objects only after they've been added to the collection -- if you would like to add compound objects to your site, see the [Compound Objects section]({{ '/docs/metadata/compound-objects/' | relative_url }}) of the docs. 

### map-child-objects:

- If true, and if child item has latitude and longitude values in metadata, child objects will be displayed on map
    - Options: `true`, `false`
```yaml
map-child-objects: true
```

### timeline-child-objects:

- If true, and if child object has date value in metadata, child objects will appear as thumbnails on timeline page
    - Options: `true`, `false`
```yaml
timeline-child-objects: true
```

### data-child-objects:
- If true, child objects will appear linked in table on data page
    - Options: `true`, `false`
```yaml
data-child-objects: false
```

### carousel-child-objects:
- If true, child objects will appear on homepage carousel
    - Options: `true`, `false`
```yaml
carousel-child-objects: false
```

### browse-child-objects:
- If true, child objects will appear on browse page and child objects' metadata will populate cloud pages like Subjects page and Locations page, as well as featured terms boxes on the home page
    - Options: `true`, `false`
```yaml
browse-child-objects: false
```

### search-child-objects:
- If true, child objects will appear on on search page along with parent objects
    - Options: `true`, `false`
```yaml
browse-child-objects: false
```