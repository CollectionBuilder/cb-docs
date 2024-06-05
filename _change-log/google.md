---
title: Google Features removed
release: 2024-03-04
---

Built in helpers for Google Analytics and Custom Search have been removed from the CB templates. 
These features were not commonly used and required updates to stay current with Google's changes.
Rather than support these specific Google products, we will focus on simple platform-agnostic customization.

To add analytics to your site (Google or any other platform!), rather than using the "_config.yml" option `google-analytics-id`, paste the snippet provided by your platform into the file "_includes/head/analytics.html".

If you would like to add Google Programmable Search (i.e. Custom Search / CSE), check the guide in CB-Docs to [add an alternative search page](https://collectionbuilder.github.io/cb-docs/docs/advanced/google-search/).
