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

## Google Services

These options can add pre-configured Google services if desired.

### google-analytics-id: 

- Uncomment `google-analytics-id` (by removing the hash `#` in front), and add your Google Analytics ID if you would like to add a pre-configured tracking code snippet.
- The template uses "gtag" implementation, with "anonymize_ip" set to true for privacy.
- example --> `google-analytics-id: "UA-76328753-1"`
- *Note:* Any analytics service can be added to your site by pasting the tracking snippet they provide into "_includes/head/analytics.html". Analytics will only be added during final production build. See [Add Analytics to your Site]({{ '/docs/advanced/analytics/' | relative_url }}) for details.

### google-cse-id:

- Uncomment `google-cse-id` (by removing the hash `#` in front), and add your Google Custom Search Engine ID to add a embedded Google search page.
- See [Google CSE]({{ '/docs/advanced/google-search/' | relative_url }}) for details of implementing.

------

## Robots Exclude 

Robots exclude standards can tell indexers such as Google you do NOT want your site crawled and added to their search index.
In other words ... *If you uncomment `noindex: true`, the site won't show up in Google.*
This can be useful when developing prototype sites that you don't want to be found, especially if you will deploy them in a different location when finalized.

### noindex:

- Uncomment `noindex: true` (by removing the hash `#` in front) if you do NOT want Google to index your site.

------

## Build Settings

This section contains advanced Jekyll settings. 
You should probably just leave these settings as they are. 

### exclude: 

- Tells Jekyll which files to ignore.

### sass: 

- Controls how the CSS is built when the site is being rendered. 
