---
title: Add Analytics
parent: Advanced
nav_order: 5
---

# Add Analytics to your Site

CollectionBuilder templates have a builtin method to add analytics tracking snippets to your site.

Any analytics platform can be added by pasting the tracking snippet they provide into the file "_includes/head/analytics.html".
During "production" build *only*, the include is added to the head to every page.
By default, Jekyll is in the "development" environment, so analytics will not be added while you are testing your site locally.
