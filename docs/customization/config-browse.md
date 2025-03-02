---
title: Browse
parent: Page Config
nav_order: 3
---

# Browse Page Configuration (config-browse.csv)

The Browse page displays each item in the collection as a "card," which is a design feature common to Bootstrap. 
At the top of the page, a search box allows users to limit the display by searching for certain terms. 

{:.alert .alert-blue}
**Note:** Additional Browse page features like advanced search, faceted search, and default sorting can be enabled in the "_data/theme.yml" file. These features rely on proper configuration of this file (config-browse.csv) to work effectively.

The "_data/config-browse.csv" allows you to control which metadata appears on a card for each item. 
Title appears on the card automatically. 
After that, you can add whatever metadata you'd like to the CSV, as well as determine how that metadata will be displayed. 

We also use subject links throughout the site that link back into the browse page and filter the collection based on the filter chosen. 
So, for instance, if on the Subjects page, you clicked a button for "Forests," you would actually be clicking a link whose url ended as "browse.html#forests." 
The Browse page would take anything after the hashtag (`#`) and filter the collection's cards by it. 

## Configuration Columns

The columns in config-browse.csv control both how metadata displays on cards and how search and sort functions work:

### field: 
- Selects the field from your metadata CSV.
- **Important:** Fields defined here are used by advanced search and faceted search features.

### display_name: 
- Determines the field name as it is displayed to users.
- This label appears on browse cards and in advanced search options.

### btn: 
- Determines whether the field displays as a button. 
    - *Options*: `true` or leave blank
    - `true` will turn all metadata in that field into buttons, and is recommended for fields that have multiple entries, like 'subject.'
    - Button fields work especially well with faceted search filtering.

### hidden: 
- Determines whether this field is hidden.
    - *Options*: `true` or leave blank
    - Useful when you don't want a metadata field to be visibly present on Browse page cards, but still want to filter for that field.
    - Hidden fields are still searchable with advanced and faceted search.

### sort_name: 
- Determines if the field will be used as an option to sort cards on the browse page via the dropdown menu to the right of the search box. This option also determines the label used in that dropdown menu for the field. 
    - *Options*: write whatever word/phrase you'd like to show up in the dropdown field. Once an option is entered, the sort function will work for that field.
    - Typically, you just put the display_name here, but oftentimes it's helpful to give more context, such as in the example below for Date, where the sort function indicates that it will sort by "Date Created"
    - **Important:** To use a field as the default sort in theme.yml, you must include a sort_name for that field.


------

## Example 

```
field,display_name,btn,hidden,sort_name
date,Date,,,Date Created
description,,,,
creator,Creator,,,
subject,,true
location,,true
identifier,,,true,Identifier
```


### Field and Display Names

If you want to add a description to the browse cards, and label it "Description" on the user interface, you would include a value of `description` in the "field" column and then include `Description` as the value of that row's "displayName" column.

If you want to include items' descriptions on the browse cards but feel that including the label, "Description" is unnecessary, you could include a value of `description` in the "field" column and then leave that row's "display_name" column blank. 
The above example embodies this approach.

### Hiding Metadata (so sneaky!) 

If, using the above example, you wanted a user's browse page search to pull up items that include words in the description, but you don't want those descriptions making the cards too big, you could add the value `true` to the column titled "hidden". 

## Using Sort Features

The sort option appears as a dropdown menu next to the search box on the browse page. 
You can also use the hidden option with a sort feature that allows you to sort the browse page items by any metadata variable. 
In the above example, we include the identifier as part of the browse card, but we hide it while making it one of the search options. 
Sorting by identifier allows a user to see the collection in its original order. 

The sort option doesn't have to match the field name, so, again in the above example, we let the user sort by the `date` field, but we label that `Date Created` in the sort dropdown menu.

If you want a specific sort order to be the default when users first visit the Browse page, you can set this in the theme.yml file with the `default-sort-field` option. The value must exactly match a field name from the first column of config-browse.csv.

{:.alert .alert-blue}
**Note:** Even hidden fields are included in advanced search and faceted search filtering, making them powerful tools for discovery while keeping your browse cards clean and readable.