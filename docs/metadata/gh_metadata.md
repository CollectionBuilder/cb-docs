---
title: GH Metadata
parent: Metadata
nav_order: 1
---

# CollectionBuilder-GH Metadata

## Metadata Template

If you are starting your collection from scratch, the easiest way to ensure you have the required fields is to create your metadata using the CollectionBuilder-GH metadata template. 
The template is available on Google Sheets via the link below (make sure you're logged in to Google Drive, then open the template and click the File menu and select "Make a Copy" to get started), or in your CollectionBuilder-GH project repository as "_data/metadata-template.csv".
This template is a starting point--fill in only what is relevant for your content and feel free to add more columns!

If transforming existing metadata, you do **not** need to exactly match the CollectionBuilder template. 
Just ensure that you create the required fields following the conventions described below. 

[CollectionBuilder-GH Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/copy?usp=sharing){:.btn .btn-purple target="_blank" rel="noopener"}

The guidelines below provide details about each field.

-----

## Required Fields for CollectionBuilder-GH

Without values in the fields below, CollectionBuilder will not work properly.

### objectid:

- This is the field that CollectionBuilder uses to identify each object. This should be a unique string, all **lowercase** with no spaces or special characters as it will be used to form the item's URL. Underscores (`_`) and dashes (`-`) are okay; **slashes (`/`) should NOT be used in this field**.
- Example value: `coll002`

### filename: 

- For normal items, this field will be the digital object's filename including the file extension, *or* a full URL to a file hosted external to your project. The value **must exactly match the actual filename** of the file in your "objects" directory, including the case of the filename and file extension. Most web servers are case sensitive, so make sure everything matches!
    - Example value for item file in your project's "objects" folder: `letter001.pdf`
    - Example value for external item file: `https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg`
    - **Important note on external items:** URLs to external media should always be secure HTTPS links. Media at HTTP links are likely to be blocked by browser security defaults as [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), thus will not appear on your pages!
- YouTube or Vimeo items will leave this field blank.
- Record items (metadata-only) can optionally add an external link that will appear as a clickable link on the item's page. 
    - Example value for an external link for a "record" item type: `https://www.doi.org/10.1577/M02-113`
- *Tip:* check [Get List of Filenames]({{ '/docs/extras/utilities/#get-list-of-filenames' | relative_url }}) for quick methods to fill in the filename field!

### title: 

- The title field is used to indicate the name of an item. This should be a short, descriptive set of words that identify the item. Each item may only have one title.
- Example value: `Haystack Rock`

### format: 

- This field indicates the item's media type. Since CollectionBuilder uses logic based on `format` to display objects, this is the most important field to ensure the interactive visualizations and item pages function correctly. If there are errors or anomalies, some pages will not work. 
- For normal items the value of this field should match the standard [MIME type](https://www.iana.org/assignments/media-types/media-types.xhtml){:target="_blank" rel="noopener"} corresponding to your item's file, consisting of a type and a subtype concatenated with a slash (`/`) between them. This can can generally be inferred by looking at the file extension (e.g. ".jpg", ".pdf", etc). The common MIME type "format" values supported by CB-GH are:
    - Image: `image/jpeg`, `image/png`
    - Document: `application/pdf`
    - Audio: `audio/mp3`
    - Video: `video/mp4`
- CB-GH also supports a few non-standard Item types by using special "format" values. These options are:
    - Record: `record` (a metadata-only Item with no display file, optionally include an external link to the item using the "filename" field)
    - Compound Object: `compound_object` (see Compound Object Formats below)
    - Multiple: `multiple` (see Compound Object Formats below)

<div class="alert alert-blue" markdown="1"> 

#### Compound Object Formats

CollectionBuilder-GH supports Compound Objects!
A "Compound Object" describes an item that is made up of a set of digital files intended to be treated as one connected item in the collection site and displayed on a single Item page. 

Incorporating compound objects requires some additional conventions in your metadata spreadsheet.
For full details on how to add compound objects to your site, check out the [Compound Objects section]({{ '/docs/metadata/compound-objects/' | relative_url }}) of the docs. 

</div>


### youtubeid (only required for YouTube video items):

- This is the unique string assigned to a video when it is uploaded to YouTube. An easy way to find this is to look at the url for your YouTube video. The ID will be the string attached to the end of the url. For example, in "https://www.youtube.com/watch?v=sHhk1eAgopU" the youtubeid is `sHhk1eAgopU`.
- Fill in `youtubeid` for **only** for YouTube items--leave it blank for all other items! If your collection does not contain YouTube videos, you can delete the column.
- Example value: `sHhk1eAgopU`

### vimeoid (only required for Vimeo video items):

- *Only supported on CollectionBuilder-GH!*
- This is the unique string assigned to a video when it is uploaded to Vimeo. An easy way to find this is to look at the url for your Vimeo video. The ID will be the string attached to the end of the url. For example, in "https://vimeo.com/464555587" the vimeoid is `464555587`.
- Fill in `vimeoid` for **only** for Vimeo items--leave it blank for all other items! If your collection does not contain Vimeo videos, you can delete the column.
- Example value: `464555587`

-----

## Fields Required for Visualizations

CollectionBuilder uses these fields to generate contextual visualizations, including a map, timeline, and word clouds reflecting the frequency of subjects and locations in a collection.

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
- This field allows for multiple subjects to be input for a single record. Each should be separated with a semicolon (`;`). 
- See the [Subjects]({{ '/docs/theme/subjects/' | relative_url }}) section for more information.
- Example value: `Dogs; Cats; Zebras`

{:.alert .alert-red}
*Note:* This field needs to be named ***'subject' (not 'subjects')*** for many default features in CollectionBuilder to work. Data in this field will create the word cloud that allows users to visualize the frequency of subjects used within the collection.

### location: 

- This field designates a geographic location(s) to which the item is tied. Much like the subject field, this field will build a tag cloud of the most used locations in your collection. See the [Locations]({{ '/docs/theme/locations/' | relative_url }}) section for more information. Be sure to separate multiple location entries for a single record with a semicolon (`;`).
- Example value: `Pullman, Washington; Moscow, Idaho`

-----

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
