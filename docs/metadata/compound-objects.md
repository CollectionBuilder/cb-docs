---
title: Compound Objects
parent: Metadata
nav_order: 8
---
# Compound Objects and Multiples

{:.alert .alert-red }
**Currently Compound Objects can only be used in CollectionBuilder-CSV.**

_Note: While "object" is in the title of this section, a "compound object" is better categorized as an issue related to metadata than to objects (i.e. digital files) proper._

Please see the [demo compound object metadata sheet](https://docs.google.com/spreadsheets/d/1UNwl02r3fB-ybiKqb3SY4K30Tf4_rY_NOv5_o5WtVoY/edit?usp=sharing) for an example of how compound objects are represented in a metadata spreadsheet, and visit the [demo CollectionBuilder-CSV site](https://www.lib.uidaho.edu/collectionbuilder/collectionbuilder-csv-demo/) to see how this looks in operation. 

## Context

A "Compound Object" describes an item that is made up of a set of digital files intended to be treated as one singular connected object in the system and displayed on a single "item" page. 

CollectionBuilder has two default types of compound object display templates: 
"compound_object" and "multiple".

### compound_object 

A `compound_object` can include a set of objects from any type of media that CollectionBuilder handles, i.e. image, pdf, video, audio, panorama, or record, matching the single item display_template options. 

- Parent items with the display_template value of `compound_object` will generate an Item page featuring a grid of cards representing item thumbnails for each child object. Clicking the child thumbnails opens a child object page as a modal. The child modal has similar features to the display of a single item page, but maintains the context of the compound object parent. 
- `compound_object` examples:
    - **Scrapbook**: for a digitized scrapbook the "compound object" might contain a series of 25 individual page images or 25 individual items listed on multiple pages. The parent metadata record provides full details about the scrapbook, while the child metadata records will only describe the unique information about each page or item. 
    - **Oral history**: each object might contain different derivatives of an interview, audio, video, transcript, and portrait.
    - **Gallery**: a gallery of images from one event that are individually described with independent metadata.

### multiple

A `multiple` is image based, and is best used for items such as postcards or multi-view records of a 3-dimensional object. 

- Parent items with the display_template value of `multiple` will generate an Item page featuring the child items displayed as larger images. The children *do not* have child object pages / modals. Instead, clicking the child images will open a zoomable spotlight gallery of the images.
- `multiple` Examples: 
    - **Postcard**: a compound object containing a front and back image. 
    - **3D archeological artifact**: archeological objects are often imaged from standardized perspectives to provide experts information about the piece.
    - **Gallery**: a gallery of images from one event that are not individually described.

{:.alert .alert-blue }
The "multiple" display template works well if the additional files do *not* require their own extensive metadata. By default, only the "title" of the child elements will be represented on the item page -- all other metadata for child objects will be ignored. 

## Our Metadata Approach Using "parentid"

Using these templates requires some additional conventions to represent your compound objects in your metadata spreadsheet.
Our approach for describing "compound objects" and "multiples" requires a top level metadata record describing the object overall, the parent, along with one or more individual child records describing the files related to the parent. 
The children are connected to the parent by using the "parentid" field, whose value matches the parent's "objectid" value.

This allows each child object to be fully described individually (or not) using your full metadata template. It is also useful if you are exporting existing metadata from a platform such as CONTENTdm with "page level" metadata.

### Metadata Conventions

- The child record(s) must have a "parentid" that matches the "objectid" of their parent.
- Both the parent and the child must have an "objectid".
- The parent should have a "display_template" value of `compound_object` or `multiple` to use the respective display templates.
- Child records should have their own "display_template" matching their media type to choose the appropriate features on the item page. (i.e. use `image` for a .JPG file)
- The image listed in "image_thumb" and "image_small" of the parent will be used to represent the item in all visualizations.

### Visualization Configuration Options

You can use the Compound Objects options in "theme.yml" to configure if you would like the children of your compound objects to show up individually in the map, timeline, data, carousel, browse, and search pages.
If the options are set to `true`, each child item will be individually represented on the page.
If set to `false`, only the parent record (and its metadata) will appear (child objects will still be accessible on the parent's Item page). 
