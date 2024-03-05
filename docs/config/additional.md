---
title: Additional Variables
parent: Site Config
nav_order: 4
---

# Additional Variables

This section of "_config.yml" provides additional configuration options and technical details.

{:.alert .alert-blue}
The following settings in "_config.yml" are optional. 
Your site will work successfully without changing the variables below.

## Robots Exclude 

Robots exclude standards can tell indexers such as Google you do **NOT** want your site crawled and added to their search index.
In other words ... *If you uncomment `noindex: true`, the site won't show up in Google.*
This can be useful when developing prototype sites that you don't want to be found, especially if you will deploy them in a different location when finalized.

### noindex:

- Uncomment `noindex: true` (by removing the hash and space `# ` in front) if you do **NOT** want Google to index your site.

------

## Development Mode (Sheets only!)

Development Mode is an option in CB-Sheets only. 
If `development-mode:` is set to `true`, the live collection provides features that allow the metadata on the site to be temporarily reconfigured by visitors via a form or url parameter.
This is handy when collaborating and prototyping--in fact, you don't even need metadata configured in the `metadata-csv` option!
See the [CB-Sheets demo site for an example](https://collectionbuilder.github.io/collectionbuilder-sheets/)

When you want to finalize your collection, set `development-mode: false` to turn these features off. 

### development-mode

- true or false. 
- True activates public features to reconfigure site metadata including set up modal forms and url parameter option. False site will have one set metadata and will ignore url parameters.
```yaml
development-mode: true
```

------

## Build Settings

This section contains advanced Jekyll settings. 
You should probably just leave these settings as they are. 

### exclude: 

- Tells Jekyll which files to ignore, things that aren't needed in the built out website.

### sass: 

- Controls how the CSS is built when the site is being built. 
