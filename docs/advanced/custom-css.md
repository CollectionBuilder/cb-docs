---
title: Custom CSS
parent: Advanced
nav_order: 11
---

# Adding Custom CSS

Going beyond the builtin [theme.yml]({{ '/docs/theme/' | relative_url }}) and [theme color configuration]({{ '/docs/customization/config-theme-colors/' | relative_url }}) options, the CollectionBuilder template is set up so you can add custom CSS to override all other styles on the site. 

**Add your own custom CSS/SCSS to the file "_sass/_custom.scss"**--this will ensure your styles will override CollectionBuilder and Bootstrap defaults.

The folder "_sass/" contains the template's "Sass partials", i.e. modular chunks of [Sass](https://sass-lang.com/) CSS. 
When Jekyll builds the site, these partials are pulled in by the file "assets/css/cb.scss" and converted into a standard CSS file.
The resulting "cb.css" file is the last stylesheet loaded in the head of every page, so the styles it contains will override Bootstrap and CSS from other libraries.

In general, you shouldn't edit the other partials or "cb.scss".
Using "_sass/_custom.scss" will keep your customizations separate from the template base.
