---
title: About Page
parent: Theme Options
nav_order: 2
---

# About Page

This section of "theme.yml" allows you to identify a featured image for your collection's About page.

## about-featured-image: 

- This is the image that appears at the top of the about page of your collection. It can be ***one*** of the following:
	- the objectid for the image from this collection that you would like to feature on your home page
```yaml
about-featured-image: demo_psychiana25
```
	- ***OR*** a relative location of an image in your repository
```yaml
about-featured-image: /assets/img/sampleimage.jpg
```
	- ***OR*** a full URL to an image elsewhere.
```yaml
about-featured-image: https://ctrl-shift.org/images/splash/mcmichael.jpg
```
	- If this field is left blank or commented out, CollectionBuilder will use the image featured on the site's home page (i.e. `featured-image`)
