---
title: Site Config
has_children: true
nav_order: 4
---

# Initial Site Configuration

The file "_config.yml" is used to configure the core features of your CollectionBuilder site. 

This is a Jekyll convention (in general Jekyll puts an "_" underscore in front of files and folders that are important!), so some values are related to technical details specific to Jekyll.
The rest are the important values that will populate the template elements of your site--for example, the collection title, organization name, and the metadata CSV to use.

CB's configuration options are made up of key value pairs written in [YAML]({{ '/docs/glossary/#yaml' | relative_url }}). 
For example, below is the option "title":

```yaml
title: Example Site Title
```

CollectionBuilder's "_config.yml" template is divided into sections to help keep the values organized, and it contains comments (denoted by a hash `#`) to help explain how to fill it out.

When you start fresh from the template, placeholder values fill all the options.
So to begin configuring and customizing your site, open the **_config.yml** file in the base of your project repository. 
The docs in the following pages address how to edit the values.
