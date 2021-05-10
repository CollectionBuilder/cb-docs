---
title: Deploying Using Third Party Hosting
parent: Deploy
nav_order: 4
---

**For SA and CDM Users**

We often use [Render.com](https://render.com/) to build our sites for free. Other third party cloud companies also offer services to build static sites, notably Cloudflare and Netlify. We've found Render to be really easy to use, so that's where our expertise lies. 

Render offers a static site service that will connect to your GitHub repository and build your website at an "onrender.com" url for free. 

To do this, you'll need to Create a new Static Site on Render then connect your repository to Render by giving it permission to install a connecting module on your repository. (You can give Render permission to access your entire account or just certain repositories.)

{:.alert}
**Important note**: If you are going to use render, make sure the `url` and `baseurl` options in your `_config.yml` file are left blank! Render sites have no subdirectories so they need to be created as an "apex" site. 

### Instructions

1. Sign up for a render account. 
2. Click the `New +` button at the top of your account dashboard. 
3. If you haven't already, you'll need to install Render either on a select repository or for your entire account. 
    - Click the GitHub button to connect your account
    - This will open up a page on GitHub. From that page, connect Render to your repository (or repositories).
4. Provide a unique name for the site. 
    - this will be the front part of the url, so something short and easy to remember is good. 
5. For "Build Command" enter "bundle exec jekyll build"
6. For "Publish Directory" enter "_site"
7. Click Create Static Site. 

That's it. When the build is finished, the site will let you know your new static site is live. You can share this site with whomever you'd like! And you can always delete the site or pause the site if you'd like to only turn the content on for a short bit in order to show it to someone. 




