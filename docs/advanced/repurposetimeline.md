---
title: Repurposing the Timeline
parent: Advanced
nav_order: 3
---

# Change Timeline visualization to feature other data

In some instances, you may have other data that is a natural fit for the Timeline visualization (for instance, we once used it to visualize [depth](https://www.lib.uidaho.edu/digital/watkins/depth.html)!)

In order to change the type of information the Timeline displays, you'll need to change a variable in the liquid code in the `timeline.html` file, contained in the `_layouts` folder. 

### Change the Field Generating the Timeline

Change the "map" option at the top of the `timeline.html` file from "date" to another metadata field that you'd like to represent. 
The line you should change looks like this: 

{% raw %}`{%- assign raw-dates = site.data[site.metadata] | map: 'date' | compact | uniq -%}`{% endraw %}

If we were changing it to map the field `depth`, it would then look this: 

{% raw %}`{%- assign raw-dates = site.data[site.metadata] | map: 'depth' | compact | uniq -%}`{% endraw %}

{:.alert}
We'll use `depth` as our example for the rest. 
If you'd like, you can [look at the example page](https://www.lib.uidaho.edu/digital/watkins/depth.html) these changes can generate, or look at the [revised timeline.html layout](https://github.com/uidaholib/collectionbuilder-cdm-template/blob/watkins/_layouts/timeline.html) we used to make that page in the uidaholib digital collections GitHub repository. 

### Connect Your New Field to the Output

You'll need to make sure that your new field connects to the visualization below. Find where the items are defined for each row in the HTML below. You can search for the only "where_exp" on the page. 

If we continue with our `depth` example, change the part after the "where_exp" so `item.date contains year` becomes `item.depth contains year`

*Note that we leave the variable "year" in the above code to refer to the unique values generated from mapping your new field.* 

The end result will be: 

{% raw %}
`{%- assign inYear = items | where_exp: 'item', 'item.depth contains year' -%}`{% endraw%}

*Note: We are keeping the `year` variable constant here so as not to have to edit all the code and risk messing it up somewhere. You can, however, go through and edit all the `year` variables on the page to become `depth` if you like to keep things readable.*

### Change the page title and navigation to rename the timeline feature

So now that we are looking at another field (in our case, `depth`) rather than `date`, we'll likely want to change the way that the page is named and linked. 

- Change **_data/config-nav.csv** so that instead of the line `Timeline,/timeline.html` it should read `Depth,/depth.html` or whatever matches up to your new page. 

- Then change the timeline.md markdown file, found at **/pages/timeline.md**, so that the page is titled differently and that the page creates a different url, using the powerful [permalink option](https://jekyllrb.com/docs/permalinks/). You can still keep the file named timeline.md, or you can change that as well. 

Using depth again, you'll want the page to look like this: 

{% raw %}
```
---
title: Depth
layout: timeline
permalink: /depth.html
# a timeline visualization will be added below the content in this file
---

{:.mt-5}
## Collection Depth
```
{% endraw %}


### Change Timeline Visualization to Include Words Rather than Numbers

What if you don't want to do depth, or you have something else ... 

For instance, if you wanted to change `depth` to `mine`

Nothing's showing up, and you can see why -- the former processing code got rid of the space between the words. Let's find that part and remove it. 

This

{% raw %}
`{%- assign uniqueYears = clean-years | remove: " " | split: ";" | uniq | sort -%}`{% endraw %}

becomes

{% raw %}
`{%- assign uniqueYears = clean-years | split: ";" | uniq | sort -%}`{% endraw%}

And it should work!
