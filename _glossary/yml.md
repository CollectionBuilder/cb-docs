---
title: YAML
link: http://www.yaml.org/
---

[YAML](http://www.yaml.org/){:target="_blank" rel="noopener"} is a "human readable" plain text data format.
It is used in Jekyll for [configuration](https://jekyllrb.com/docs/configuration/){:target="_blank" rel="noopener"}, [site data](https://jekyllrb.com/docs/datafiles/){:target="_blank" rel="noopener"}, and [Front matter](https://jekyllrb.com/docs/frontmatter/){:target="_blank" rel="noopener"}.

In CollectionBuilder, YAML is used for configuration in "_config.yml" and "_data/theme.yml".
All options are basic key value pairs.
Each pair is on its own line, following the pattern *key* + colon + space + *value*.
Putting quotes around the *value* is optional, unless it contains a colon or line breaks.

Comments are added using a hash `#`.
Anything after a `#` on a line is ignored in processing--so it is just notes to other humans!

For example:

```yaml
# an example comment line
example_key: An Example Value
another_key: "A value with a colon: so it must be quoted" 
```
