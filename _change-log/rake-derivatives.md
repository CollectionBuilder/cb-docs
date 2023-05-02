---
title: Rake Tasks Updated
release: 2023-05-02
---

Contributor [Mortiz Mähr](https://github.com/maehr) refactored CollectionBuilder-CSV's "Rakefile".
The updated "Rakefile" uses the MiniMagick gem to simplify support for ImageMagick versions and the ImageOptim gem to add image optimization to the `rake generate_derivatives` task.
Most users should not notice any change to the tasks.
Linux users with legacy ImageMagick will no longer be required to tweak the IM executable option!

Check ["docs/rake_tasks.md"](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/docs/rake_tasks.md) in CB-CSV for details and options.
