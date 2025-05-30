---
title: Map Page
parent: Theme Options
nav_order: 8
---

# Map Page

This section of "_data/theme.yml" configures options for collection's Map page.
Note, the contents of Item popups are configured by ["_data/map-config.csv"]({{ '/docs/customization/config-map/' | relative_url }}).

### auto-center-map:
- Sets the map to auto fit all features into view
- If you would prefer to manually set the map center and zoom, set this value to `false` and configure the latitude, longitude, and zoom-level options. 
```yaml
auto-center-map: true
```

### latitude: 
- Used to manually center map if not using auto-center-map option.
```yaml
latitude: 46.727485
```

### longitude: 
- Used to manually center map if not using auto-center-map option.
```yaml
longitude: -117.014185
```

### zoom-level: 
- Sets the zoom level for map if not using auto-center-map option. The higher the number, the more zoomed-in you'll be. 
	- Range: any whole number between [`0` - `18`]
```yaml
zoom-level: 5
```

### map-base: 
- Determines the base map layer for the map. 
	- Options: `Esri_WorldStreetMap`, `Esri_NatGeoWorldMap`, `Esri_WorldImagery` (Default: Esri_WorldStreetMap)
```yaml
map-base: Esri_WorldImagery
```

**The fields below determine "map search" and "map cluster" features. For larger collections with many items at one spot, we recommend turning on the map-cluster option and turning off the map-search feature.**

### map-search: 
- Enables a user to search the map via the large magnifying glass on the top right. 
	- Not suggested for large collections.
	- Options: `true`, `false`
```yaml
map-search: true
```

### map-search-fuzziness: 
- Allows for less precision with search terms. 
	- Range:
		- `0` = exact match only
		- `1` = anything
```yaml
map-search-fuzziness: 0.35
```

### map-cluster: 
- Clusters markers that are near each other.
	- Suggested for large collections or for collections with many items in same location.
	- Options: `true`, `false`
```yaml
map-cluster: true
```

### map-cluster-radius: 
- Determines the size of clusters. A smaller radius will create more, smaller clusters, and increasing will create fewer, larger clusters on the map.
	- Range: `10` to `80`
```yaml
map-cluster-radius: 25
```

{:.alert .alert-green}
**Tip:** A user can change the **layer** the map is using by clicking on the Layer button at the top right of the map in the browser. <br><br>The map can be **searched** by clicking on the magnifying glass just below the layers option at the top right.
