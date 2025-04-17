---
title: Custom Fonts
parent: Advanced
nav_order: 13
---

# Add a Custom Font via CDN

Bootstrap uses a ["native font stack"](https://getbootstrap.com/docs/5.3/content/reboot/#native-font-stack) that provides efficient and consistent rendering across devices. 
However, one way to make your collection site more distinct is to customize the font.

Web font services (or font CDN) efficiently deliver font files to users so your custom font will show up the same across any device.
The most popular is [Google Fonts](https://fonts.google.com/), although there are many alternatives (e.g. [Bunny Fonts](https://fonts.bunny.net/) is a more privacy oriented option that is almost identical).
These instructions follow the Google Fonts interface, but other platforms will have a similar workflow.

*Note:* for a fully self contained collection, it is also possible to download copies of the fonts and add them to your project directly.

## Choose a Font

On your web font service ([Google Fonts](https://fonts.google.com/)) browse the available fonts to find one that fits your project style. 
Consider the readability, width, and height of the font since this will impact the useability of your site.

Once you have found a good option, click on the font to visit the font's home page.
For example, [National Park](https://fonts.google.com/specimen/National+Park).
 
- Click "Get font" button.
- Click "Get embed code" button. This will provide two code boxes: a CDN link for the font stylesheet and a CSS class. You will need to copy some values from these boxes into your project.

## Add to Your CB Project

There are a number of methods to add the custom font to your collection depending on your needs.
Two options are described below: 

- Using "theme.yml" -- this is the simplest option when using one font.
- Using "_custom.scss" -- slightly more advanced option allowing multiple fonts and classes.

### Using theme.yml

This is the simplest approach and will render all text on your site with a single custom font.
Ensure you have only one font selected (if you have more than one, remove the extras).

In your CB project, open the file "_data/theme.yml".
Towards the bottom of the file, look for the Theme Fonts section.
You will need to add values to `base-font-family` and `font-cdn`.

#### Add base-font-family

Look at the font embed code on Google Fonts. 
In the "CSS class" code box, you will see something like:

```
.national-park-<uniquifier> {
  font-family: "National Park", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

Copy the value after `font-family:` and paste it into "theme.yml" after `base-font-family:`.
Do not include the semicolon `;`.
If the value has a comma in it, you will need to put quotes around it--if the value uses double quotes, use single quotes, or the reverse.
For example, for National Park font, the "theme.yml" will look like:

```
base-font-family: '"National Park", sans-serif'
```

Note that "National Park" has double quotes around it and a comma with a fallback font.
To ensure that value is useable to Jekyll, single quotes must go around the text.

#### Add font-cdn

Next, look back at the font embed code on Google Fonts. 
In the "Embed code in the head" box, you will see something like:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&display=swap" rel="stylesheet">
```

Copy the full value and paste it into "theme.yml" after `font-cdn:`.
Delete the line breaks between the different `<link` tags to make it all one line.
For example, for National Park font, the "theme.yml" will look like:

```
font-cdn: <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&display=swap" rel="stylesheet">
```

### Using _custom.scss

For more complicated uses you will want to add custom styles to "_sass/_custom.scss".
For example we may want a separate font for headers and body text.

In your web font service, select the two (or more) fonts, then look at the embed code boxes.
The web service will provide a single embed code that loads all the selected fonts together.

First, you will need to add the fonts CDN so they can load. 
This can be done in one of two ways depending on the options provided by your web font service: 

- If provided as `<link` stylesheet, copy the embed code and paste it into "_includes/head/head.html" in your project, around line 17 above the other CSS `<link` tags.
- If provided as `@import` CSS, copy the `@import` statement and paste it into "_sass/_custom.scss" in your project.

Second, you will write some custom styles to apply the fonts to content on your site.
Open "_sass/_custom.scss" to write the styles, pasting in the embed examples provided by your service and customizing to your needs.

#### Two Font Example

For example, let's add [Roboto](https://fonts.google.com/specimen/Roboto) as body font and [Orbitron](https://fonts.google.com/specimen/Orbitron) for headings.

First, you would select the two fonts on Google Fonts and click "Get embed code" and look at the boxes.
Select the "@import" option to switch the embed code to CSS.
You will see something like:

```
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>
```

Copy the `@import` line (not the `<style` tags) and paste it into the "_sass/_custom.scss" in your project.
For each font, you will see a CSS class that looks something like:

```
.orbitron-<uniquifier> {
  font-family: "Orbitron", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

Copy the CSS classes for each font and paste them into "_sass/_custom.scss" as well.
Then edit those CSS classes for your use case by changing the selector and weight.

In this example, we want Roboto for the main font, so for selector we will use `body` which will override the Bootstrap defaults.
For headings we want Orbitron, so for selector we will use `.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6` to match how Bootstrap sets the heading fonts.
For weight we will use the standard "normal" of `400`.

Put together in "_custom.scss" it will look like:

```
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

body {
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "wdth" 100;
}
.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
```

Other common selectors would be `.display-1` (which would override just the main title font) or to use the font name (e.g. `.roboto-font`) to apply the font as a custom class only to specific elements.
