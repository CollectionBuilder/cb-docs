---
title: Change Log
nav_order: 13
---

# Change Log

This page lists major changes to the CollectionBuilder templates over time. 
The records might help debug issues if you are working with an older project.

{% assign changes = site.change-log | sort: "release" | reverse %}
{% for c in changes %}- [{{ c.title }}](#{{ c.title | slugify }}), {{ c.release }}
{% endfor %}

{% for c in changes %}
--------

## {{ c.title }}

**{{ c.release }}**

{{ c.content }}

{% endfor %}
