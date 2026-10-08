---
part: Add your metadata
title: Point the site at your metadata
apps: [vscode]
video: 9K52tsTQq0o
clips:
  - file: change-metadata-file.gif
    label: Set metadata
  - file: change-title.gif
    label: Set title
save: Update site settings
done: Both lines match yours, and the tab has no unsaved dot.
more:
  title: What else is in _config.yml?
  text: Everything about how your site is built. See the [Site Config docs](/docs/config/).
---

1. Open `_config.yml`. Under **COLLECTION SETTINGS**, set `metadata` to your file name without `.csv`: {% include show-me.html clip=1 %}

   ```yaml
   metadata: your-repo
   ```

2. Under **SITE SETTINGS**, give your site a title: {% include show-me.html clip=2 %}

   ```yaml
   title: Your Site Title
   ```
