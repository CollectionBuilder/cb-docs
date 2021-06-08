---
title: CSV Metadata
parent: Metadata
nav_order: 3
---

{:.alert .alert-yellow }
CollectionBuilder-CSV is under active development!
This doc content related to CSV is a draft.

# CollectionBuilder-CSV Metadata

CollectionBuilder-CSV starts from the same basic metadata template of other CB types, but adds a few technical fields to increase the flexibility of the template.
You can find the base metadata template in your project repository ["docs/metadata-template.csv"](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/docs/metadata-template.csv) or the example ["_data/demo-metadata.csv"](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/_data/demo-metadata.csv).

This template is a starting point--fill in only what is relevant for your content and feel free to add more columns!
If transforming existing metadata, you do **not** need to exactly match the CollectionBuilder template. 
Just ensure that you create the required fields following the conventions described below. 

---------------

## Required fields

### objectid: 

- This is the field that CollectionBuilder uses to identify each object. 
- Should be a unique string, all **lowercase** with no spaces or special characters as it will be used to form the item's URL. Underscores (`_`) and dashes (`-`) are okay; **slashes (`/`) should NOT be used in this field**.
- Objects without an objectid will not be displayed in the collection. Objects with non-unique objectid will be overwritten.
- Example value: `coll_002`

### title:

- The title field is used to indicate the name of an item. This should be a short, descriptive set of words that identify the item. Each item may only have one title.
- *A title is not technically required, but will leave blanks areas in the template.*
- Example value: `Haystack Rock`

------------

## Object Details (suggested)

These fields are not *required*, but are used to add downloads, display images, or representative icons for the objects on your collection site. 

{:.alert .alert-green}
These fields should be filed out in your spreadsheet using formulas / recipes depending on where your objects are hosted. 
This provides flexibility to include objects from multiple sources and to generate the URLs using a variety of approaches without needing to modify the template code.
CollectionBuilder-CSV aims to provide API recipes to generate the links for a variety of hosting solutions--but this work is done on the metadata, not embedded in the template code logic.<br>
*Tip:* if you use the Rake generate_derivatives task for processing local items, it will automatically output a "object_list.csv" containing the object_download, image_small, and image_thumb for all files processed.

### display_template:

- A template type used for the Item page *and* used in logic to choose representations in other pages. 
- If blank the object will default to a generic item page. 
- Supported values in `display_template` match files found in "_layouts".
- Default supported options: `item_image`,`item_pdf`, `item_video`, `item_audio`, `item_record`, `item`. 
    - `item_image`: Displays image_small if available, with fall back to object_download. Adds LightGallery view to open images full screen using object_download, with fall back to image_small.
    - `item_pdf`: Displays image_small if available, with fall back to image_thumb, or a pdf icon.
    - `item_video`: Displays a video embedded on the page with default support for video files (using `<video>` element with object_download as src), YouTube (from link in object_download), or Vimeo videos (from link in object_download).
    - `item_audio`: Uses `<audio>` element to embed audio file from object_download as src.
    - `item_record`: metadata only record.
    - `item`: generic fallback item page, displays image or icon depending on "image_thumb"
- See "docs/item-pages.md" in your repository for more details.

### object_download: 

- a full URL to download the full quality digital object *or* relative path if items are contained with in the project.
- Most objects will have an `object_download` value, the link where the digital file can be downloaded or accessed in a different platform.
- If this field is blank, the item will become a metadata only record.
- Example value for object in project: `/objects/demo_002.pdf`
- Example value for external object: `https://digital.lib.uidaho.edu/digital/iiif/expforsav/390/full/max/0/default.jpg`
- Example value for YouTube object: `https://youtu.be/CVXQ3X6Q8oU`

{:.alert .alert-blue }
If the objects are included within the project repository use the relative path starting with `/` from the root of the folder. 
For example if some images are in the "objects" folder, use a relative path, e.g. `/objects/example_object.jpg`.
The relative path will be converted into a full URL during build.
Do not include the `baseurl` value that you set in "_config.yml", since this will be added by the template.

### image_small: 

- a full URL to a small image representation of the object *or* relative path if items are contained with in the project.
- The small image is used to represent objects on Item pages, or in visualizations where a larger than thumb image would be useable.
- For non-image items having a small image can useful to provide users a visual representation for the object (i.e. an audio cover).
- If this field is blank, the item will be represented by a icon based on it's `display_template` or `format` field.
- As a general guideline, small images should be JPGs approximately 800x800 px max.
- Example value for object in project: `/objects/small/demo_002_sm.jpg`
- Example value for external object: `https://digital.lib.uidaho.edu/digital/iiif/expforsav/390/full/pct:20/0/default.jpg`
- Example value for YouTube object: `https://img.youtube.com/vi/CVXQ3X6Q8oU/mqdefault.jpg`

### image_thumb: 

- a full URL to a thumb image representation of the object *or* relative path if items are contained with in the project.
- The thumb image is used to represent the object on visualization pages (i.e. Home, Browse, Map, and Timeline), in a fast, user friendly file size.
- If this field is blank, the template will use a icon to represent the object based on it's `display_template` or `format` field.
- As a general guideline, thumb images should be JPGs approximately 400x400 px max.
- Example value for object in project: `/objects/thumbs/demo_002_th.jpg`
- Example value for external object: `https://digital.lib.uidaho.edu/utils/getthumbnail/collection/expforsav/id/390`
- Example value for YouTube object: `https://img.youtube.com/vi/CVXQ3X6Q8oU/default.jpg`

### format: 

- This field indicates the object's media type.
- Format is used as a fall back to determine representations if an item does not have a `display_template` or `image_thumb`.
- The input for this field should be structured according to [MIME type](https://www.iana.org/assignments/media-types/media-types.xhtml){:target="_blank" rel="noopener"} standards, consisting of a type and a subtype concatenated with a slash (`/`) between them.
- Common values:
    - Image: `image/jpeg`
    - Document: `application/pdf`
    - Audio: `audio/mp3`
    - Video: `video/mp4`

-------

## Fields Required for Visualizations

By default CollectionBuilder uses these fields to generate contextual visualizations, including a map, timeline, and word clouds reflecting the frequency of subjects and locations in a collection.
The template can be customized to use other fields, but it often is easiest to use these Dublin Core based fields!

**Page** | **Required Fields** |
Map | `latitude` & `longitude` |
Timeline | `date` (yyyy at minimum) |
Subjects | `subject` |
Location | `location` |

### latitude:

- A geographic coordinate specifying the north-south position of an item. See the [Map](theme.html#map-page) section for more information.
- Example value: `46.731643`

### longitude:

- A geographic coordinate specifying the east-west position of an item. See the [Map](theme.html#map-page) section for more information.
- Example value: `-117.165625`

{:.alert .alert-green}
**Pro Tip:** If you'd like to get the latitude/longitude of a location, right click on that spot on a Google Map. The first option you will see is to copy the coordinates. You can click to copy those and then paste the location into your metadata

### date: 

- This field indicates a point in time associated with the item. This `date` field will be used for sorting and displaying on a timeline, so may often be an estimated / approximate date, rather than one more precisely formatted to archival description standards. We suggest adding more complex descriptions of date (date ranges, uncertainties, etc) in a separate field such as "date_created".
- Dates should be represented in the format `yyyy-mm-dd`, which will enable our various timeline visualizations. See the [Timeline](theme.html#timeline-page) section for more details. 
- For less exact dates, `yyyy-mm` or `yyyy` may be used.
- Example value: `1997-07-16`, `1997-07`, `1997`
- (Dates in a `mm/dd/yyyy` format will also work)

### subject:

- The subject field contains topic(s) related to the item. 
- This field allows for multiple subjects to be input for a single record. Each should be separated with a semicolon (`;`). 
- See the [Subjects](theme.html#subjects-page) section for more information.
- Example value: `Dogs; Cats; Zebras`

{:.alert .alert-red}
*Note:* This field needs to be named **_'subject' (not 'subjects')_** for many default features in CollectionBuilder to work. Data in this field will create the word cloud that allows users to visualize the frequency of subjects used within the collection.

### location: 

- This field designates a geographic location(s) to which the item is tied. Much like the subject field, this field will build a tag cloud of the most used locations in your collection. See the [Locations](theme.html#locations-page) section for more information. Be sure to separate multiple location entries for a single record with a semicolon (`;`).
- Example value: `Pullman, Washington; Moscow, Idaho`

{:.alert .alert-green}
**If your metadata does not have map coordinates**, but you would like to experience CollectionBuilder's map visualization, we've created a [demo list of latitudes and longitudes](https://docs.google.com/spreadsheets/d/1eSj7zfthuc7-ntdnZLqNYETxVa5Z55YK8BPPao53-6w/edit?usp=sharing){:target='_blank' rel='noopener'} that you can add to your data just for practice.

-------

## Optional Fields

The rest of the fields in the CollectionBuilder metadata template are not required for CollectionBuilder or its visualizations to work, but their use is encouraged to ensure a richly informative collection. 
These remaining fields are listed below, along with their respective definitions and examples.

{:.alert .alert-green}
CollectionBuilder can accommodate any field you include in your metadata once you customize your site. For example, you can display any field on item pages or on the Browse page. See the [Metadata](customize.html#config-metadata) and [Browse](customize.html#config-browse) customization sections for more information.

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
