---
title: Interpretive Pages
parent: Edit Pages
nav_order: 2
---

# Interpretive Pages

The best way to tell your collection's story is to create interpretive content that combines collection items with descriptive text.

CollectionBuilder promotes an easy transition between curating your collection data to writing *with* it, allowing you to combine featured objects and text on interpretive exhibit pages in a format that engages your audience and encourages them to analyze and reflect on the the wider, critical implications of your collection data.

You can create as many interpretive pages as you'd like, and use them for a variety of purposes, but most often our collections' interpretive pages take the form of an "About" page outlining the details of the collection.

For this reason, an "about.md" file is included in the CollectionBuilder template for you to edit following the instructions below. 
You can always add other interpretive pages using the same features by following the instructions in the [Add Page]({{ '/docs/pages/add_page/' | relative_url }}) section.

## About Page

To edit the About page, navigate to the "pages" directory and open the "about.md" file. 

First, you will notice the front matter block which configures some page options (see [page basics]({{ '/docs/pages/basics/' | relative_url }}).
In most cases you will leave this unedited.

Below the front matter block is content written in [Markdown]({{ '/docs/glossary/#markdown' | relative_url }}).
This is where you can start writing about your collection!
The template file contains some placeholder CollectionBuilder information and content.
Delete anything that you don't want to appear on your About page!

However, notice that the first content line you will see starts with `{% raw %}{% include{% endraw %}`, a [Liquid Include](https://jekyllrb.com/docs/includes/) command that is adding a large image with text at the top of the default page.
Includes are a powerful feature of Jekyll that allow modular elements or content to be drawn into your site's pages from a central location.

## Feature Includes

To add *exciting* visual features to your About page CollectionBuilder provides a variety of feature includes.
Each of these includes can add collection items, external media, or Bootstrap components.

All feature includes can be found in the "_includes/feature" folder in your project repository.
Each include has a comment section at the top with details about how to use it.

For example, at the beginning of "about.md" you will see a feature include that pulls in a ["jumbotron" component](#jumbotron) into the page.
The include looks like:

```
{% raw %}{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}{% endraw %}
```

All include commands:

- start with the opening Liquid tag, `{% raw %}{% {% endraw %}`
- specify the include file, e.g. `feature/jumbotron.html`
- *may* provide option values that are used by the include, e.g. `objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg"`
- end with the closing Liquid tag, `{% raw %}%}{% endraw %}`

### Feature Include Options

You'll find all of the files listed below in the "_includes/feature/" directory:

- [alert.html](#include-an-alert)
- [audio.html](#include-an-a)
- [button.html](#include-a-button)
- [card.html](#include-a-card)
- [image-external.html](#include-an-external-image)
- [image.html](#adding-a-collection-image-to-the-about-page)
- [jumbotron.html](#jumbotron)
- [modal.html](#include-a-modal)
- [nav-menu.html](#adding-a-nav-menu)
- [pdf.html](#include-a-pdf)
- [timelinejs.html](#include-a-timelinejs-feature)
- [video-external.html]()
- [video.html](#include-an-external-video)

To see the visual features that these includes are producing, we encourage you to take a look at our demo collection's [About page](https://collectionbuilder.github.io/collectionbuilder-gh/about.html){:target="_blank" rel="noopener"}.

Many of these includes are also incorporated as examples in the CollectionBuilder template's About page.
To delete the demo code from your About page and add your own, open the "pages/about.md" file and look for the following include: 

`{% raw %}{% include cb/about_the_about.md %}{% endraw %}`

Delete this line of code.

We detail the "nav-menu.html" and "image.html" include options in detail below, and provide example code for the other includes:

### Jumbotron

The first content line of the template "about.md" is a jumbotron include: 

```
{% raw %}{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}{% endraw %}
```

A jumbotron is a [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/jumbotron/){:target="_blank" rel="noopener"} component that consists of a large image with text overlay.

Note that in addition to calling the "jumbotron.html" file, this include also contains a variable, "objectid", with a URL value.
The value of "objectid" specifies the image that should appear in the jumbotron at the top of the About page.
Instead of including a URL path to an external image, you could include an objectid of an item from your collection, or a path to the image stored somewhere else within your repository.

If you don't want the jumbotron on your About page, delete this line of code.

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

The "image.html" include adds an image from your collection to the page in a [Bootstrap-styled figure](https://getbootstrap.com/docs/4.4/content/figures/){:target="_blank" rel="noopener"}.

It requires that you give a value for one variable, "objectid", and contains two optional variables. 
These are defined below.

*Required*:

- **objectid**: The objectid of an image in your collection that will be used to grab the information for that item from the collection metadata. 
    - example --> `objectid="demo_psychiana548"`

*Optional*:

- **width**: Uses Bootstrap sizing to set the image's percentage size.
    - *Options*: `25`, `50`, `75`, or `100`
- **caption**: By default the figure include automatically adds the title of the item from your metadata. The caption option is used *only* if you would like to override the default title. To replace the title, you can either add the text (in quotation marks) for an alternative caption *or* give the value `false` (with no quotation marks) to not include any caption.
    - To manually set the caption, provide the text, e.g. `caption="Example caption"`
    - If you'd like to turn the caption off use `caption=false`

For example, adding a figure with only required variables:
```
{% raw %}{% include feature/image.html objectid="demo_001" %}{% endraw %}
```

With additional optional variables:
```
{% raw %}{% include feature/image.html objectid="demo_001" width="50" caption=false %}{% endraw %}
```

The other include files listed above can be included in a similar manner, but require different variables. 
Find these files in your repository in the "_includes/feature/" directory and open them to view a description of their options. 

Examples are also included below for your convenience:

### Include Command Examples

Copy and paste the examples below and replace the required variables with variables that pertain to your collections (remember, variable options are defined within each include file, located in the "_includes/feature/" directory in your project repository). 

#### Include a Collection Image

Detailed above, this includes an image from your collection:
```
{% raw %}{% include feature/image.html objectid="demo_001" width="75" %}{% endraw %}
```

#### Include an External Image

This command will include an image from outside your collection. 
Instead of an "objectid" you will provide an "src" value with a full url to the image:
```
{% raw %}{% include feature/image-external.html src="https://www.lib.uidaho.edu/media/collections/fatmen.jpg" width="75" %}{% endraw %}
```

#### Include a PDF

This will embed a pdf onto the page using the browser's built in pdf reader: 
```
{% raw %}{% include feature/pdf.html objectid="demo_002" width="50" %}{% endraw %}
```

#### Include a Video

This will embed a video from your collection into the page: 
```
{% raw %}{% include feature/video.html objectid="demo_004" %}{% endraw %}
```

#### Include an External Video

This will embed an externally hosted video, YouTube video, or Vimeo video to the page.
Instead of an "objectid" you will need to provide an "src" value with the full url to the video:
```
{% raw %}{% include feature/video-external.html src="https://www.youtube.com/watch?v=dbKNr3wuiuQ" %}{% endraw %}
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
