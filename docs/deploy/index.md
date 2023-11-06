---
title: Deploy
has_children: true
nav_order: 10
---

# Build and Deploy Your Site

You've spent time developing your beautiful collection (or at least prototyping something that works), now you need to put it out there live for the world to see (or at least for the people you share it to)!
This is where things get exciting, and can get a bit complex and confusing with technical choices. 

When we talk about "deploying" CollectionBuilder projects, we mean two things: 

1. how you will build the site (generate the production site with Jekyll)
2. where you will host it (put it on a server)

Luckily, for many options these two processes are combined into an automated service!
Depending on the purpose, size, and scope of your collection project, here are the main methods to deploy your site:

- **Deploy on GitHub Pages** - [GH Pages](https://pages.github.com/) is free hosting service provided for any repository on GitHub. This is how most CollectionBuilder sites are deployed, especially when learning or prototyping. GitHub Pages has two options:
    - [GitHub Pages from a Branch]({{ '/docs/deploy/gh-pages/' | relative_url }}) - the easiest method, available for any **GH** or **Sheets** project.
    - [GitHub Pages via GitHub Actions]({{ '/docs/deploy/actions/' | relative_url }}) - enables **CSV** projects to build.
- **Build Locally and Self Host** - [build the site with Jekyll]({{ '/docs/deploy/build/' | relative_url }}), then move the files to a web server. This allows for the publishing of CollectionBuilder sites on your own or your organizations web servers. Many *final* production sites for formal organizations are deployed in this method.
- **Use Third-Party Build Service** - similar to GH Pages, there are numerous other flexible platforms that can build and host your Jekyll site. These can generally connect directly to your GitHub repository (or other code hosts) to deploy your site. Check our [Use Third-Party Build Services]({{ '/docs/deploy/thirdparty/' | relative_url }}) section for an example using Render.
