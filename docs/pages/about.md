---
title: Interpretive Pages
parent: Edit Pages
nav_order: 2
---

# Interpretive Pages

- about page
- markdown
- feature includes

## About Page

To edit the About page, find and open the `about.md` file which is in the Pages directory (/pages/) of your repository. 

### Markdown

The about page is written in Markdown, thus the ".md" extension. Jekyll has Markdown support built in, so it's a good skill to learn as you get further into this type of development. 
[Markdown](https://daringfireball.net/projects/markdown/syntax){:target="_blank" rel="noopener"} is a quick and easy standard to write documents that can be converted into HTML for the web. 

Because of it's simplicity, Markdown is used by many websites for creating content or allowing users to format comments.
In fact all of the CollectionBuilder docs are written in Markdown. 

**Markdown Resources**
- [Tutorial](https://commonmark.org/help/tutorial/)
- [On GitHub](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)
- [Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


## Include Options for the About Page

{:.alert}
**Include Files:** Jekyll's include command is a really powerful feature that allows specific elements or content to be drawn into pages from one central location. For more on includes and other Jekyll features, check out the [Jekyll docs](https://jekyllrb.com/docs/).

When you open the `about.md` file, you'll see that there is already one "include" command at the beginning of the file which is pulling in the page's jumbotron image: `{% raw %}{% include about/jumbotron.html %}{% endraw %}` (remember, you chose this image in the [theme.yml](theme.html#about) file). If you don't want the jumbotron on your About page, just delete this line of code.

Alternately, if you'd like to add *more* visual features to the page we've made it easy to do this too, by including templated files.
You'll find the files below in the `_includes/feature/` directory:

- [`alert.md`](#include-an-alert)
- [`button.md`(#include-a-button)
- [`card.md`](#include-a-card)
- [`image`(#include-an-external-image)
- [`item-figure.html`(#include-a-collection-image)
- [`item-pdf-embed.html`(#include-a-pdf)
- [`item-video-embed.html`(#include-a-video)
- [`modal.md`(#include-a-modal)
- [`nav-menu.html`(#adding-a-nav-menu)
- [`timelinejs.html`(#include-a-timelinejs-feature)

We detail the nav-menu option and the image include option in detail below, and provide example example code for the other includes below. 

### Adding a Nav Menu

Currently, this is included by default. The code looks like this: 

`{% raw %}{% include feature/nav-menu.html sections="About the Collection;About the About Page" %}{% endraw %}`

In order to edit it to fit tour material, you will need to edit the sections variables so that they feature any heading you use on the page. To do this, just copy and paste the full text of the heading -- e.g. "About the Collection" and About the About Page" are the headings we include on our default about page, so we use those here. 

If you'd rather not include the menu, just delete it. 


### Adding an image to the About Page

The `item-figure.html` include adds a [Bootstrap-styled figure](https://getbootstrap.com/docs/4.4/content/figures/){:target="_blank" rel="noopener"} to the page.

It requires that you give a value for one variable, **objectid**, and contains three optional variables. 
These are defined below.

*Required*:

- **objectid**: The objectid of an image in your collection that will be used to grab the information for that item from the collection metadata. 
    - example --> `objectid="demo_psychiana548"`

*Optional*:
- **width**: Uses Bootstrap sizing to set the image's percentage size.
    - *Options*: `25`, `50`, `75`, or `100`
- **float**: Uses Bootstrap float utility to float the image left or right. 
    - *Options*: `left` or `right`
- **caption**: By default the figure include automatically adds the title of the item from your metadata. The caption option is used *only* if you would like to override the default title. To replace the title, you can either add the text for an alternative caption *or* give the value `false` to not include any caption.
    - To manually set the caption, provide the text, e.g. `caption="Example caption"`
    - If you'd like to turn the caption off use `caption=false`

For example, adding a figure with only required variables:
- `{% raw %}{% include feature/item-figure.html objectid="demo_001" %}{% endraw %}`

With additional optional variables:
- `{% raw %}{% include feature/item-figure.html objectid="demo_001" width="50" float="left" caption=false %}{% endraw %}`

If you use the `float` option, you may want to "clear" the float at some point below. 
This can be done by adding `<div class="clearfix"></div>` on it's own line.

The other include files listed above can be included in a similar manner, but require different variables. Find these files in your repository in the `_includes/feature/` directory and open them to view a description of the options. 


### Include Command Examples

Copy and paste the below and replace the objectid variables the objectids of items from your collections. 

#### Include a Collection Image

Detailed above, this includes an image from your collection.

- Image --> `{% raw %}{% include feature/item-figure.html objectid="demo_001" width="75" %}{% endraw %}`

#### Include an External Image

The options are detailed above, but this command will include an image from outside your collection. Instead of an `objectid` you will provide a `src` that provides a full url to the image.

- Image --> `{% raw %}{% include feature/item-figure.html src="https://www.lib.uidaho.edu/media/collections/fatmen.jpg" width="75" %}{% endraw %}`

#### Include a PDF

This will embed a pdf onto the page using the browser's built in pdf reader. 

- PDF -- > `{% raw %}{% include feature/item-pdf-embed.html objectid="demo_002" width="50" %}{% endraw %}`

#### Include a Video

This will embed either a YouTube or a MP4 video from your collection into the page. 

- Video: `{% raw %}{% include feature/item-video-embed.html objectid="demo_004" %}{% endraw %}`

### Include [Bootstrap](https://getbootstrap.com/) Features

These are specific Bootstrap features that we've included for easy use. Some, like the card, can feature objects from the collection. Some just add visual and interactive texture. 

#### Include a Card

This will include a [bootstrap card](https://getbootstrap.com/docs/4.0/components/card/) with the features you define in teh variables. 

- Card -- > `{% raw %}{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo004" width="25" centered=true %}{% endraw %}`


#### Include a Button 

This will include a [bootstrap button](https://getbootstrap.com/docs/4.0/components/buttons/) with the features you define in teh variables. 

- Buttons -- > `{% raw %}{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" %}{% endraw %}`

#### Include an Alert

This will include a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/) with the features you define in teh variables. 

- Alerts -- > `{% raw %}{% include feature/alert.html text="this is an *alert* that 'warns' a user" color="warning" align="center" %}{% endraw %}`

#### Include a Modal

This will include a [bootstrap modal](https://getbootstrap.com/docs/4.0/components/modal/) with the features you define in teh variables. 

- Modals -- > `{% raw %}{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="when clicked:" text="A Modal will pop out a box with some more information" color="primary" %}{% endraw %}`

### Include a TimelineJS Feature

See information in our [TimelineJS Feature in the Advanced Section]({{ '/advanced/timelinejs/' | relative_url }}).