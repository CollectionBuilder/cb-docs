---
title: GitHub Pages
parent: Deploy
nav_order: 1
---

# Deploy on GitHub Pages

{:.alert .alert-blue}
**These instructions are for GH Users.**
Other CollectionBuilder types rely on Jekyll plugins, thus will not build properly using GitHub Pages--see [GitHub Actions]({{ '/docs/deploy/actions/' | relative_url }}) for an alternative.
Also note that GH users *can* use any deployment method--you are not limited to using GitHub Pages to host your site!

## Make Repository Public

Your repository must be public to use GitHub Pages unless you have a paid account (most users make their projects public anyway!).
If your project is *not* already public:

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. Scroll down to the red box at the bottom and click the "Change visibility" option.

## Activate GitHub Pages

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page: click "Pages" in the left side menu.
3. On the "Pages" page: under "Source" leave the dropdown button as "Deploy from a branch". Under "Branch" use the dropdown to change from "none" to "main" (leave the folder option as "/root"), then click the "Save" button. 
 
It will take a few minutes for the build to happen and your site to go live--so wait it out!
After a few minutes, refresh the "Pages" page. 
If the build is successful, an alert will appear near the top providing the URL to your live site.
The URL will follow the pattern: "https://username.github.io/repository-name"

For convenience, you might want to copy the URL to display on your home page:

1. Copy the provided URL.
2. Go to repository's home page.
3. On right side of the code area, look for "About" section and click on the cog icon to edit. 
4. In the "About" box, paste in your URL, then click "Save". This will make it easy to access the site in the future!

{:.alert .alert-green}
Congratulations! 
Your site is now live. 
You can now move on to the [Advanced Topics]({{ '/docs/advanced/' | relative_url }}) section.

-------------

## Turn Off GitHub Pages

Sometimes you may want to take down a live site, for example if you were just using it for a demo or prototype and want to deploy a new version somewhere else.
GitHub Pages is just as easy to turn off as it is to activate:

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page: click "Pages" in the left side menu.
3. On the "Pages" page: under "Branch" section, change the dropdown button to "none", then click the "Save" button. 

After deactivating GitHub Pages, visiting the old URL will result in an 404 page.
Keep in mind that the repository still contains all the code--so you can always turn it back on!
