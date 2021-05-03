---
title: Browse
parent: Customize
nav_order: 3
---

# Browse Page Configuration (config-browse.csv)

The Browse page displays each item in the collection as a "card," which is a design feature common to Bootstrap. 
At the top of the page, a search box allows users to limit the display by searching for certain terms. 
We also use subject links throughout the site that link back into the browse page and filter the collection based on the filter chosen. 

So, for instance, if on the Subjects page, you clicked a button for "Forests," you would actually be clicking a link whose url ended as "browse.html#forests." 
The Browse page would take anything after the hashtag ('#') and filter the collection's cards by it. 

The Browse page configuration CSV allows you to control which metadata appears on a card for each item. 
Title appears on the card automatically. 
After that, you can add whatever metadata you'd like to the csv, as well as determine how that metadata will be displayed. 

- **field**: Selects the field from your metadata CSV.
- **display_name**: Determines the field name as it is displayed to users.
- **btn**: Determines whether the field displays as a button. 
    - *Options*: `true` or leave blank
    - `true` will turn all metadata in that field into buttons, and is recommend for fields that have multiple entries, like 'subject.' 
- **hidden**: Determines whether this field is hidden.
    - Useful when you don't want a metadata field to be visibly present on Browse page cards, but still want to filter for that field.
- **sort_name**: Determines if the field will be used as an option to sort cards on the browse page via the dropdown menu to the right of the search box. This option also determines the label used in that dropdown menu for the field. 

### Example 

```
field,display_name,btn,hidden,sort_name
date,Date,,,Date Created
creator,Creator,,,
subject,,true
location,,true
identifier,,,true,Identifier

```

### Field and Display Names

If you want to add a description to the browse cards, and label it "Description" on the user interface, you would include a value of `description` in the "field" column and then include `Description` as the value of that row's "displayName" column.

If you want to include items' descriptions on the browse cards but feel that including the label is unnecessary, you could simply include a value of `description` in the "field" column and then leave that row's "displayName" column blank. The above example embodies this approach.

### Hiding Metadata (so sneaky!) 

If, using the above example, you wanted a user's browse page search to pull up items that include words in the description, but you don't want those descriptions making the cards too big, you could add "true" to its `hidden` variable. 

### Sort Option

The sort option appears as a dropdown menu next to the search box on the browse page. You can also use the hidden option with a sort feature that allows you to sort the browse page items by any metadata variable. In the above example, we include the identifier as part of the browse card, but we hide it while making it one of the search options. This allows a user to see the collection in its original order. 

The sort option doesn't have to match the field name, so, again in the above example, we let the user sort by the `date` field, but we label that `Date Original` in the sort dropdown menu. 
