---
title: Plugin Updates
release: 2026-03-19
---

A variety of tweaks were made to CB's custom Jekyll plugins to add use cases and improve documentation.

- "Array Count Uniq" ("array_count_uniq.rb") - added three new Liquid filters that simplify working with "cloud" features `field_count_uniq`, `remove_stopwords`, and `strip_each`
- "sort_numeric.rb" - adds a Liquid filter `sort_numeric` to correctly sort numbers in an array. This can be used for custom Timeline layouts where Liquid's default `sort` filter fails to correctly sort numbers.

Check the documentation at the top of the files and in "docs/plugins.md".