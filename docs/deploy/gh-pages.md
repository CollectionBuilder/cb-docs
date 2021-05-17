---
title: GitHub Pages
parent: Deploy
nav_order: 1
---

# Deploy on GitHub Pages

**These instructions are for GH Users.**
Other CollectionBuilder types rely on Jekyll plugins, thus will not build properly using GitHub Pages--see [GitHub Actions]({{ '/docs/deploy/actions/' | relative_url }}) for an alternative.

{:.alert}
**Note**: Your repository must be public to use GitHub Pages unless you have a paid account. 
To make your repository public, go to the Settings page and scroll down to the red box at the bottom and click the "Change repository visibility" option.

## Activate GitHub Pages

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page: click "Pages" in the left side menu.
3. On the "Pages" page: in the "Source" section, change the dropdown button from "none" to "main" (leave the folder option as "/root"), then click the "Save" button. 

Once saved, the page will refresh with an alert providing the URL where your site will appear. 
It will take a few minutes for the build to happen and your site to go live--so wait it out! 

Meanwhile, you might want to copy the provided URL to display on your home page:

1. Copy the provided URL.
2. Go to repository's home page.
3. On right side of the code area, look for "About" section and click on the cog icon to edit. 
4. In the "About" box, paste in your URL, then click "Save". This will make it easy to access the site in the future!

{:.alert .alert-green}
Congratulations! 
Your site is now live. 
**GH users** can now move on to the [Advanced Topics]({{ '/docs/advanced/' | relative_url }}) section.
