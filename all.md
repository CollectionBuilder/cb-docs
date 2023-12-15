---
layout: all
title: CollectionBuilder Docs All
nav_order: 20
description: "CollectionBuilder is an open source tool for creating digital collection and exhibit websites that are driven by metadata and powered by modern static web technology."
---

{% for page in site.pages %}
    {{page.title}}
    {{page.content}}
{% endfor %}