---
title: TimelineJS
parent: Advanced
nav_order: 1
---

# Building a TimelineJS Feature

[TimelineJS](http://timeline.knightlab.com/) is an open source timeline builder that creates an interactive timeline based on underlying data. 
We've incorporated the TimelineJS code into CollectionBuilder in order to offer this feature generated from your collection metadata and objects. 

{:.alert .alert-yellow}
Currently, the CollectionBuilder timelinejs feature will create a timeline based on your entire collection metadata file by default. 
**This will likely be too large for the timeline to work well.** 
Below we detail ways to further customize and curate your timeline. 

## Step 1: Including TimelineJS on a page

There are three basic options for including a TimelineJS feature in your CollectionBuilder site: you may 1) insert the TimelineJS into the Home Page; 2) replace the current timeline page with a TimelineJS page; or 3) create a new TimelineJS page. 
The instructions below detail each of these options. 

### Inserting TimelineJS into the Home Page

1. Open the "home-infographic.html" file in the "_layouts" directory. 
2. You may want to edit the column sizes or arrangement of the "home-infographic.html" file (follow the instructions in the [Home Page](../../home/) documentation to rearrange the Home page layout). The TimelineJS feature will work decently in a smaller section, but it looks best in a wider format (for example, consider replacing the carousel with TimelineJS). 
3. Add 
`{% raw %}{% include feature/timelinejs.html %}{% endraw %}` 
to the section of the "home-infographic.html" file in which you'd like the feature to appear. 
4. Save the file.

### Replacing the Current Timeline Page

1. Navigate to the `pages/` directory, and open the `timeline.md` file.
2. Locate the yaml frontmatter at the top of the file (the `key: value` pairs between two lines of dashes (`---`)).
3. Edit the value for `layout` to look like this:
```yaml
layout: full-width-page
```
4. Locate the `## Collection Timeline` line of text, below the yaml frontmatter. 
5. Replace `## Collection Timeline` with the following "include" command: `{% raw %}{% include feature/timelinejs.html %}{% endraw %}`
6. Save the file.

### Creating a New Timeline Page & nav dropdown

1. Open the current "timeline.md" page, which can be found in the /pages/ directory and copy its contents. 
2. Create a new markdown file in the /pages/ directory called "timelinejs.md".
3. Paste the copied text into that page
4. Edit the markdown variables at the top: 
    - Edit the title variable so that it says `TimelineJS` (or anything other than Timeline) 
    - Edit the layout variable so that it reads `full-width-page`
    - Edit the permalink variable so that it reads `timelinejs.html` (or anything other than timeline.html, which is where the other timeline is being created)
        - NOTE: You can make the permalink whatever you'd like and Jekyll will create the page; you can even put it in a new directory (say /timeline/featured.html), just make sure to include the link you create in your config-nav.csv file, as described below
5. Replace the `## Collection Timeline` line with the following "include" command: `{% raw %}{% include feature/timelinejs.html %}{%endraw%}`
6. Save your File
7. Open the config-nav.csv in your /_data/ directory
8. Edit the file so that it includes the following three lines: 

```
Timelines,,
Full Timeline,/timeline.html,Timelines
TimelineJS,/timelinejs.html,Timelines
```

This will create a dropdown menu that links to both timeline pages. 

## Step 2: Curating Your Timeline 

The TimelineJS feature runs off of the timelinejs.json file, which can be found in the /assets/data/ directory. 
We recommend you edit the file so that it includes a select number of items.
Below are several ways to do this. 

**Limiting the Items Included**

1. Open the timelinejs.json file, which can be found in the /assets/data/ directory.
2. You will need to edit the first line of the document so that it limits the collection.
    - limit the timeline to only include those items that are images--> `{% raw %}{%- assign items = site.data[site.metadata] | where_exp: "item","item.format contains 'image'" -%}{% endraw %}`
    - limit the timeline to only include those items that occur during a certain year--> `{% raw %}{%- assign items = site.data[site.metadata] | where_exp: "item","item.date contains '1935'" -%}{% endraw %}` 
3. There are other ways to limit the timeline as well. See below for limiting it through the creation of a curated spreadsheet.

**Creating a New Data Sheet (with new headlines)**

This method will use a new data sheet to create a curated timeline by only listing those items that contain information in a newly created field ("headline")

1. Make a copy of your current metadata file using a spreadsheet software application like Google Sheets
2. Add a column called "headline" right before the "title" column
3. Add new headlines to those items you'd like included on a timeline (or simply copy and paste the current title into the new cell)
4. Save the file as a CSV and rename it "timelinejs.csv" 
5. Add this CSV to your `_data` directory.
6. Open the timelinejs.json file, which can be found in the /assets/data/ directory.
7. Edit the first line so that it reads --> `{% raw %}{%- assign items = site.data.timelinejs | where_exp: "item","item.headline" -%}{% endraw %}`

This will generate a timeline that only includes items that have a headline. 
