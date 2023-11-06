---
title: GitHub Pages
parent: Deploy
nav_order: 1
---

# Deploy on GitHub Pages from a Branch

{:.alert .alert-blue}
**These instructions are for GH or Sheets users.**
CollectionBuilder-CSV relies on Jekyll plugins, thus will not build properly using default GitHub Pages--see [GitHub Actions]({{ '/docs/deploy/actions/' | relative_url }}) instead.
Also note that GH and Sheets users *can* use any deployment method--you are not limited to using GitHub Pages to host your site!

## Make Repository Public

Your repository must be public to use GitHub Pages unless you have a paid account (most users make their projects public anyway!).
If your project is *not* already public:

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. Scroll down to the red box at the bottom and click the "Change visibility" option.

## Activate GitHub Pages

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page, click "Pages" in the left side menu.
3. On the "Pages" page, under "Source" leave the dropdown button as "Deploy from a branch". Under "Branch" use the dropdown to change from "none" to "main" (leave the folder option as "/root"), then click the "Save" button. 
 
It will take a few minutes for the build to happen and your site to go live--so wait it out!
After a few minutes, refresh the "Pages" page. 
If the build is successful, an alert will appear near the top providing the URL to your live site.
The URL will follow the pattern: "https://username.github.io/repository-name"

For convenience, you might want to display the site URL on your home page:

1. Go to repository's home page.
2. On right side of the code area, look for "About" section and click on the cog icon to edit. 
3. In the "About" box, below the "Website" box, check the option "Use your GitHub Pages website", then click "Save". This will make it easy to access the site in the future!

Going forward, each time you push or commit to your repository GitHub Pages will rebuild the site.
A green checkmark will appear next to the most recent commit that triggered a successful build.
If a red "X" appears next to your commit, the build failed and your updates will not be deployed--the last working version of the site will still be live.

{:.alert .alert-green}
Congratulations! 
Your site is now live. 
You can now move on to the [Advanced Topics]({{ '/docs/advanced/' | relative_url }}) section.

### Build Errors

Some errors in your project can cause the Jekyll build fail, for example an extra space before keys in "_config.yml" or unclosed Liquid tags.
If you click the "Actions" tab of your repository or look next to the Commit history, successful builds will have a green check mark, failures will have a red "x".
Look at the commit when the build error started--something was introduced by that change that broke it, so that is where to start debugging!

-------------

## Turn Off GitHub Pages

Sometimes you may want to take down a live site, for example if you were just using it for a demo or prototype and want to deploy a new version somewhere else.
GitHub Pages is just as easy to turn off as it is to activate:

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page, click "Pages" in the left side menu.
3. On the "Pages" page, under "Branch" section, change the dropdown button to "none", then click the "Save" button. 

After deactivating GitHub Pages, visiting the old URL will result in an 404 page.
Keep in mind that the repository still contains all the code--so you can always turn it back on!
