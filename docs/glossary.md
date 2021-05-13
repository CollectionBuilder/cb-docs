---
title: Glossary
---

# Glossary of Terms

Below are some important concepts, software, standards, and other things you might encounter in these Docs and working with CollectionBuilder. 

{% assign terms = site.glossary %}
{% for t in terms %}
--------

## {{ t.title }}

{% if t.link %}<{{ t.link }}>{% endif %}

{{ t.content }}

{% endfor %}
