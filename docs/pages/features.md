---
title: Feature Includes Options
parent: Edit Pages
nav_order: 5
---

# Feature Includes

To add *exciting* visual features to your ["About" and other interpretive pages]({{ '/docs/pages/interpretive/' | relative_url }}) CollectionBuilder provides a variety of feature includes.
Each of these [Liquid includes](https://jekyllrb.com/docs/includes/) provide a simplified method to add collection items, external media, or Bootstrap components into your Markdown content.

You can take a look at our demo collection's [About page](https://collectionbuilder.github.io/collectionbuilder-gh/about.html){:target="_blank" rel="noopener"} to see them in action. 

{:.alert .alert-green}
**Want some example code?** Check out the [Feature Includes Bonanza page](https://collectionbuilder.github.io/collectionbuilder-gh/feature_options.html){:target="_blank" rel="noopener"} on our CollectionBuilder-gh demo site. The examples on this page will work in any CollectionBuilder template.

All feature includes can be found in the "_includes/feature/" folder in your project repository.
Each include file has an extensive comment section at the top with details about how to use it and an example use of the code (Liquid comments are between the tags `{% raw %}{% comment %} {% endcomment %}{% endraw %}`).
The file itself is the best source of information, and it is handy to copy the line of code directly from the comment section and paste into your Markdown file!

All include commands:

- start with the opening Liquid tag and command, `{% raw %}{% include {% endraw %}`
- specify the include file, e.g. `feature/jumbotron.html`
- *may* provide option values that are used by the include, e.g. `objectid="demo_001"`
- end with the closing Liquid tag, `{% raw %} %}{% endraw %}`

For example, you can use the "feature/image.html" include to add an collection image to a page like:

```
{% raw %}{% include feature/image.html objectid="demo_001" %}{% endraw %}
```

{:.alert .alert-red}
**Note:** When including items from your collection, make sure to use the `objectid` and not the `filename` for include commands!

There are a few general types of Feature Includes:

- Add collection or external media items: audio, image, pdf, and video.
- Add features based on collection items: term cloud and Timeline JS.
- Add Bootstrap components: accordion, alert, button, card, icon, jumbotron, and modal.

Visit the [Feature Includes Bonanza page](https://collectionbuilder.github.io/collectionbuilder-gh/feature_options.html){:target="_blank" rel="noopener"} for examples of what these look like and example code to adapt for your purposes.
Be sure the check the files in your "_includes/feature/" folder for full details, example code, and options!
