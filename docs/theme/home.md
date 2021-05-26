---
title: Home Page
parent: Theme Options
nav_order: 1
---

# Home Page

This section of "_data/theme.yml" configures many of your collection's Home page features.

{:.alert}
**Note:** The features that display on the home page can be customized via the "home-infographic.html" file in the layouts folder. More on customizing that file can be found in our [Edit Pages section]({{ '/docs/pages/home/' | relative_url }})

## Home Page Banner:

### featured-image: 

- This is the image that appears at the top of the home page of your collection. It can be ***one*** of the following:
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

## Home Page Features:

### carousel-height: 

- Determines the height of the carousel on the home page.
	- Indicates pixels, but don't include "px" in your input.
```yaml
carousel-height: 500
```

#### CDM and SA Only:

### carousel-type: 

- Determines the type of object you'd like shown in the carousel on the home page.
	- Options: `image`,`pdf`,`youtube`,`thumbs`
```yaml
carousel-type: image
```

### featured-subjects: 

- Generates home page "subject" buttons for select subjects.
	- If left blank, automatically generates top 5 subjects. (We typically leave it blank.)
	- To customize, list your own curated subjects. Separate multiple subjects with a semicolon(';'). 
```yaml
featured-subjects: corn;soy;basketball
```

### featured-subjects-max: 

- Sets number of top subjects to display if "featured-subjects" is auto-generated
	- Default: `5`
```yaml
featured-subjects-max: 6
```

### featured-locations: 

- Generates home page "location" buttons for select locations.
	- If left blank, automatically generates top 5 locations.
	- To customize, list your own curated locations. Separate multiple locations with a semicolon(';'). 
```yaml
featured-locations: University of Idaho; Sacramento, California;
```

### featured-locations-max: 

- Sets number of top locations to display if "featured-locations" is auto-generated
	- Default: `5`
```yaml
featured-locations-max: 4
```