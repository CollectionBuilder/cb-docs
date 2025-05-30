---
title: Browse
parent: Page Config
nav_order: 3
---

# Browse Page Configuration (config-browse.csv)

The Browse page displays each item in your collection as a "card" - a Bootstrap design component that shows item information in an organized, visual format. At the top of the page, users can search and filter the collection using a search box.

The "_data/config-browse.csv" file controls:
- Which metadata fields appear on each item card
- How that metadata is displayed (labels, buttons, hidden fields)
- Which fields are available for searching and sorting


The columns are described below, and an [example](#example) is provided for your convenience: 

### field: 
- Selects the field from your metadata CSV.
- **Important:** Fields defined here are used by advanced search and faceted search features.
- **Default Behavior**: The item title automatically appears on every card. You configure all other metadata fields through the CSV.


### display_name: 
- Determines the field name as it is displayed to users.
- This label appears on browse cards and as advanced/faceted search options (if not defined by the `facet_name` field detailed below).

### btn: 
- Determines whether the field displays as a button. 
    - *Options*: `true` or leave blank
    - `true` will turn all metadata in that field into buttons, and is recommended for fields that have multiple entries, like 'subject.'
    - Button fields work especially well with faceted search filtering.

### hidden: 
- Determines whether this field is hidden.
    - *Options*: `true` or leave blank
    - Useful when you don't want a metadata field to be visibly present on Browse page cards, but still want to filter for that field.
    - Hidden fields are still searchable with advanced and faceted search and will appear as options in the faceted/advanced dropdowns.

### sort_name: 
- Determines if the field will be used as an option to sort cards on the browse page via the dropdown menu to the right of the search box. This option also determines the label used in that dropdown menu for the field. 
    - *Options*: write whatever word/phrase you'd like to show up in the dropdown field. Once an option is entered, the sort function will work for that field.
    - Typically, you just put the display_name here, but oftentimes it's helpful to give more context, such as in the example below for Date, where the sort function indicates that it will sort by "Date Created"
    - **Important:** To use a field as the default sort in theme.yml, you must include a sort_name for that field.

### facet_name: 

{:.alert .alert-red}
**NOTE:** This option only applies to **CSV**. **GH** and **SHEETS** do not have faceted/advanced search options. 

- Determines the field name as it is displayed to users in the facet dropdown menus that appear both on the main page and via the advanced search modal.
- The name will default to display_name if that is present so no need to define that twice if you already do it in that field.
    - Typically, the reason to use this column is when you're making one of your fields a button on the card but don't want to label it on the card, which means you don't enter a display_name -- in that case, you can still label how the field is displayed to a user in the faceted/advanced dropdowns by defining the label here

------

## Example 

```
field,display_name,btn,hidden,sort_name,facet_name
date,Date,,,Date Created
description,,,,
creator,Creator,,,
subject,,true
location,,true,,,Location Depicted
identifier,,,true,Identifier
```


### Field and Display Names

If you want to add a description to the browse cards, and label it "Description" on the user interface, you would include a value of `description` in the "field" column and then include `Description` as the value of that row's "display_name" column.

If you want to include items' descriptions on the browse cards but feel that including the label, "Description" is unnecessary, you could include a value of `description` in the "field" column and then leave that row's "display_name" column blank. 

The above example embodies this approach. Note that the description field will be listed in the advanced/faceted dropdown menus as "Description" since the code defaults to the capitalized field name when neither the display_name or facet_name fields are present.

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
**Note:** Even hidden fields are included in advanced search and faceted search filtering.


## How the Browse Page Works

The Browse page has two main components:

1. **Item Display**: Each collection item appears as a card showing metadata you configure
2. **Search & Filter**: Users can search terms or use enhanced filtering options

## Enhanced Browse Features

{:.alert .alert-blue}
**Note:** Additional Browse page features can be enabled in the "_data/theme.yml" file:
- **Advanced Search**: Adds detailed search options via a modal dialog
- **Faceted Search**: Provides filter dropdowns based on metadata fields  
- **Default Sorting**: Sets initial sort order when page loads

These enhanced features require proper configuration of the "config-browse.csv" file to work effectively.

{:.alert .alert-green}
**Simple Search Option**: To use the basic search functionality instead, set both `advanced-search` and `faceted-search` to `false` in theme.yml.
