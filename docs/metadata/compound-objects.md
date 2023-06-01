---
title: Compound Objects
parent: Metadata
nav_order: 8
---
# Compound Objects and Multiples

A "Compound Object" describes an item that is made up of a set of digital files intended to be treated as one connected item in the collection site and displayed on a single Item page. 

Please visit the [demo CollectionBuilder-CSV site](https://compound-1lqv.onrender.com/) and [demo CollectionBuilder-GH site](https://collectionbuilder.github.io/collectionbuilder-gh/) for examples of compound objects in action, and view the demo compound object metadata sheets for [CollectionBuilder-CSV](https://docs.google.com/spreadsheets/d/1UNwl02r3fB-ybiKqb3SY4K30Tf4_rY_NOv5_o5WtVoY/edit?usp=sharing) and [CollectionBuilder-GH](https://docs.google.com/spreadsheets/d/1C1ZV3VrawKRLYUtemUdi8hLbhJw2yhn6kv-xv6_HaNk/copy?usp=sharing) for an example of how compound objects are represented in a metadata spreadsheet.  

CollectionBuilder has two built in types of compound object displays: "compound_object" and "multiple".

Compound objects and multiples can be used in both CollectionBuilder-CSV and CollectionBuilder-GH, but the implementation process is slightly different between the two templates.
In CollectionBuilder-CSV, these values (`compound_object` and `multiple`) populate the compound object record's "display_template" field. In CollectionBuilder-GH, they populate the compound object record's "format" field.

## compound_object 

A "compound_object" item can include a set of objects with any media type that CollectionBuilder handles, i.e. image, pdf, video, audio, panorama (CB-CSV only), or record.

- Parent items with the display_template (CB-CSV) or format (CB-GH) value of `compound_object` will generate an Item page featuring a grid of cards representing item thumbnails for each child object. Clicking the child thumbnails opens a child object page as a modal. The child modal has similar features to the display of an individual item page, but maintains the context of the compound object parent. 
- "compound_object" use case examples:
    - **Scrapbook**: to represent a digitized scrapbook, a compound object might contain a series of 25 pages or photographs from a scrapbook. The parent compound object metadata record provides full details about the scrapbook, while the child object metadata records will only describe the unique information about each individual page or photo. 
    - **Oral history**: an oral history compound object might contain various derivatives of an interview, such as audio, video, transcript, and portrait.
    - **Gallery**: a gallery compound object might contain a series of images from one event that are individually described with independent metadata.

## multiple

A "multiple" item is a set of images to be displayed together in a single Item page. 

- Parent items with the display_template value (CB-CSV) or format (CB-GH) of `multiple` will generate an Item page featuring the child objects displayed as a vertical series of large images that scroll down the page. The children *do not* have individual child object pages/modals. Instead, clicking the child images will open a spotlight gallery of the images. Individual metadata for each child object is *not* displayed.
- "multiple" use case examples: 
    - **Postcard**: images of a postcard's front and back that are not individually described in the metadata beyond having a "title" value. 
    - **3D archeological artifact**: images representing standardized perspectives of an archeological artifact that are not individually described in the metadata beyond having a "title" value (for example, "top", "bottom", "side" of a bowl).
    - **Gallery**: images from a single event that are not individually described in the metadata beyond having a "title" value.

{:.alert .alert-blue }
The "multiple" display_template (CB-CSV) or format (CB-GH) works well if the child files do *not* require their own metadata. By default, only the "title" of the child files will be represented on the item page -- all other metadata for child files will be ignored. 

## Compound Object Metadata Approach Using "parentid"

Incorporating compound objects requires some additional conventions in your metadata spreadsheet.

For non-compound object collection items, each object is represented by one row in your metadata spreadsheet.
Compound objects are different in that they are represented by multiple rows in the metadata: a parent row plus one or more child rows.
The parent row describes the compound object Item as a whole, while each child row describes an individual child object within the compound object.
The children are connected to the parent through the "parentid" field, which contains a value matching the parent's "objectid" value.

Ultimately all of the related children rows will be displayed together on a single Item page.

This approach allows each child object to be fully described individually (or not) using any field in your metadata.
It is also useful if you are exporting existing metadata from a platform such as CONTENTdm with "page level" metadata.

### Metadata Conventions

To include compound objects using the "compound_object" or "multiple" display_template (CB-CSV) or format (CB-GH), the following additional conventions are used in your metadata spreadsheet:

- Add a "parentid" field to your metadata spreadsheet. For non-compound object items, and parent items, the "parentid" field will be left blank.
- The parent metadata record for each compound object will have an objectid (but no parentid), and use the display_template (CB-CSV) or format (CB-GH) value of either `compound_object` or `multiple`.  
- Each child record **must have an objectid AND a parentid**
    - Each child record's "parentid" value must match the parent metadata record's `objectid`. (e.g. If the parent's "objectid" is `example002`, then all children should have `example002` in their "parentid" field.)
    - Each child record should have a value for display_template (CB-CSV) or format (CB-GH) that corresponds to its media type. See [options for display_template]({{ '/docs/metadata/csv_metadata/#display_template' | relative_url }}) for CB-CSV and [options for format]({{ '/docs/metadata/gh_metadata/#format' | relative_url }}) for CB-GH. A parent with display_template/format `multiple` will have children with display_template (CB-CSV) value `image` or format (CB-GH) value `image/jpeg`. A parent with display_template/format `compound_object` could have children with a variety of display_template (CB-CSV) or format (CB-GH) values.
    - Remember, as will all other rows in your metadata, each child `objectid` must still be unique in the collection!

For CollectionBuilder-CSV, the image listed in "image_thumb" and "image_small" of the parent will be used to represent the compound object in all visualizations.
In CollectionBuilder-GH, compound objects will be represented by icons in visualizations.

## Visualization Configuration Options

Configure the "Compound Objects" options in "theme.yml" to add or remove the children of your compound objects on the map, timeline, data, carousel, browse, and search pages.

If a Compound Objects option is set to `true`, each child item will be individually represented on the corresponding page.
If set to `false`, only the parent record (and its metadata) will appear on the corresponding page.
Child objects will still be accessible on the parent's Item page. 
