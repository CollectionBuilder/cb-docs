---
title: Advanced Options
parent: Theme Options
nav_order: 10
---

# Advanced Theme Options

This section of "_data/theme.yml" configures advanced options such as image and font size, and Bootstrap themes. 
This is an optional section—-your site will work just fine without adjusting these variables, but they're available if you'd like the extra options for customization.

## CDM image % for IIIF:

**CDM-Users only**: This is a *CONTENTdm-specific* variable section for adjusting size of images used throughout the site.
CollectionBuilder uses the [IIIF Image API](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/IIIF_API_reference) to retrieve images using a percentage size option. 
The percentage must be 10% or greater.

### image-percentage-large:
- Default `70`
```yaml
image-percentage-large: 50
```

### image-percentage-medium: 
- Default `40` 
```yaml
image-percentage-medium: 30
```

### image-percentage-small:
- Default `20`
```yaml
image-percentage-small: 10
```

{:.alert .alert-green}
**Pro Tip:** If your images are appearing blurry or take too long to load, try adjusting the image-sizing settings. The appropriate percentage depends on the full size of images contained in your CDM repository and may require some experimentation.

---

## Navbar Options:

These options will adjust the basic colors of your site's navigation bar (see [Bootstrap navbar docs](https://getbootstrap.com/docs/4.4/components/navbar/){:target="_blank" rel="noopener"} for details).

### navbar-color: 
- Choose from `navbar-light` for use with light background colors, or `navbar-dark` for dark background colors.
	- Options: `navbar-light`, `navbar-dark`
```yaml
navbar-color: navbar-dark
```

### navbar-background: 
- Choose from Bootstrap's background colors.
	- Options: `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`, `bg-white`, `bg-dark`
```yaml
navbar-background: bg-dark
```

## Bootswatch:

[Bootswatch](https://bootswatch.com/){:target="_blank" rel="noopener"} creates unique themes for Bootstrap-based sites. 
Swap out the default Bootstrap for a Bootswatch version using the options below as a fun way to demonstrate the power of CSS to transform look and feel. 

### bootswatch: 
- Leave blank or comment out (make a comment by placing a `#` in front of the variable) for plain bootstrap
	- Options: `cerulean`, `cosmo`, `cyborg`, `darkly`, `flatly`, `journal`, `litera`, `lumen`, `lux`, `materia`, `minty`, `pulse`, `sandstone`, `simplex`, `sketchy`, `slate`, `solar`, `spacelab`, `superhero`, `united`, `yeti`
```yaml
bootswatch: cerulean
```

## Theme Fonts:

These options change the way the fonts appear throughout your collection. 
If you leave any option blank, it will revert to the CollectionBuilder defaults.

### base-font-size: 
- Changes the base size for fonts throughout the site.
```yaml
base-font-size: 1.2em
```

### text-color: 
- Changes the color of the base font. Probably want a shade of black ... 
```yaml
text-color: "#191919"
```

### link-color: 
- Changes the link color used throughout the site. Base color is a primary blue. 
```yaml
link-color: "#17a2b8"
```

### base-font-family: 
- Changes the font family
	- If it's a google family, you'll need to use the font-cdn option below to add the style sheet link to the site.
```yaml
base-font-family: Georgia; serif;
```

### font-cdn: 
- This lets you add fonts from Google Fonts or other online resources provided by a content delivery network (cdn). These are typically provided by the service you are using. 
```yaml
font-cdn: <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
```

