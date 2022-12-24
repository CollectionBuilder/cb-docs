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
CollectionBuilder uses the [IIIF Image API](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/IIIF_API_reference){:target="_blank" rel="noopener"} to retrieve images using a percentage size option. 
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

------

## Navbar Options:

These options will adjust the basic colors of your site's navigation bar using Bootstrap's built in options (see [Bootstrap navbar docs](https://getbootstrap.com/docs/5.1/components/navbar/){:target="_blank" rel="noopener"} for details).

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

---------

## Bootswatch:

[Bootswatch](https://bootswatch.com/){:target="_blank" rel="noopener"} creates unique themes for Bootstrap-based sites. 
Swap out the default Bootstrap for a Bootswatch version using the options below as a fun way to demonstrate the power of CSS to transform look and feel. 
We don't typically use these options in production, but it interesting for teaching and learning to see the drastic changes that are possible.

### bootswatch: 

- Leave blank or comment out (make a comment by placing a `#` in front of the variable) for plain bootstrap
	- Options: `cerulean`, `cosmo`, `cyborg`, `darkly`, `flatly`, `journal`, `litera`, `lumen`, `lux`, `materia`, `minty`, `pulse`, `sandstone`, `simplex`, `sketchy`, `slate`, `solar`, `spacelab`, `superhero`, `united`, `yeti`

```yaml
bootswatch: cerulean
```

------------

## Theme Fonts:

These options change the way the fonts appear throughout your collection. 
If you leave any option blank, it will revert to the CollectionBuilder defaults.

### base-font-size: 

- Changes the base size for fonts throughout the site. 
	- Since Bootstrap sets specific sizes on many elements, this will *not* impact all text. This option is most useful for *slightly* tweaking the body text size to make reading easier. Bootstrap's standard is "1em". CB increases this to "1.2em" by default.

```yaml
base-font-size: 1.2em
```

### text-color: 

- Changes the color of the base font. Probably want a shade of black ... Tweaking this setting is usually about maintaining readability in your content.

```yaml
text-color: "#191919"
```

### link-color: 

- Changes the link color used throughout the site. Default color is a primary blue. Changing the color is an easy way to add a little pizazz and customization to your site. Just ensure the color has enough contrast for readability!

```yaml
link-color: "#17a2b8"
```

### base-font-family: 

- Changes the font family
	- If you use this option, you will generally also need to use the font-cdn option below to add the font style sheet link to the head. This ensures the user actually have the font you configured!

```yaml
base-font-family: 'Roboto', sans-serif;
```

### font-cdn: 

- This lets you add fonts from Google Fonts or other online resources provided by a content delivery network (cdn). 
	- The correct link is typically provided by the service you are using. Generally it consists of a css stylesheet that contains the font information and links to the font files.

```yaml
font-cdn: <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
```

-------------

## Theme Icons

CB uses [Boostrap Icons](https://icons.getbootstrap.com/) SVGs to represent some items and nav elements. 
The default icons used can be configured in the Theme Icons section. 

The templates' default visualizations use "icon-image", "icon-audio", "icon-video", "icon-pdf", and "icon-default" as thumbnails for items that don't have an image available and as representations of the general item type / format. 
The "icon-back-to-top" is used for the scroll to top button that appears in the lower right of longer pages.

### icons: 

- The `icons` key has a series of keys nested under it (`icon-image`, `icon-audio`, `icon-video`, `icon-pdf`, `icon-default`, and `icon-back-to-top`). Each of these sub-keys represents an icon used in the default template. The values must match an icons SVG name in "assets/lib/icons/". 
- The icons in "assets/lib/icons/" are a copy of [Boostrap Icons](https://icons.getbootstrap.com/), so you can use their site to visually search and browse the icons. 
- If you set an icon value to something that doesn't exist, it will be skipped. Nothing will be displayed in the locations where it is used in the template. You *might* not get any error indicating this!
- To customize the icons, uncomment the entire `icons` object in "_theme.yml", including all the default icons. You should include values for *all* the default icons, even if you are only customizing one. 
- Example:

```yaml
icons: 
  icon-image: image
  icon-audio: file-earmark-play
  icon-video: camera-video
  icon-pdf: file-earmark-text 
  icon-default: file-earmark # fall back icon
  icon-back-to-top: arrow-up-square # scroll to top icon
```

- Additional icons can be added by creating more key/value pairs. For example, `icon-example: arrow-right-square`
- These icons can be used in the template following the icon sprite approach:

```html
<svg class="bi icon-sprite" role="img" aria-label="example">
	<use xlink:href="{{ '/assets/lib/cb-icons.svg' | relative_url }}#icon-example"/>
</svg>
```

*Note:* Both CB-GH and CB-CSV use the same basic "theme.yml" icon options. 
However, CB-CSV has a more powerful icon theme system using a custom Jekyll plugin--see the "docs" folder in the template for more details.
