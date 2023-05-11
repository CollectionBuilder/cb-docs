---
title: Compound Objects
parent: Metadata
nav_order: 6
---
# Compound Objects and Multiples

{:.alert .alert-red }
**Currently Compound Objects can only be used in CollectionBuilder-CSV.**

_Note: While "object" is in the title of this section, a "compound object" is better categorized as an issue related to metadata than to objects (i.e. digtial files) proper._

Please see the [demo compound object metadata sheet](https://docs.google.com/spreadsheets/d/1UNwl02r3fB-ybiKqb3SY4K30Tf4_rY_NOv5_o5WtVoY/edit?usp=sharing) for an example of how compound objects are represented in a metadata spreadsheet, and visit the [demo CollectionBuilder-CSV site](https://www.lib.uidaho.edu/collectionbuilder/collectionbuilder-csv-demo/) to see how this looks in operation. 

## Context

A "Compound Object" describes an item that is made up of a set of digital files intended to be treated as one singular connected object in the system and displayed on a single page. 

There are two types of compound objects in a CollectionBuilder project: 
one known as a "compound_object" and one known as a "multiple." 

A `compound_object` can include any type of media that CollectionBuilder handles, i.e. image, pdf, video, audio, panorama, or record. 
- Those items with the dispay_template field of `compound_object` will display as a grid of cards featuring item thumbnails that, upon being clicked, will open a child object page as a modal. 
- Examples
    - Scrapbook: for a digitized scrapbook the "compound object" might contain a series of 25 individual page images or 25 individual items listed on multiple pages. The parent metadata record provides full details about the scrapbook, while the child metadata records will only describe the unique information about each page or item. 
    - Oral history: each object might contain different derivatives of an interview, audio, video, transcript, and portrait.
    - Gallery: a gallery of images from one event that are individually described

A `multiple` should be image based, and is best used for items such as postcards or multi-view records of a 3-dimensional object. 
- Those items with the dispay_template field of `multiple` will display as larger small images that *do not* have child object pages. If one clicks on one of these larger images, they will open up in a zoomable spotlight gallery.
- Examples: 
    - Postcard: a compound object containing a front and back image. 
    - 3D archeological artifact: archeological objects are often imaged from standardized perspectives to provide experts information about the piece.
    - Gallery: a gallery of images from one event that are not individually described

{:.alert .alert-blue }
The "multiple" display template works well if the additional files do *not* require their own extensive metadata. Our build will only represent the "title" of the child elements on the item page -- all other metadata for child objects with the display_template "multiple" will be ignored. 

 
## Our Metadata Approach using "parentid"

Our approach for describing "compound objects" and "multiples" require a top level metadata record describing the object overall (the parent). As such, these items' depend on the parentid field, which connects child metadata record(s) that describe the individual related files to the parent record.

This allows each child object to be fully described individually (or not) using your full metadata template. It is also useful if you are exporting existing metadata from a platform such as CONTENTdm with "page level" metadata.

These are the basic conventions:

- The child record(s) must have a "parentid" that matches the "objectid" of their parent.
- Both the parent and the child must have an "objectid".
- The parent should have a "display_template" of "compound_object" or "multiple" to use the respective display templates.
- Child records should have their own "display_template" to help choose the appropriate features on the item page. (i.e. use "image" for a .JPG file)
- The image listed in image_thumb and image_small of the parent will be used to represent the item in all visualizations.
- You can use the Compound Objects options in the theme page to determine if you would like your compound objects to show up in the timeline, map, or browse pages.
- Default visualizations (except the item page) use *only* the parent record, so child records are not searchable on the browse page of search page.


