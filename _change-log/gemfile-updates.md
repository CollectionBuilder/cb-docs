---
title: Gemfile Updates
release: 2025-03-04
---

New versions of Ruby (3.4.0+) are removing a variety of packages from the standard library.
Jekyll's dependencies do not yet cover all these changes, so to avoid a bunch of scary depreciation warnings in the console and errors with fresh Ruby installs, several new Gems have been added to the default CB "Gemfile".

If you have an older project with freshly installed ruby, you may need to delete the "Gemfile" and "Gemfile.lock" in your repository, then add a copy of the new ["Gemfile" from collectionbuilder-csv](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/Gemfile).
