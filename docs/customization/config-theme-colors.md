---
title: Colors
parent: Page Config
nav_order: 7
---

# Theme Color Configuration (config-theme-colors.csv)

For simplicity, CollectionBuilder uses pre-compiled Bootstrap CSS.
However, to make basic theming possible, we have added some code in "_sass/_theme-colors.scss" based on Bootstrap Sass to generate custom color CCS for btn-, btn-outline-, text-, and bg- classes. 
The custom classes can override existing Bootstrap theme colors or create new color classes. 

By default, these options are not used.

To add custom colors, edit the two columns in the "_data/config-theme-colors.csv".
The columns values are described below, or see an [example](#example).

{:.alert .alert-red}
*Warning:* If you provide invalid values in the "color" column, you will may end up with SASS errors when building the site!
It is best to use HTML [hex color notation](https://www.w3schools.com/colors/colors_picker.asp).

## color_class: 

- The name you'll use to designate the color (i.e. the part after the `-` in `btn-primary`).
- This must be a string with no spaces or weird characters. Typically we use only letters and `-` in class names.
- If it matches an existing Bootstrap color class name, your `color` value will over ride the Bootstrap version. 
- If your `color_class` is unique, you will be creating a new set of color utility classes available to use on your site.
- Your `color_class` will be appended to the Bootstrap prefixes btn-, btn-outline-, text-, and bg- to generate new classes.
- Example over riding Bootstrap color --> `primary` 
- Example new class --> `special-gold`

## color:

- A valid HTML color code, usually given in hex code notation (for example, check this [color picker](https://www.w3schools.com/colors/colors_picker.asp)).
- Should never contain characters like `; ! @ $ % ^ * { }` as values that are invalid CSS may cause SASS errors that prevent Jekyll building!
- Example --> `#4232a8`

## Themed Color Details

Each "color_class" with a valid "color" value will generate a btn-, btn-outline-, text-, and bg- class for the color, e.g. `btn-primary`, `btn-outline-primary`, `text-primary`, and `bg-primary`. 
Any "color_class" with a blank "color" will be ignored.

For convenience, the standard Bootstrap theme colors are provided to fill in if desired, which will override the existing Bootstrap colors.
Adding a non-Bootstrap "color_class" will generate new custom btn colors.
E.g. "color_class" `special` will generate CSS for `.btn-special` and `.btn-outline-special`.

CollectionBuilder uses `btn-primary`, `btn-outline-primary`, `btn-success`, `btn-info`, `btn-outline-info`, `btn-outline-secondary`, `btn-light`, and `btn-outline-light` in page layouts, so overriding those styles will have immediate effects on the colors.
The nav elements use `bg-dark` and `text-dark` by default.

---------

## Example

```
color_class,color
primary,green
secondary,red
success,#32a89c
info,#4232a8
warning,#90a832
danger,#a83259
light,#a4c9e8
dark,#080812
```

The above example would really change the look of your site! 
We've kind of randomly generated these, but you could use more color coordinated attempts, or your organization brand colors (for instance), to redo just a few of these and see some real changes to the look and feel of the site. 
