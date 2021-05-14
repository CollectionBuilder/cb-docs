---
title: YAML
link: http://www.yaml.org/
---

[YAML](http://www.yaml.org/){:target="_blank" rel="noopener"} is a "human readable" plain text data format.
It is used in Jekyll for configuration, site data, and front matter:

- Jekyll projects are [configured](https://jekyllrb.com/docs/configuration/){:target="_blank" rel="noopener"} using the "_config.yml" file.
- YAML, JSON, or CSV files in the "_data" directory are exposed by Jekyll as [site data](https://jekyllrb.com/docs/datafiles/){:target="_blank" rel="noopener"} for Liquid templating.
- Any file in a Jekyll project with YAML [Front matter](https://jekyllrb.com/docs/frontmatter/){:target="_blank" rel="noopener"} will be processed, others are just directly copied the the `_site` directory on build.

For example, the YAML front matter might look like:

```
---
title: Example Title
layout: default
---
```
