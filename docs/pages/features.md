---
title: Feature Includes Options
parent: Edit Pages
nav_order: 5
---

# Feature Includes

To add *exciting* visual features to your ["About" and other interpretive pages]({{ '/docs/pages/interpretive/' | relative_url }}) CollectionBuilder provides a variety of feature includes.
Each of these [Liquid includes](https://jekyllrb.com/docs/includes/) provide a simplified method to add collection items, external media, or Bootstrap components into your Markdown content.

Take a look at our demo collection's [About page](https://collectionbuilder.github.io/collectionbuilder-gh/about.html){:target="_blank" rel="noopener"} to see them in action. 
You can also check out the [Feature Includes Bonanza page](https://collectionbuilder.github.io/collectionbuilder-gh/feature_options.html){:target="_blank" rel="noopener"} on our CollectionBuilder-gh demo site; the examples on that page will work in any type of CollectionBuilder template.

All feature includes can be found in the "_includes/feature" folder in your project repository.
Each include file has an extensive comment section at the top with details about how to use it and an example use of the code (Liquid comments are between the tags `{% raw %}{% comment %} {% endcomment %}{% endraw %}`).
The file itself is the best source of information, and it is handy to copy the line of code directly from the comment section and paste into your Markdown file!

All include commands:

- start with the opening Liquid tag, `{% raw %}{% {% endraw %}`
- specify the include file, e.g. `feature/jumbotron.html`
- *may* provide option values that are used by the include, e.g. `objectid="demo_001"`
- end with the closing Liquid tag, `{% raw %}%}{% endraw %}`

For example, you can use the "feature/image.html" include to add an collection image to the page like:

```
{% raw %}{% include feature/image.html objectid="demo_001" %}{% endraw %}
```

There are two general types of Feature Includes, ones that add collection media and ones that add Bootstrap components. Feature includes options are listed below with some examples and notes, but be sure to check the files in your "_includes/feature/" folder for full details.

## List of Feature Includes Options


**Add collection items and media:**

- [audio.html](#audio)
- [cloud.html](#cloud)
- [image.html](#image)
- [pdf.html](#pdf)
- [timelinejs.html](#timelinejs)
- [video.html](#video)

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

### Cloud

This will include a [word cloud](https://getbootstrap.com/docs/4.0/components/card/){:target="_blank" rel="noopener"} with the features you define in the variables: 
```
{% raw %}{% include feature/cloud.html fields="subject" min="" background="dark" button="outline-warning"  %}{% endraw %}`
```
### Image-external

This command will include an image that is not a collection item. 
Provide an `src` value with a full url to the image or relative path to image inside the project repository:
```
{% raw %}{% include feature/image-external.html src="https://www.lib.uidaho.edu/media/collections/fatmen.jpg" width="75" %}{% endraw %}
```
### Image

The "image.html" include adds an image or images either from your collection or from an external source to the page in a [Bootstrap-styled figure](https://getbootstrap.com/docs/4.4/content/figures/){:target="_blank" rel="noopener"}.

It requires that you give a value for one variable, "objectid", and contains two optional variables. 
These are defined below.

*Required*:

- **objectid**: several options below (required)

    1. one or more objectids from your collection, separated by semicolon, e.g. "demo_001" or "demo_001;demo_005"
    2. a full URL to an external image file, e.g. "https://www.lib.uidaho.edu/digital/images/fluffyclouds.jpg"
    3. a relative link to an image file stored in this repository (that is not included in the collection), i.e. "/assets/img/evan.jpg"  
    IMPORTANT NOTE: Options 2 and 3 require you to add an "alt" option (or "alt" options for multiple images) in order to allow for the accessibility enabled by the "alt" tag
    
    Examples:
    - Single collection image --> `objectid="demo_psychiana548"`
    - Multiple collection images --> `objectid="demo_psychiana548;demo_psychiana550"`
    - Single external image --> `objectid="https://www.lib.uidaho.edu/digital/images/fluffyclouds.jpg"`
    - Multiple images (one external and one relative) --> --> `objectid="https://www.lib.uidaho.edu/digital/images/fluffyclouds.jpg;assets/images/grayclouds.jpg"`


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


### Video

This will embed a video item into the page by providing an objectid that refers to the video, which can be within the collection or external to it: 

*Required*:
- "objectid" = several options below (required)

    1. an objectid of a video item in this collection (usually that has an youtubeid or vimeoid), e.g. "demo_003"
    2. a full URL to a video hosted on YouTube, e.g. https://youtu.be/dbKNr3wuiuQ
    3. a full URL to a video hosted on Vimeo, e.g. https://vimeo.com/464555587 
    4. a full URL to an external video file, e.g. "https://www.lib.uidaho.edu/digital/videos/fluffyclouds.mp4"
    5. a relative link to a video file stored in this repository (that is not included in the collection), i.e. "/assets/videos/cloudyskies.mp4"

*Optional*:

    - "caption" = by default the figure include automatically adds the title of the item from your metadata. The caption option allows you to manually add a different caption, or give the value false for none. (optional)
    - "width" = will use responsive sizing to set the % size on desktop (will be 100% on mobile), choose from "25", "50", "75", or "100" (optional)
    - "ratio" = use Bootstrap embed ratio options "21by9", "16by9", "4by3", or "1by1" to customize the responsive aspect ratio. 16by9 is default. (optional)

Examples:
- Video in collection (with 50% width)

`{% raw %}{% include feature/video.html objectid="demo_003" width="50" %}{% endraw %}"`

- YouTube Video external to collection

 `{% raw %}{% include feature/video.html objectid="https://youtu.be/dbKNr3wuiuQ" %}{% endraw %}`

- Vimeo Video external to collection (with a caption)

`{% raw %}{% include feature/video.html objectid="https://vimeo.com/464555587" caption="K. Silem Mohammad Interview"%}{% endraw %}`

- External video

`{% raw %}{% include feature/video.html objectid="https://www.lib.uidaho.edu/digital/videos/fluffyclouds.mp4" %}{% endraw %}`

- Video stored in repository (not recommended) 

`{% raw %}{% include feature/video.html objectid="/assets/videos/cloudyskies.mp4" %}{% endraw %}`