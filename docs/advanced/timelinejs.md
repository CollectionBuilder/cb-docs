---
title: TimelineJS
parent: Advanced
nav_order: 1
---

# Building a TimelineJS Feature

Knight Lab's [TimelineJS](http://timeline.knightlab.com/){:target="_blank" rel="noopener"} is a popular open source tool to create interactive timelines based on spreadsheet data. 
CollectionBuilder can use your collection metadata to generate JSON for TimelineJS, making it easy to add the feature integrated directly to your site.

{:.alert .alert-yellow}
The default CollectionBuilder TimelineJS feature will create a timeline based on your entire collection metadata, but can be edited to only show items you've curated. 
Below you'll find instructions split into two steps: [Step 1](#step-1-including-timelinejs-on-a-page) shows how to add TimelineJS to your site, while [Step 2](#step-2-curating-your-timeline) has instructions on how to edit the content of your TimelineJS instance after it's been added. 

## Step 1: Including TimelineJS on a Page

There are three basic options for including a TimelineJS feature in your CollectionBuilder site. They are:

1. insert the TimelineJS into the Home Page; 
2. replace the current timeline page with a TimelineJS page; or 
3. create a new TimelineJS page. 

The instructions below detail each of these options. 

### Inserting TimelineJS Into the Home Page

1. Open the "home-infographic.html" file in the "_layouts" directory. 
2. You may want to edit the column sizes or arrangement of the "home-infographic.html" file (follow the instructions in the [Home Page]({{ '/home/' | relative_url }}) documentation to rearrange the Home page layout). The TimelineJS feature will work decently in a smaller section, but it looks best in a wider format (for example, consider replacing the carousel with TimelineJS). 
3. Add the following code to the section of the "home-infographic.html" file in which you'd like the feature to appear:  
`{% raw %}{% include feature/timelinejs.html %}{% endraw %}`  
4. Save the file.

### Replacing the Current Timeline Page

1. Navigate to the "pages" directory, and open the "timeline.md" file.
2. Locate the yaml front matter at the top of the file (the front matter is the `key: value` pairs between two lines of dashes (`---`)).
3. Edit the value for "layout" to look like this:
```yaml
layout: full-width-page
```
4. Locate the `## Collection Timeline` line of text, below the yaml front matter. 
5. Replace `## Collection Timeline` with the following _include command:  
`{% raw %}{% include feature/timelinejs.html %}{% endraw %}`
6. Save the file.

### Creating a New Timeline Page & Nav Dropdown

1. Navigate to the "pages" directory, and open the "timeline.md" file.
2. Copy the contents of "timeline.md".
3. Create a new markdown file in the "pages" directory called "timelinejs.md".
4. Paste the contents copied from "timeline.md" into "timelinejs.md".
5. Locate the yaml front matter at the top of the file (the front matter is the `key: value` pairs between two lines of dashes (`---`)).
6. Edit the front matter to look like this:
```yaml
title: TimelineJS
layout: full-width-page
permalink: timelinejs.html
```
Note that the title and permalink values don't have to be `TimelineJS` and `timelinejs.html`; you can call them whatever you want. 
They just need to be anything other than `Timeline` and `timeline.html` (since those are used for the collection's built-in timeline page).
Just make sure to include the title and permalink you create in your "_data/config-nav.csv" file, as described below.

7. Locate the `## Collection Timeline` line of text, below the yaml front matter. 
8. Replace `## Collection Timeline` with the following _include command:  
`{% raw %}{% include feature/timelinejs.html %}{% endraw %}`
9. Save the file.
10. Navigate to the "_data" directory, and open the "config-nav.csv" file.
11. Edit the "config-nav.csv" file so that it includes the following three rows: 
```
Timelines,,
Full Timeline,/timeline.html,Timelines
TimelineJS,/timelinejs.html,Timelines
```
This will create a dropdown menu that links to both timeline pages (the CollectionBuilder timeline and TimelineJS). 

## Step 2: Curating Your TimelineJS Feature

Using the methods above, you've incorporated a TimelineJS feature on your site that uses the entire collection metadata file by default. 
**This will likely be too large for the timeline to work well.** 
Below we detail ways to further customize and curate your timeline. 

**Note that the following instructions assume that you've already added the TimelineJS feature to your site using the instructions in Step 1 above.**

### Limiting the Items Included

1. Navigate to the "/assets/data/" directory, and open the "timelinejs.json" file.
2. You will need to edit the first line of the document so that it limits the collection:
    - limit the timeline to only include those items that are images:  
    `{% raw %}{%- assign items = site.data[site.metadata] | where_exp: "item","item.format contains 'image'" -%}{% endraw %}`
    - limit the timeline to only include those items that occur during a certain year:  
    `{% raw %}{%- assign items = site.data[site.metadata] | where_exp: "item","item.date contains '1935'" -%}{% endraw %}` 
3. There are other ways to limit the timeline as well. See below for limiting it through the creation of a curated spreadsheet.

### Creating a New Data Spreadsheet (With New TimelineJS Headlines)

This method will use a new CSV to create a curated timeline by only listing those items that contain information in a newly created field ("headline").

1. Make a copy of your current metadata file using a spreadsheet software application like Google Sheets.
2. Add a column called "headline" right before the "title" column.
3. Add new headline values to those items you'd like included on a timeline (or simply copy and paste the current title into the new cell).
4. Save the file as a CSV and rename it "timelinejs.csv".
5. Add this CSV to your "_data" directory.
6. Navigate to the "/assets/data/" directory, and open the "timelinejs.json" file.
7. Edit the first line so that it reads:  
`{% raw %}{%- assign items = site.data.timelinejs | where_exp: "item","item.headline" -%}{% endraw %}`

This will generate a timeline that only includes items that have a headline. 
