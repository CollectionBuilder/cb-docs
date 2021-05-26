---
title: CONTENTdm Metadata
parent: Metadata
nav_order: 2
---

# CollectionBuilder-CONTENTdm Metadata

## Export Metadata from CONTENTdm

1. Log in to the hosted CONTENTdm administration portal, click on the "collections" tab, and choose the collection you'd like to export from the "Current collection" dropdown menu. Once you've selected a collection, click the button labeled "change" to the right of the dropdown menu.
2. Further down the "Collection administration" page, locate the "Export" link, and click on it. This should lead you to an "Export metadata" page.
3. Make sure the radio button next to "Tab-delimited" is checked, and then check the box immediately underneath to select the option "return field names in first record." Click the "next" button. This will lead to an "Export successful" page.
4. Right click on the "export.txt" file and choose the option "Save Link As..."
5. Name the file and save it to your computer.
6. Create a new, blank Sheet in Google Sheets. Click on File > Import. Click on the "Upload" tab. Drag and drop the export.txt file to upload it to Google Sheets.
7. In the "Import file" popup, for "Import location" select "Replace spreadsheet," and for "Separator type" select "Tab." Click the "Import data" button.

Now you're ready to begin adding to and editing your metadata to make sure it has the fields required for CollectionBuilder to work.
Pull up the metadata template below to get started, and read through the rest of this page for field definitions and formatting advice.

## Metadata Template

The button below will take you to the CollectionBuilder-CONTENTdm metadata template. It's stored in Google Sheets for easy re-use (just "Make a Copy" via the File menu to get started).

[CONTENTdm CollectionBuilder Metadata Template](https://docs.google.com/spreadsheets/d/14iWUEoAJ6T9WDqlPnIHRN7M8-YgmMV4_bjFPVuSZ0yk/edit?usp=sharing){:.btn .btn-purple target="_blank" rel="noopener"}

---

## Required Fields for CollectionBuilder-CONTENTdm

Without values in the fields below, CollectionBuilder will not work properly.

### objectid:
- This is the field that CollectionBuilder uses to identify each object. This should be a unique string, all **lowercase** with no spaces or special characters as it will be used to form the item's URL. Underscores (`_`) and dashes (`-`) are okay; **slashes (`/`) should NOT be used in this field**.
- Example value: `coll002`

### cdmid:
- This is the unique identification number assigned to the item by CONTENTdm (the field titled "CONTENTdm number" in your exported metadata). For convenience, we generally make this correspond with the number in the item's objectid (ex. objectid: `coll002`, cdmid: `2`), but this correspondence is not necessary for CollectionBuilder to work.
- Example value: `142`

### title: 
- The title field is used to indicate the name of an item. This should be a short, descriptive set of words that identify the item. Each item may only have one title.
- Example value: `Haystack Rock`

### format: 
- This field indicates the item's media type. Since CollectionBuilder uses logic based on `format` to display objects, this is the most important field to ensure the interactive visualizations function correctly. If there are errors or anomalies, some pages will not work. The input for this field should be structured according to [MIME type](https://www.iana.org/assignments/media-types/media-types.xhtml){:target="_blank" rel="noopener"} standards, consisting of a type and a subtype concatenated with a slash (`/`) between them.
    - Image: `image/jpeg`
    - Document: `application/pdf`
    - Audio: `audio/mp3`
    - Video: `video/mp4`

If curating a collection of items from multiple CONTENTdm collections, the following field is required:

### collectionid:
- CB-CONTENTdm supports creating collections of items from single or multiple CONTENTdm collections. 
Knowing the correct CONTENTdm collection name for every item is necessary to retrieve the correct objects from the API and to set up the search.
- By default, the CONTENTdm collection ID (sometimes called "alias") is set in "_config.yml", as the value of `cdm-collection-id`. 
If all your items are from a single CDM collection, only this value is necessary. 
- If you have items from multiple CDM collections, add a column named `collectionid` to your metadata file.
Each item will have it's collection alias in this column, which will be used in all API calls.
If there is no `collectionid` value, the item will default to the value of `site.cdm-collection-id` (set in _config.yml).
The nav links to CDM search and database will be derived from unique values in `collectionid` column plus `site.cdm-collection-id`.
- Example value: `barstock`

### collectionid *(Only required if you are pulling in multiple CONTENTdm collections using the CollectionBuilder-CONTENTdm version)*:
- This is the collection alias assigned by a collection creator in CONTENTdm.
- Example Input: `archivalidaho`

### youtubeid (Only required if your collection contains YouTube videos):
- This is the unique string assigned to a video when it is uploaded to YouTube. An easy way to find this is to look at the url for your YouTube video. The ID will be the string attached to the end of this url: https://www.youtube.com/watch?v=
- Example value: `sHhk1eAgopU`

---

## Fields Required for Visualizations

CollectionBuilder uses these fields to generate contextual visualizations, including a map, timeline, and word clouds reflecting the frequency of subjects and locations in a collection.

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

{:.alert .alert-red}
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

{:.alert .alert-green}
*Note:* This field needs to be named **_'subject' (not 'subjects')_** for many default features in CollectionBuilder to work. Data in this field will create the word cloud that allows users to visualize the frequency of subjects used within the collection.

### location: 
- This field designates a geographic location(s) to which the item is tied. Much like the subject field, this field will build a tag cloud of the most used locations in your collection. See the [Locations](theme.html#locations-page) section for more information. Be sure to separate multiple location entries for a single record with a semicolon (`;`).
- Example value: `Pullman, Washington; Moscow, Idaho`

{:.alert .alert-green}
**If your metadata does not have map coordinates**, but you would like to experience CollectionBuilder's map visualization, we've created a [demo list of latitudes and longitudes](https://docs.google.com/spreadsheets/d/1eSj7zfthuc7-ntdnZLqNYETxVa5Z55YK8BPPao53-6w/edit?usp=sharing){:target='_blank' rel='noopener'} that you can add to your data just for practice."

---

## Optional Fields

The rest of the fields in the CollectionBuilder metadata template are not required for CollectionBuilder or its visualizations to work, but their use is encouraged to ensure a richly informative collection. These remaining fields are listed below, along with their respective definitions and examples.

{:.alert .alert-green}
CollectionBuilder can accommodate any field you include in your metadata once you customize your site. For example, you can display any field on item pages or on the Browse page. See the [Metadata](customize.html#config-metadata) and [Browse](customize.html#config-browse) customization sections for more information. "

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