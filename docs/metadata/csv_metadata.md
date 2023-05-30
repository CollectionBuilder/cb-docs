---
title: CSV Metadata
parent: Metadata
nav_order: 2
---

# CollectionBuilder-CSV Metadata

CollectionBuilder-CSV starts from the same basic metadata template of other CB templates, but adds a few technical fields to increase the flexibility of the template.

To get started, copy the Google Sheets metadata template below (make sure you're logged in to Google Drive, then open the template and click the File menu and select "Make a Copy").

[CollectionBuilder-CSV Metadata Template](https://docs.google.com/spreadsheets/d/1nN_k4JQB4LJraIzns7WcM3OXK-xxGMQhW1shMssflNM/copy?usp=sharing){:.btn .btn-purple target="_blank" rel="noopener"}

This template is a starting point--fill in only what is relevant for your content and feel free to add more columns!
If transforming existing metadata, you do **not** need to exactly match the CollectionBuilder template. 
Just ensure that you create the required fields following the conventions described below. 

---------------

## Required fields for CollectionBuilder-CSV

### objectid: 

- This is the field that CollectionBuilder uses to identify each object. This should be a unique string, all **lowercase** with no spaces or special characters as it will be used to form the item's URL. Underscores (`_`) and dashes (`-`) are okay; **slashes (`/`) should NOT be used in this field**.
- Objects without an objectid will not be displayed in the collection. Objects with non-unique objectid will be overwritten.
- Example value: `coll002`

### title:

- The title field is used to indicate the name of an item. This should be a short, descriptive set of words that identify the item. Each item may only have one title.
- *A title is not technically required, but will leave blank areas in the template.*
- Example value: `Haystack Rock`

-----

## Strongly suggested fields

The fields described in this section are not *required*, but they come highly recommended! 

### Display Template

The `display_template` field is used to choose the Item page type and the correct item representations on other pages.
Setting the template enables a great deal of flexibility and simplifies customization of your collection, and combined with the object location fields listed below, represents the biggest difference from other CollectionBuilder versions such as GH. 

### display_template:

- Sets the template type used for the Item page *and* is used in logic to choose representations in other pages. 
- If blank the object will default to a generic item page. 
- Supported values in `display_template` match the files found in "_layouts/item/".
- Default supported options: `image`,`pdf`, `video`, `audio`, `record`, `item`, `panorama`, `compound_object`,`multiple`. 
    - `image`: Displays image_small if available, with fall back to object_location. Adds gallery view to open images full screen using object_location, with fall back to image_small.
    - `pdf`: Displays image_small if available, with fall back to image_thumb, or a pdf icon.
    - `video`: Displays a video embedded on the page with default support for video files (using `<video>` element with object_location as src), YouTube (from link in object_location), or Vimeo videos (from link in object_location).
    - `audio`: Uses `<audio>` element to embed audio file from object_location as src.
    - `panorama`: a 360 degree image. Item pages will use the Javascript based panorama viewer, [Panellum](https://pannellum.org/) to display the image in a 360 degree view.
    - `record`: metadata only record.
    - `item`: generic fallback item page, displays image or icon depending on "image_thumb"
    - `compound_object`: a record for a object that includes multiple file instances that are described/managed separately in the metadata. The item page will display a grid of collected items (of any accepted CB type) whose metadata and media can be viewed in a series of browsable modals. Compound objects use an additional set of conventions, see [below for more details](#compound-object-display-templates). 
    - `multiple`: a record for a object that includes multiple images (such as a postcard) that are listed separately in the metadata. The item page will feature a vertical series of large images that scroll down the page and a popup gallery function. Multiples use an additional set of conventions, see [below for more details](#compound-object-display-templates).
- See ["docs/item-pages.md"](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/docs/item_pages.md) in your CollectionBuilder-CSV project repository for more details.

<div class="alert alert-blue" markdown="1"> 

#### Compound Object Display Templates

For regular items, each object is represented by one row in your metadata spreadsheet. 
Compound objects on the other hand are represented by multiple rows: a parent row plus one or more child rows.
The parent record describes the object overall, while each child describes the individual component parts/files--all of them will be displayed together on a single Item page.

To include compound objects using the "compound_object" or "multiple" display template, the following additional conventions are used in your metadata spreadsheet:

- A "parentid" field must be added to your metadata spreadsheet/csv. For regular items and parent items this field will left be blank.
- The parent metadata record for each compound object will have an objectid (but no parentid), and use the "display_template" value of either `compound_object` or `multiple`.  
- Each child record **must have an objectid AND a parentid**
    - Each child record's `parentid` value must match the parent metadata record's `objectid`. e.g. If the parent's "objectid" is `example002`, then all children should have `example002` in their "parentid" field.
    - Each child record can use any standard `display_template` corresponding to the object type. e.g. a parent using the `multiple` template will have several children using the `image` template; a parent using the `compound_object` template could have children using all different display template options.

Please see the [demo compound object metadata sheet](https://docs.google.com/spreadsheets/d/1UNwl02r3fB-ybiKqb3SY4K30Tf4_rY_NOv5_o5WtVoY/edit?usp=sharing) for an example of how this might look in a metadata spreadsheet, and visit the [demo CollectionBuilder-CSV site](https://compound-1lqv.onrender.com/) to see how this looks in operation. 

For full details on compound objects, check out [our section on Compound Objects]({{ '/docs/metadata/compound-objects/' | relative_url }}).  

</div>

### Object Location Fields 

Object location fields are used to add file downloads and display images for your collection items on the Item page and other visualization pages.

<div class="alert alert-green" markdown="1">

The fields below can be filled out in your metadata spreadsheet using [formulas and recipes]({{ '/docs/metadata/object-paths/' | relative_url }}) depending on where your objects are hosted.
This approach provides flexibility to include objects from multiple sources or APIs without needing to modify the template code--this allows you to work on your metadata, rather than customizing the website!

You will need to use the correct file paths or URLs for your objects. Here are some important tips:

- If the objects are included within the project repository use the relative path starting with `/` from the root of the folder. For example, if some images are in the repository's "objects" folder, use `/objects/example_object.jpg`. The relative path will be converted into a full URL during build. Do not include the `baseurl` value that you set in "_config.yml", since this will be added by the template.
- **URLs to external media should always be secure HTTPS links.** Media at HTTP links are likely to be blocked by browser security defaults as [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), meaning HTTP "image_small" and "image_thumb" images will not appear in your site's pages. For example, `https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg` will work, but `http://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg` will be blocked.
- If you use the [Rake generate_derivatives]({{ '/docs/objects/derivatives/#generate-derivatives-rake-task' | relative_url }}) task for processing local items, it will automatically output an "object_list.csv" containing the object_location, image_small, and image_thumb values for all files processed.

</div>

### object_location: 

- A full URL to download the full quality digital object *or* relative path if items are contained with in the project.
- Most objects will have an `object_location` value, the link where the digital file can be downloaded or accessed in a different platform.
- For some items (such as the `record` display template), this may be a link to different website (*not necessarily to a download of a file*).
- If this field is blank, the item will become a metadata-only record.
- Example value for external object: `https://digital.lib.uidaho.edu/digital/iiif/expforsav/390/full/max/0/default.jpg`
- Example value for object in project: `/objects/demo_002.pdf`
- Example value for YouTube object: `https://youtu.be/CVXQ3X6Q8oU`

### image_small: 

- A full URL to a small image representation of the object *or* relative path if items are contained with in the project.
- The small image is used to represent objects on Item pages, or in visualizations where a larger-than-thumb image would be useable.
- For non-image items having a small image can useful to provide users a visual representation for the object (i.e. an audio cover).
- If this field is blank, the item will be represented by an icon based on its `display_template` or `format` field.
- As a general guideline, small images should be JPGs approximately 800x800 px max.
- Example value for external object: `https://digital.lib.uidaho.edu/digital/iiif/expforsav/390/full/pct:40/0/default.jpg`
- Example value for object in project: `/objects/small/demo_002_sm.jpg`
- Example value for YouTube object: `https://img.youtube.com/vi/CVXQ3X6Q8oU/hqdefault.jpg`

### image_thumb: 

- A full URL to a thumb image representation of the object *or* relative path if items are contained with in the project.
- The thumb image is used to represent the object on visualization pages (i.e. Home, Browse, Map, and Timeline), in a fast, user friendly file size.
- If this field is blank, the template will use a icon to represent the object based on its `display_template` or `format` field.
- As a general guideline, thumb images should be JPGs approximately 400x400 px max.
- Example value for external object: `https://digital.lib.uidaho.edu/digital/iiif/expforsav/390/full/pct:20/0/default.jpg`
- Example value for object in project: `/objects/thumbs/demo_002_th.jpg`
- Example value for YouTube object: `https://img.youtube.com/vi/CVXQ3X6Q8oU/mqdefault.jpg`

### format: 

- This field indicates the object's media type.
- Format is used as a fallback to determine representations if an item does not have a `display_template` or `image_thumb`.
- The input for this field should be structured according to [MIME type](https://www.iana.org/assignments/media-types/media-types.xhtml){:target="_blank" rel="noopener"} standards, consisting of a type and a subtype concatenated with a slash (`/`) between them.
- Common values:
    - Image: `image/jpeg`
    - Document: `application/pdf`
    - Audio: `audio/mp3`
    - Video: `video/mp4`

------

## Fields Required for Visualizations

By default CollectionBuilder uses these fields to generate contextual visualizations, including a map, timeline, and word clouds reflecting the frequency of subjects and locations in a collection.

The template can be customized to use other fields, but it often is easiest to use these Dublin Core-based fields!

**Page** | **Required Fields** |
Map | `latitude` & `longitude` |
Timeline | `date` (yyyy at minimum) |
Subjects | `subject` |
Location | `location` |

### latitude:

- A geographic coordinate specifying the north-south position of an item. See the [Map]({{ '/docs/theme/map/' | relative_url }}) section for more information.
- Example value: `46.731643`

### longitude:

- A geographic coordinate specifying the east-west position of an item. See the [Map]({{ '/docs/theme/map/' | relative_url }}) section for more information.
- Example value: `-117.165625`

- **Pro Tip:** Latitude and longitude for your items can be found using online mapping platforms:
    - On [Google Maps](https://www.google.com/maps/) right click on a point and select the lat/long displayed at the top of the menu. This will copy the lat/long values to your clipboard, allowing you to paste them into your metadata spreadsheet. Alternatively, if you left click on the map, the lat/long will display in a box towards the bottom. Double clicking on a spot will center the map on that location, and the lat/long will be added to the URL where you can copy it from the address bar.
    - On [Open Street Map](https://www.openstreetmap.org/) right click on a point and select "Show address" from the menu. The lat/long will display on the left side panel, where you can copy and paste to your metadata.
    - On [iTouch Maps](https://itouchmap.com/?r=latlong) search or move the map to approximate location, then hold Shift and click on the spot. The lat/long will display below.

{:.alert .alert-green}
**If your metadata does not have map coordinates**, but you would like to experience CollectionBuilder's map visualization, we've created a [demo list of latitudes and longitudes](https://docs.google.com/spreadsheets/d/1eSj7zfthuc7-ntdnZLqNYETxVa5Z55YK8BPPao53-6w/copy?usp=sharing){:target='_blank' rel='noopener'} that you can add to your data just for practice.

### date: 

- This field indicates a point in time associated with the item. This `date` field will be used for sorting and displaying on a timeline, so may often be an estimated / approximate date, rather than one more precisely formatted to archival description standards. We suggest adding more complex descriptions of date (date ranges, uncertainties, etc) in a separate field such as "date_created".
- Dates should be represented in the format `yyyy-mm-dd`, which will enable our various timeline visualizations. See the [Timeline]({{ '/docs/theme/timeline/' | relative_url }}) section for more details. 
- For less exact dates, `yyyy-mm` or `yyyy` may be used.
- Example value: `1997-07-16`, `1997-07`, `1997`
- (Dates in a `mm/dd/yyyy` format will also work)

### subject:

- The subject field contains topic(s) related to the item. 
- This field allows for multiple subjects to be input for a single record. Each value should be separated with a semicolon (`;`). 
- See the [Subjects]({{ '/docs/theme/subjects/' | relative_url }}) section for more information.
- Example value: `Dogs; Cats; Zebras`

{:.alert .alert-red}
*Note:* This field needs to be named ***'subject' (not 'subjects')*** for many default features in CollectionBuilder to work. Data in this field will create the word cloud that allows users to visualize the frequency of subjects used within the collection.

### location: 

- This field designates a geographic location(s) to which the item is tied. Much like the subject field, this field will build a tag cloud of the most used locations in your collection. See the [Locations]({{ '/docs/theme/locations/' | relative_url }}) section for more information. Be sure to separate multiple location entries for a single record with a semicolon (`;`).
- Example value: `Pullman, Washington; Moscow, Idaho`

-------

## Optional Fields

The rest of the fields in the CollectionBuilder metadata template are not required for CollectionBuilder or its visualizations to work, but their use is encouraged to ensure a richly informative collection. 
These remaining fields are listed below, along with their respective definitions and examples.

{:.alert .alert-green}
CollectionBuilder can accommodate any field you include in your metadata once you customize your site. For example, you can display any field on item pages or on the Browse page. See the [Page config]({{ '/docs/customization/' | relative_url }}) sections for more information.

### creator:

- The creator property designates an entity primarily responsible for making the resource. Multiple creators may be input, as long as each is separated by a semicolon (`;`).
- Example value: `Smith, John` or `Smith, John; Doe, Jane`

### description:

- The description should be a brief account of the object. Each object should only have one description.
- Example value: `Postcard of the Memorial Gymnasium on the University of Idaho campus in Moscow, Idaho.`

### source:

- The source field designates a related source collection or resource from which the object is derived. This field is especially relevant for digitized archival collections. In such a situation, the name of the physical archival collection would be the input for this field. The input should be expressed as the collection name followed by a comma, then followed by the holding library.
- Example value: `PG 5, University of Idaho Library Special Collections and Archives`

### identifier:

- The identifier field is used to preserve the unique identifier assigned to the object by the object's (usually physical) source collection.
- Example value: `ARG-02-16-1993`

### type:

- An object's type distinguishes between types of image, sound, text, etc. using a one- or two-value input. At minimum, the input should contain a value chosen from the [DCMI Type Vocabulary](https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/2003-02-12/){:target="_blank" rel="noopener"}. If using a second value, the second value does not need to relate to a controlled vocabulary, but should give further specification of the object type. The two values in a pair should be separated by a semicolon (`;`). See examples below.
- Example value: `Image;StillImage`, `Image;MovingImage`, `Text`, `Sound`

### language: 

- This field indicates the language associated with the object. Recommended best practice is to use a controlled vocabulary such as the [ISO 639-2 Codes for the Representation of Names and Languages](http://www.loc.gov/standards/iso639-2/php/code_list.php){:target="_blank" rel="noopener"} to designate language tags.
- Example value: `en`, `fr`, `de`

### rights:

- The rights field should include a free-text rights statement describing information about rights held in and over the object.
- Example value: `Educational use includes non-commercial use of text and images in materials for teaching and research purposes. Digital reproduction rights granted by the University of Idaho Library. For other uses beyond free use, please contact University of Idaho Library Special Collections and Archives Department.`

### rightsstatement:

- This field is a standardized rights statement, designated in the form of a URI. It should be presented as a [creativecommons.org](https://creativecommons.org/){:target="_blank" rel="noopener"} URI or a [rightsstatements.org](https://rightsstatements.org/en/){:target="_blank" rel="noopener"} URI.
- Example value: `http://rightsstatements.org/vocab/NoC-US/1.0/`
