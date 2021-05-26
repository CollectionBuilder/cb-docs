---
title: Interpretive Pages
parent: Edit Pages
nav_order: 2
---

# Interpretive Pages

The best way to tell your collection's story is to create an interpretive page that incorporates collection items with descriptive text.

CollectionBuilder promotes an easy transition from curating your collection data to writing *with* it, allowing you to combine featured objects and text on exhibit pages in a format that engages your audience in analyzing and reflecting on the the wider, critical implications of your collection data.

You can create as many interpretive pages as you'd like, and use them for a variety of purposes, but most often our collections' interpretive pages take the form of About pages.

For this reason, an "about.md" file is included in the CollectionBuilder template for you to edit following the instructions below, but you can also add other interpretive pages following the instructions in the [Add Page]({{ '/docs/pages/add_page/' | relative_url }}) section.

## About Page

To edit the About page, navigate to the "pages" directory and find and open the "about.md" file. 

### Markdown

The about page is written in Markdown (thus the ".md" extension). 
Jekyll has Markdown support built in, so it's a good skill to learn as you get further into this type of development. 
[Markdown](https://daringfireball.net/projects/markdown/syntax){:target="_blank" rel="noopener"} is a quick and easy standard to write documents that can be converted into HTML for the web.  

<div class="alert alert-blue" markdown="1">

#### Markdown Resources

- CommonMark [Cheatsheet](https://commonmark.org/help/) and [10 Minute Tutorial](https://commonmark.org/help/tutorial/)
- GitHub [Mastering Markdown tutorial](https://guides.github.com/features/mastering-markdown/) and [Markdown reference](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

</div>

### Includes

To add exciting visual features to your About page in addition to Markdown text, you can choose from a variety of include commands.

Jekyll's include command is a really powerful feature that allows specific elements or content to be drawn into your site's pages from one central location.

Let's look at the beginning of the "about.md" file for an example of an include:

When you open the "about.md" file, you'll notice an include command at the top of the file that is pulling in the page's jumbotron image:

```
{% raw %}{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}{% endraw %}
```

In this example, you can locate the included file ("jumbotron.html") within the "_includes/feature" directory.

Note that in addition to calling the "jumbotron.html" file, this include also contains a variable, "objectid", with a URL value.
The value of "objectid" specifies the image that should appear in the jumbotron at the top of the About page.
Instead of including a URL path to an external image, you could include an objectid of an item from your collection, or a path to the image stored somewhere else within your repository.

If you don't want the jumbotron on your About page, delete this line of code.

{:.alert}
**Include Files:** For more on includes and other Jekyll features, check out the [Jekyll docs](https://jekyllrb.com/docs/).

## Include Options for the About Page

If you'd like to add *more* visual features to the page we've made it easy to do this too, by including templated files.
You'll find the files below in the "_includes/feature/" directory:

- [alert.html](#include-an-alert)
- [button.html](#include-a-button)
- [card.html](#include-a-card)
- [image.html](#include-an-external-image)
- [item-figure.html](#include-a-collection-image)
- [item-pdf-embed.html](#include-a-pdf)
- [item-video-embed.html](#include-a-video)
- [modal.html](#include-a-modal)
- [nav-menu.html](#adding-a-nav-menu)
- [timelinejs.html](#include-a-timelinejs-feature)
- [video.html](#include-an-external-video)

To see the visual features that these includes are producing, we encourage you to take a look at our demo collection's [About page](https://collectionbuilder.github.io/collectionbuilder-gh/about.html){:target="_blank" rel="noopener"}.

Many of these includes are also incorporated as examples in the CollectionBuilder template's About page.
To delete the demo code from your About page and add your own, open the "pages/about.md" file and look for the following include: 

`{% raw %}{% include cb/about_the_about.md %}{% endraw %}`

Delete this line of code.

We detail the "nav-menu.html" and "item-figure.html" include options in detail below, and provide example code for the other includes:

### Adding a Nav Menu

Currently, this is incorporated into the "pages/about.md" file by default. 
The code looks like this: 
```
{% raw %}{% include feature/nav-menu.html sections="About the Collection;About the About Page" %}{% endraw %}
```

In order to edit it to fit your material, you will need to edit the "sections" variable to feature any heading you use on the page. 
To do this, just copy and paste the full text of your headings (i.e. the lines of markdown that begin with a pound sign (`#`))
"About the Collection" and About the About Page" are the headings we include on our default about page, so we use those in our example here. 

If you'd rather not include the nav menu, just delete this line of code.

### Adding a Collection Image to the About Page

The "item-figure.html" include adds an image from your collection to the page using a [Bootstrap-styled figure](https://getbootstrap.com/docs/4.4/content/figures/){:target="_blank" rel="noopener"}.

It requires that you give a value for one variable, "objectid", and contains three optional variables. 
These are defined below.

*Required*:

- **objectid**: The objectid of an image in your collection that will be used to grab the information for that item from the collection metadata. 
    - example --> `objectid="demo_psychiana548"`

*Optional*:

- **width**: Uses Bootstrap sizing to set the image's percentage size.
    - *Options*: `25`, `50`, `75`, or `100`
- **float**: Uses Bootstrap float utility to float the image left or right. 
    - *Options*: `left` or `right`
- **caption**: By default the figure include automatically adds the title of the item from your metadata. The caption option is used *only* if you would like to override the default title. To replace the title, you can either add the text (in quotation marks) for an alternative caption *or* give the value `false` (with no quotation marks) to not include any caption.
    - To manually set the caption, provide the text, e.g. `caption="Example caption"`
    - If you'd like to turn the caption off use `caption=false`

For example, adding a figure with only required variables:
```
{% raw %}{% include feature/item-figure.html objectid="demo_001" %}{% endraw %}
```

With additional optional variables:
```
{% raw %}{% include feature/item-figure.html objectid="demo_001" width="50" float="left" caption=false %}{% endraw %}
```

If you use the "float" option, you may want to "clear" the float at some point below. 
(This prevents content further down the page from moving up to be adjacent to your floating object.)
This can be done by adding 

`<div class="clearfix"></div>` 

on its own line at a point on the page where you want the float to be cleared.

The other include files listed above can be included in a similar manner, but require different variables. 
Find these files in your repository in the "_includes/feature/" directory and open them to view a description of their options. 

Examples are also included below for your convenience:

### Include Command Examples

Copy and paste the examples below and replace the required variables with variables that pertain to your collections. 

#### Include a Collection Image

Detailed above, this includes an image from your collection:
```
{% raw %}{% include feature/item-figure.html objectid="demo_001" width="75" %}{% endraw %}
```

#### Include an External Image

This command will include an image from outside your collection. 
Instead of an "objectid" you will provide an "src" value with a full url to the image:
```
{% raw %}{% include feature/image.html src="https://www.lib.uidaho.edu/media/collections/fatmen.jpg" width="75" %}{% endraw %}
```

#### Include a PDF

This will embed a pdf onto the page using the browser's built in pdf reader: 
```
{% raw %}{% include feature/item-pdf-embed.html objectid="demo_002" width="50" %}{% endraw %}
```

#### Include a Video

This will embed either a video from your collection into the page: 
```
{% raw %}{% include feature/item-video-embed.html objectid="demo_004" %}{% endraw %}
```

#### Include an External Video

This will embed an externally hosted YouTube or Vimeo video to the page.
Instead of an "objectid" you will need to provide an "src" value with the full url to the video:
```
{% raw %}{% include feature/video.html src="https://www.youtube.com/watch?v=dbKNr3wuiuQ" %}{% endraw %}
```

### Include [Bootstrap](https://getbootstrap.com/){:target="_blank" rel="noopener"} Features

These are specific Bootstrap features that we've included for easy use. Some, like the card, can feature objects from the collection. 
Some just add visual and interactive texture. 

#### Include a Card

This will include a [bootstrap card](https://getbootstrap.com/docs/4.0/components/card/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo004" width="25" centered=true %}{% endraw %}
```

#### Include a Button 

This will include a [bootstrap button](https://getbootstrap.com/docs/4.0/components/buttons/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" %}{% endraw %}
```

#### Include an Alert

This will include a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/alert.html text="this is an *alert* that 'warns' a user" color="warning" align="center" %}{% endraw %}
```

#### Include a Modal

This will include a [bootstrap modal](https://getbootstrap.com/docs/4.0/components/modal/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="when clicked:" text="A Modal will pop out a box with some more information" color="primary" %}{% endraw %}
```

#### Include a TimelineJS Feature

See information in our [TimelineJS Feature in the Advanced Section]({{ '/advanced/timelinejs/' | relative_url }}).