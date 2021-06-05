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

However, notice that the first content line you will see looks like:

```
{% raw %}{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}{% endraw %}
```

This a [Liquid Include](https://jekyllrb.com/docs/includes/) command that is adding a large image with text at the top of the default page.
Includes are a powerful feature of Jekyll that allow modular elements or content to be drawn into your site's pages from a central location.

In this case the include is calling the file `feature/jumbotron.html`, and providing the option `objectid` with a URL to an external image.
You should update the value of `objectid` replacing the URL with either an objectid of an image item from your collection or a URL for your own external image (or [see Jumbotron](#jumbotron) below for more options).
If you don't want the "jumbotron" feature, just delete the full line of the include.

The template file contains some placeholder CollectionBuilder information and content.
Towards the bottom of the template "about.md" you will notice a comment and "about_the_about.md" include.
Be sure to delete this and anything else you don't want to appear on your "About" page.
But first, check out the generated "About" page, since this content demonstrates using feature includes!

## Feature Includes

To add *exciting* visual features to your "About" page CollectionBuilder provides a variety of feature includes.
Each of these includes can add collection items, external media, or Bootstrap components.
Take a look at our demo collection's [About page](https://collectionbuilder.github.io/collectionbuilder-gh/about.html){:target="_blank" rel="noopener"} to see them in action.

All feature includes can be found in the "_includes/feature" folder in your project repository.
Each include file has an extensive comment section at the top with details about how to use it and an example use of the code (Liquid comments are between the tags `{% raw %}{% comment %} {% endcomment %}{% endraw %}`.
The file itself is the best source of information, and it is easy to copy the line of code directly from the comment section and paste into your Markdown file!

All include commands:

- start with the opening Liquid tag, `{% raw %}{% {% endraw %}`
- specify the include file, e.g. `feature/jumbotron.html`
- *may* provide option values that are used by the include, e.g. `objectid="demo_001"`
- end with the closing Liquid tag, `{% raw %}%}{% endraw %}`

For example, you can use the "feature/image.html" include to add an collection image to the page like:

```
{% raw %}{% include feature/image.html objectid="demo_001" %}{% endraw %}
```

There are two general types of Feature Includes, ones that add collection media and ones that add Bootstrap components.
Each are listed below with some examples and notes, but be sure to check the files in your "_includes/feature/" folder for full details.

**Add collection items and media:**

- [audio.html](#audio)
- [image.html](#image)
- [image-external.html](#image-external)
- [pdf.html](#pdf)
- [timelinejs.html](#timelinejs)
- [video.html](#video)
- [video-external.html](#video-external)

**Add Bootstrap components:**

- [alert.html](#alert)
- [button.html](#button)
- [card.html](#card)
- [jumbotron.html](#jumbotron)
- [modal.html](#modal)
- [nav-menu.html](#nav-menu)

-------------------

### Alert

This will include a [bootstrap alert](https://getbootstrap.com/docs/4.0/components/alerts/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/alert.html text="this is an *alert* that 'warns' a user" color="warning" align="center" %}{% endraw %}
```

### Audio

This in add an audio player from an item in your collection from the objectid:
```
{% raw %}{% include feature/audio.html objectid="demo_003" %}{% endraw %}
```

### Button

This will include a [bootstrap button](https://getbootstrap.com/docs/4.0/components/buttons/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" %}{% endraw %}
```

### Card

This will include a [bootstrap card](https://getbootstrap.com/docs/4.0/components/card/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo004" width="25" centered=true %}{% endraw %}
```

### Image-external

This command will include an image that is not a collection item. 
Provide an `src` value with a full url to the image or relative path to image inside the project repository:
```
{% raw %}{% include feature/image-external.html src="https://www.lib.uidaho.edu/media/collections/fatmen.jpg" width="75" %}{% endraw %}
```

### Image

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

### Jumbotron

A jumbotron is a [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/jumbotron/){:target="_blank" rel="noopener"} component that consists of a large image with text overlay.
This include is present as the first content line of the template "about.md".
The option `objectid` can be an objectid of an image item in your collection, the URL to an external image, or the relative path to an image in the project repository.
By default overlay is your site's title and tagline, but these can be changed by passing `title` and `text` options

```
{% raw %}{% include feature/jumbotron.html objectid="demo_002" %}{% endraw %}
```

### Modal

This will include a [bootstrap modal](https://getbootstrap.com/docs/4.0/components/modal/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/modal.html button="Click Here" title="Modal Title" text="A Modal will pop out a box with some more information" color="primary" %}{% endraw %}
```

### Nav-menu

Currently, this is incorporated into the "pages/about.md" file by default. 
The code looks like this: 
```
{% raw %}{% include feature/nav-menu.html sections="About the Collection;About the About Page" %}{% endraw %}
```

In order to edit it to fit your content, you will need to edit the "sections" variable to feature any headings used on the page. 
To do this, copy and paste the full text of your headings (i.e. the lines of markdown that begin with a pound sign `#`)
"About the Collection" and "About the About Page" are the headings we include on our default about page, so we use those in our example here. 

If you'd rather not include the nav menu, just delete this line of code.

### Pdf

This will embed a pdf onto the page using the browser's built in pdf reader: 
```
{% raw %}{% include feature/pdf.html objectid="demo_002" width="50" %}{% endraw %}
```

### TimelineJS

See information in our [TimelineJS Feature in the Advanced Section]({{ '/advanced/timelinejs/' | relative_url }}).

### Video-external

This will embed a YouTube, Vimeo, or externally hosted video on the page.
You will need to provide an "src" value with the full url to the video:
```
{% raw %}{% include feature/video-external.html src="https://www.youtube.com/watch?v=dbKNr3wuiuQ" %}{% endraw %}
```

### Video

This will embed a video item from your collection into the page by providing the objectid: 
```
{% raw %}{% include feature/video.html objectid="demo_004" %}{% endraw %}
```
