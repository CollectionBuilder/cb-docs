---
title: Auto Center Map
release: 2025-03-19
---

Thanks to new contributor [alexgao1](https://github.com/alexgao1), a new option to automatically center the default CB map visualization has been added.
Rather than manually set the map's lat/long and zoom in "theme.yml", with the new `auto-center-map: true` option enabled, the map will automatically center and zoom to fit all items on screen.
This is the new default behavior in the template.

If you would like to manually set the center and zoom level for the map, set `auto-center-map: false` and set values for the latitude, longitude, and zoom-level.
