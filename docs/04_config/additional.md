---
title: Additional Variables
parent: Config
nav_order: 4
---

## Additional Variables

{:.alert .alert-success}
For **all user-types**, the following settings in **_config.yml** are optional. Your site will work successfully without changing the variables below.

{% include feature/card.html title="Google Analytics" text="Fill in your Google Analytics ID, if you have one: 
- **google-analytics-id**: 
    1. Remove the hash (`#`) before the field to activate it. 
    2. Enter your Google Analytics ID." %}

{% include feature/card.html title="Robots Exclude" text=" 
- **noindex**:
    1. Remove the hash (`#`) before the field to activate it. 
    2. Set to true if you do NOT want Google to index your site (If you do want your site to be indexed, just leave the `#` in front of this field name to keep it commented it out.)
    - example -> `noindex: true`" %}


{% capture add-title %}
Build Settings
{% endcapture %}

{% capture add-text %}
This section contains advanced Jekyll settings. You should probably just leave these settings as they are. 

- **exclude**: Tells Jekyll which files to ignore.

- **sass**: Controls how the CSS is built when the site is being rendered. 
{% endcapture %}

{% include feature/card.html title=add-title text=add-text %}
