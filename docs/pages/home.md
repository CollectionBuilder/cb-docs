---
title: Home Page
parent: Edit Pages
nav_order: 3
---

# Editing the Home Page

You may finish your collection and realize that you want to remove or shift around the content on your Home page. 
To edit the content on this page, you'll need to navigate to the "_layouts/" directory and open the "home-infographic.html" file.

Some options: 

- [Delete a Home Page Feature](#delete-a-home-page-feature)
- [Move a Home Page Feature Around](#move-a-home-page-feature-around)
- [Featured Terms Cards](#featured-terms-cards)
- [Adjust the Size and Number of Columns](#adjust-the-size-and-number-of-columns)

## Home Page Overview

The Home page is composed of a number of include commands, arranged in three [Bootstrap columns](https://getbootstrap.com/docs/4.0/layout/grid/){:target="_blank" rel="noopener"}.

Jekyll's [include command](https://jekyllrb.com/docs/includes/) is a powerful feature that allows modular elements or content to be drawn into your site's pages from a central location.

An example include command looks like: 
`{% raw %}{% include index/carousel.html title="Sample Items" %}{% endraw %}`

In this example, you can locate the included file ("carousel.html") within the "_includes/index" directory.

This is what the default "home-infographic.html" layout looks like: 


```{% raw %}
<div class="col-md-8">

{% include index/description.html %}
{% include index/carousel.html title="Sample Items" %}

</div>
<div class="col-md-4">

{% include index/time.html %}

{% include index/featured-terms.html field="subject" title="Top Subjects" btn-color="info" %}

{% include index/featured-terms.html field="location" title="Locations" btn-color="outline-secondary" %}

{% include index/objects.html %}

</div>
<div class="col-md-12">

{% include index/data-download.html %}

</div>
{% endraw %}
```

This arrangement allows for some quick customization options: 

- change the options of an include command (check the comments in the files in "_includes/index" folder)
- move or delete an include command
- tweak the Bootstrap columns

Some common options are detailed below.

### Delete a Home Page Feature

Let's say your collection metadata doesn't include dates. 
In this case, you could remove the "Time Span" feature box from the Home page by deleting the line

```
{% raw %}{% include index/time.html %}{% endraw %}
```

from the "home-infographic.html" file. 

Deleting a line is the most common edit we make to this file. 
You might also want to delete the locations include command, or another feature. 

### Move a Home Page Feature Around

Say you wanted space for your carousel to be taller and more prominent. 
To make room, you could move the collection's description from the top left to the top right of the page by copy and pasting

```
{% raw %}{% include index/description.html %}{% endraw %}
```

from the first column into the second (and deleting it from the first).

Then you could adjust the carousel height by adding the "height" option to the include command, like:

```
{% raw %}{% include index/carousel.html title="Sample Items" height=500 %}{% endraw %}
```

### Featured Terms Cards

The default home-infographic layout includes two Featured Terms cards ("Top Subjects" and "Locations") which provide metadata terms with links to the Browse page to find related items, surfacing subject entry points for users and summarizing collect contents.

Each card is generated using the same include by providing different options, by default set up to work with the metadata fields "subject" and "location". 

```{% raw %}
{% include index/featured-terms.html field="subject" title="Top Subjects" btn-color="info" %}

{% include index/featured-terms.html field="location" title="Locations" btn-color="outline-secondary" %}{% endraw %}
```

You can customize the cards by editing the option variables (see the comments at the top of "_includes/index/featured-terms.html" for details).

For example, if you want to highlight the authors represented in your collection, you might want to swap out "subject" card to use author instead.
In this case, you would edit the "field" and "title" option to customize your new card:

```{% raw %}
{% include index/featured-terms.html field="author" title="Authors" btn-color="info" %}{% endraw %}
```

By default only the top 5 author values present in the metadata field will be displayed. 
If you would like to display more, add in the "max" option with the number you would like visible:

```{% raw %}
{% include index/featured-terms.html field="author" max=15 title="Authors" btn-color="info" %}{% endraw %}
```

For another example, perhaps rather than auto generating the top subjects from a metadata field, you would like to provide a curated list of the most important terms.
In this case, delete the "field" option and add the "featured" option with your list as the value (each term separated by semicolon `;`).
It might look like:

```
{% raw %}{% include index/featured-terms.html featured="Example term;Another;Third term" title="Subjects" btn-color="info" %}{% endraw %}
```

### Adjust the Size and Number of Columns

The above edits move content around or delete it, but the home page's column sizing and layout can also be adjusted. 
Columns follow the Bootstrap Grid, so if you're diving deeper into customizing the layout, refer to the [Bootstrap Documentation](https://getbootstrap.com/docs/4.6/layout/grid/){:target="_blank" rel="noopener"}.

There are a lot of possibilities for customization here! 
CollectionBuilder is designed as a flexible template that can be adapted to the needs of a collection.
We recommend experimenting to find what works best for you.

Here's an example where there is one big top carousel, then three separate sections below with time, subjects, and object data, followed by a final row that includes a description and the data download buttons:

```{% raw %}
<div class="col-md-12">

{% include index/carousel.html height=600 %}

</div>
<div class="col-md-4">

{% include index/time.html %}

</div>
<div class="col-md-4">

{% include index/featured-terms.html field="subject" title="Top Subjects" btn-color="info" %}

</div>
<div class="col-md-4">

{% include index/objects.html %}

</div>

<div class="col-md-6">

{% include index/description.html %}

</div>
<div class="col-md-6">

{% include index/data-download.html %}

</div>
{% endraw %}
```
