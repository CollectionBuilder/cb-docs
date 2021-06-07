---
title: Home Page
parent: Theme Options
nav_order: 1
---

# Home Page

This section of "_data/theme.yml" configures your collection's Home page features.

## Home Page Banner:

### featured-image: 

- This is the image that appears at the top of the home page of your collection. It will also be referenced as a representative image in your meta tags, so that when people share your collection on social media an image will appear.
- It can be ***one*** of the following:
	- the objectid for the image from this collection that you would like to feature on your home page: 
```yaml
featured-image: demo_psychiana15
```
	- ***OR*** a relative location of an image in your repository: 
```yaml
featured-image: /images/palouse.jpg
```
	- ***OR*** a full URL to an image elsewhere:
```yaml
featured-image: https://ctrl-shift.org/images/splash/armantrout.jpg
```
	- if you leave "featured-image" blank or comment it out, the home page of your collection will have the standard page banner with no image background.

{:.alert .alert-green}
**Pro Tip**: It's best to choose a large image for the featured image, one that is more "landscape" than "portrait," i.e. more horizontal than vertical.

### home-title-y-padding: 

- Determines how much of your featured image is visible by adding padding above and below the collection banner. 
	- A smaller number will feature a smaller amount of the image.
	- A larger number will push navigation and content further down the screen (which can make it less useable).
	- Range: `2em` - `20em`
```yaml
home-title-y-padding: 12em
```

### home-banner-image-position: 

- Determines what portion of the image will appear. 
	- Options: `top`, `center`, `bottom`
```yaml
home-banner-image-position: bottom
```

{:.alert .alert-blue}
**Note:** The features of the home page can be customized by editing the "home-infographic.html" file in the "_layouts" folder. 
Check the [Home Page section in Edit Pages]({{ '/docs/pages/home/' | relative_url }}) for details!
