---
title: Third Party Services
parent: Deploy
nav_order: 5
---

# Deploy via Third Party Services

A variety of third party cloud hosting companies can integrate with GitHub to build and host your static site, often free of charge.
This option is most useful for CSV users looking for an automated build process as an alternative to GitHub Pages.
The biggest players are Cloudflare, Netlify, and Render. 

This tutorial covers using [Render](https://render.com/), since we've found it to be free and easy to use.

## Deploy Using Render

Render offers a static site service that will connect to your GitHub repository, build using Jekyll, and host your website at an "onrender.com" URL for free. 

To do this, you'll need to Create a new Static Site on Render then connect your repository to Render by giving it permission to install a connecting module on your repository. You can give Render permission to access your entire GitHub account or just specific repositories.

{:.alert .alert-yellow}
**Important note:** When using Render, make sure the `url` and `baseurl` options in your "_config.yml" file are left blank! 
Render sites have no subdirectories so they need to be created as a root site. 

1. Sign up for a [Render](https://render.com/) account. 
2. Click the `New +` button at the top of your account dashboard. 
3. If you haven't already, you'll need to install Render either on a select repository or for your entire account. 
    - Click the GitHub button to connect your account
    - This will open up a page on GitHub. From that page, connect Render to your repository (or repositories).
4. Provide a unique name for the site. 
    - this will be the front part of the URL, so something short and easy to remember is good. 
5. For "Build Command" enter `bundle exec jekyll build`.
6. For "Publish Directory" enter `_site`
7. Click "Create Static Site". 

That's it!
When the build is finished, Render will let you know your new static site is live. 
You can share this site with whomever you'd like! 
And you can always delete the site or pause the site if you'd like to only turn the content on for a short bit in order to show it to someone. 
