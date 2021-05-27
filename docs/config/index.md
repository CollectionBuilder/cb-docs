---
title: Site Config
has_children: true
nav_order: 4
---

# Initial Site Configuration

The file "_config.yml" is used to configure the core features of your CollectionBuilder site. This section will take you through the configuration options you can enable by editing this file. 

CB's configuration options are made up of key value pairs written in [YAML]({{ '/docs/glossary/#yaml' | relative_url }}). For example, below is the option "title":

```yaml
# title of site appears in banner
title: Example Site Title
```

When you start fresh from the template, placeholder values fill all the options.
So to begin configuring and customizing your site, open the **_config.yml** file in the base of your project repository and replace the placeholder values with new ones for your project. 

The docs in the following pages address how to edit the values.

### Comments in the Configuration Files

Notice the line proceeded by a `#` hash in the example above--everything following the hash is a comment in YAML.
CollectionBuilder's "_config.yml" template uses a bunch of comments to divide the content into sections and to explain how to fill in the values. 

Comments are also used to "comment out" values that are available to use, but that we didn't want to fill out for everyone. To endable these, you would need to *uncomment* a line, which requires you to delete the `# ` and space in front of the value. You can see more on this in the [Additional Variables](additional/) section. 

{:.alert .alert-yellow .mt-4}
The "_config.yml" file serves as the main configuration file for all Jekyll projects, so some values are related to technical details specific to Jekyll. The rest are the important values that will populate the template elements of a Jekyll site--for example, the site title, organization name, etc.
