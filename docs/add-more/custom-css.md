---
title: Custom CSS
parent: Customize
nav_order: 4
---

# Adding Custom CSS

Going beyond the built in [theme.yml]({{ '/docs/theme/' | relative_url }}) and [theme color configuration]({{ '/docs/customization/config-theme-colors/' | relative_url }}) options, the CollectionBuilder template is set up so you can add custom CSS to override all other styles on the site. 

Add your own custom CSS/SCSS to the file **"_sass/_custom.scss"**--this will ensure your styles will override CollectionBuilder and Bootstrap defaults.

The folder "_sass/" contains the template's "Sass partials", i.e. modular chunks of [Sass](https://sass-lang.com/) CSS. 
When Jekyll builds the site, these partials are pulled in by the file "assets/css/cb.scss" and converted into a standard CSS file.
The resulting "cb.css" file is the last stylesheet loaded in the head of every page, so the styles it contains will override Bootstrap and CSS from other libraries.

In general, you should NOT edit "cb.scss" or the other partials.
Instead, use "_sass/_custom.scss" to override existing template styles or add new ones.

Using "_sass/_custom.scss" will keep your customizations separate from the template base, making it easier to update and ensure they override everything else.

## Using Bootstrap Root Classes

Bootstrap exposes some style features as CSS custom properties, so you can tweak the theme by overriding the defaults.
Below are some example classes that can be added to "_sass/_custom.scss" to customize the theme:

```
/* root variable overrides */
:root, [data-bs-theme="light"] {

    /* ----- Border radius -----
    Most components (buttons, cards, inputs, alerts, modals) inherit from --bs-border-radius.
    Try 0 for a sharp editorial look, or 1rem+ for a soft rounded look. */
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-xxl: 2rem;
    --bs-border-radius-pill: 50rem;

    /* ----- Body background, text, and headings ----- */
    --bs-body-bg: #fff;
    --bs-body-color: #212529;
    --bs-heading-color: #1a2e40; 

    /* ----- Links -----
    Set both the hex value and the -rgb channels (used by utilities like .link-opacity-*). Keep them in sync. */
    --bs-link-color: #0d6efd;
    --bs-link-color-rgb: 13, 110, 253;
    --bs-link-hover-color: #0a58ca;
    --bs-link-hover-color-rgb: 10, 88, 202;
    --bs-link-decoration: underline;

    /* ----- Borders and dividers ----- */
    --bs-border-color: #dee2e6;
    --bs-border-width: 1px;

    /* ----- Theme color utilities -----
    These -rgb channels drive .bg-primary, .text-primary, .border-primary, .text-bg-primary, etc. 
    (Buttons are separate) */
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-danger-rgb: 220, 53, 69;
    --bs-warning-rgb: 255, 193, 7;
    --bs-info-rgb: 13, 202, 240;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;

    /* ----- Subtle background/border tiers -----
        Used by .bg-body-secondary, card caps, list group actions, etc. */
    --bs-secondary-bg: #e9ecef;
    --bs-tertiary-bg: #f8f9fa;
    --bs-secondary-color: rgba(33, 37, 41, 0.75);

    /* ----- Typography -----
    Alternative to using "_data/theme.yml" (base-font-family, base-font-size) if you are loading a font via font-cdn */
    --bs-body-font-family: Georgia, "Times New Roman", serif;
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
}

/* component level override examples */
/* Buttons example */
.btn-primary {
    --bs-btn-bg: #33638e;
    --bs-btn-border-color: #33638e;
    --bs-btn-hover-bg: #2a527a;
    --bs-btn-hover-border-color: #2a527a;
    --bs-btn-active-bg: #24466a;
    --bs-btn-active-border-color: #24466a;
    --bs-btn-disabled-bg: #33638e;
    --bs-btn-disabled-border-color: #33638e;
}

/* Cards */
.card {
    --bs-card-border-color: transparent;
    --bs-card-box-shadow: var(--bs-box-shadow-sm);
    box-shadow: var(--bs-card-box-shadow);
}

/* Navbar (colors are usually set in _data/theme.yml navbar-background / navbar-color, but spacing/behavior tweaks can go here):
.navbar {
    --bs-navbar-padding-y: 0.75rem;
    --bs-navbar-brand-font-size: 1.5rem;
}


```
