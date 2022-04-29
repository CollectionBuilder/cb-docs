---
title: Add Analytics
parent: Advanced
nav_order: 5
---

# Add Analytics to your Site

CollectionBuilder templates have a builtin method to add analytics tracking snippets to your site.

Any analytics platform can be added by pasting the tracking snippet they provide into "_includes/head/analytics.html".
During "production" build *only*, the include is added to every page.
By default, Jekyll is in the "development" environment, so analytics will not be added while you are testing your site locally.

Since many people will opt to use Google Analytics, we provide a pre-configured tracking code snippet that can be added simply by pasting your Google Analytics ID as the `google-analytics-id` value in "_config.yml".
However, there are many alternatives emerging, so you may want to explore the options in your context to avoid concerns over data privacy.

We have been very satisfied using self-hosted [Matomo](https://matomo.org/).

## Set up Google Analytics

Use your Gmail account to log into [Analytics](analytics.google.com/).

To start tracking, you will set up an "Analytics Account" with a "Property".
The property usually corresponds to your main web domain, but can be used to track multiple websites under the same id.

For example, if you have an existing Analytics id used on your organization's websites, you can use the same one on your CollectionBuilder projects, no matter where they are deployed.
Using a single id for all your organization's sites is usually the preferred method to keep your data unified.

Once your property is set up, click the cog icon in the lower left nav menu to go to the "Admin" panel. 
Under "Property Settings" > "Tracking info", click "Tracking Code".
Your "Tracking ID" will be displayed.
Copy the id (which will look something like `UA-76328753-1`).
You do **not** need to copy the tracking code snippet.

In your CollectionBuilder project's "_config.yml", paste the id after the `google-analytics-id` key.
Be sure to *uncomment* the line!
For example:

```yaml
google-analytics-id: UA-76328753-1
```

During "production" build, the tracking code with your id will be automatically added to every page.
The template uses the ["gtag.js"](https://developers.google.com/analytics/devguides/collection/gtagjs/) implementation, with the [Anonymize IP](https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization) enabled to provide basic privacy enhancement to your users.
