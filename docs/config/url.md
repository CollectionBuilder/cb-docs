---
title: URL Variables
parent: Site Config
nav_order: 1
---

# URL Variables

This section of "_config.yml" is used to define the location where you will host the site on the live web.
These values are **optional for GH users**!

Having `url` and `baseurl` configured correctly is essential for final deployment.

### url: 

- `url` represents the url where the generated site will *eventually* reside on the web. It will be used to generate links when you build the site at the end of your customization process. 
- Setting a `url` value is **optional for GH users** using default GitHub Pages hosting--the value will be commented out in the template's "_config.yml". When hosting on GitHub Pages, `url` will follow the pattern of `<your github user name>.github.io`
```yaml
url: https://dcnb.github.io
```
- If self hosting, the `url` will be the domain or subdomain where you will be placing the site.
```yaml
url: https://www.lib.uidaho.edu
```

### baseurl: 

- `baseurl` indicates the folder / path where your site will be located on your web server and **always** starts with a slash `/`.
- Setting a `baseurl` value is **optional for GH users** using default GitHub Pages hosting--the value will be commented out in the template's "_config.yml". When hosting on GitHub Pages, `baseurl` will be the name of your project repository.
```yaml
baseurl: /example-collection
```
- If self hosting, the `baseurl` will be the folder where you would like to host the site (if applicable). For example, if you have a project called "*pink-poodle*" that you plan to put in the "*projects*" folder on your website, you'd put `/projects/pink-poodle` down for baseurl. 
```yaml 
# for site to be at https://www.lib.uidaho.edu/digital/boxing
url: https://www.lib.uidaho.edu
baseurl: /digital/boxing
```
- If you site lives at the root of a domain (without a path), comment out `baseurl` or leave blank.

### source-code: 

- `source-code` is the full URL for the GitHub repository containing your CollectionBuilder project code. It is used to add a link back to your project repository.
```yaml
source-code: https://github.com/CollectionBuilder/collectionbuilder-sa
```
