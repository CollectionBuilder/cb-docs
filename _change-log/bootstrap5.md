---
title: Updated to Bootstrap 5 and removed jQuery
release: 2022-05-07
---

CollectionBuilder updated from Bootstrap 4 to the current version, [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/).

The migration should not impact most projects (old projects do not need to update!).
However, if you did previous customizations with Bootstrap or jQuery, there are some [significant, breaking changes between 4 and 5](https://getbootstrap.com/docs/5.1/migration/).
Important changes include:

- Several Bootstrap class names and qualifiers have changed (e.g. `l` / `r` qualifiers have switched to `s` / `e`, like `ml-3` to `ms-3`).
- Bootstrap data attributes used to initiate features in html have changed (e.g. `data-` to `data-bs-`).
- CB templates no longer includes jQuery (if you have custom javascript starting with `$` it is jQuery and would have to be updated).
- CB templates now use [Bootstrap Icons](https://icons.getbootstrap.com/) instead of FontAwesome.
- CB templates now use [spotlight gallery](https://github.com/nextapps-de/spotlight) instead of Lightgallery.
