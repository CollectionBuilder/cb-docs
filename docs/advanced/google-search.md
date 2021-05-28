---
title: Google CSE
parent: Advanced
nav_order: 4
---

# Add Google Custom Search Page

*for CollectionBuilder-GH, -SA, and -CSV*

After your site has been up for awhile, [Google Custom Search Engine](https://cse.google.com/cse/) (or "Programmable Search") can provide a quality search of your content.
To add one to your collection site, visit CSE, set up the search, then copy the ID into your project's "_config.yml".

- Log in with a Gmail account at <https://cse.google.com/cse/>
- The main "Programmable Search" page will display any CSE you have already set up. Click the "Add" button to create a new one.
- Paste the full URL of your collection site followed by a wild card (`*`) in the "Sites to search" box. For example, `username.github.io/repository/*`.
- Give the CSE a meaningful name, then click "Create".
- Click "Control panel" to customize (or from main page, click on the CSE name).
- Click "Look and feel" on the left side menu.
- On the Layout tab, choose "Full width", then click "Save"
- On the Themes tab, choose "Minimalist", then click "Save"
- Click "Setup" (on left side menu). On the "Basics" tab look for "Search engine ID" section. 
- Copy the "Search engine ID" value (a weird string, for example `002151703305773322890:1pu3smhw1t8`), and paste into your project's "_config.yml" as the `google-cse-id` value (make sure you uncomment the line!).

Adding the `google-cse-id` to your "_config.yml" will automatically populate the page "/search/google.html" in your final site and add a link to it from the main Lunr search page.
The page is generated from the stub "pages/google-search.md".
The CSE "Look and Feel" settings above will allow the CSE to integrate into the search page seamlessly.

- [Programmable Search docs](https://developers.google.com/custom-search)

{:.alert .alert-yellow}
Google provides powerful, free(ish) services that can be added on to your site.
Using their platform services is a very popular choice, perhaps the standard, thus CollectionBuilder makes it easy to integrate into your project. 
However, given concerns over exposing your user's privacy and tracking, you should carefully consider if they are necessary in your context or if other alternatives exist.
