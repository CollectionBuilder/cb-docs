---
title: Objects for CSV
parent: Objects
nav_order: 2
---

# Collection Objects for CollectionBuilder-CSV

CollectionBuilder-CSV is designed for large, stand alone collections, hosted on any basic static web server or platform.

CB-CSV's flexible style gives you the option to include a small and thumb image derivative or representation for each of your objects (and comes complete with a [Rake task]({{ '/objects/derivatives/#generate-derivatives-rake-task' | relative_url }}) to automate creating those derivatives!), in addition to providing full-sized objects for download.

Don't want to include derivatives/representations? 
No problem! 
A CB-CSV record works just fine with a single full-sized object as well (just like CB-GH).

## Object Guidelines for CSV

- **Supported formats:** jpg, png, pdf, mp3 -- plus YouTube, Vimeo, and external links, but you won't have objects for those!
- **File size:** the full size object can be any size you think your users might want to download. This might not be your full sized preservation file--generally, we try to provide very high quality objects to users, but balance that against the practicality of huge file sizes--most users don't want a 1GB TIF or PDF!
- **Filenaming:** to avoid issues, please pay close attention to filenaming conventions! The filename should be:
    - all lowercase
    - no spaces
    - no special characters (underscores (`_`) are okay.

*Tip:* Your File Explorer / Finder might hide file extensions by default. 
Check your View settings to show extensions!

Before we get into the process for gathering your objects and creating derivatives, it's important that you understand how the CB-CSV template works with your objects:

## Object Location is Key

**The CB-CSV metadata CSV contains location information for each object**, which means the process for preparing objects for CB-CSV is very flexible, allowing you to combine and curate items from diverse sources.

In general, CB-CSV supports three files (full size, small, and thumb) associated with each record, via links added to the following metadata columns (see [CSV Metadata]({{ '/docs/metadata/csv_metadata/' | relative_url }}) for more information):

### object_location: 
    - A path to a full-sized digital object of any format (will be used by users as a full-sized file download, or a link to an external resource).
    - This could be any format and size you would like to provide to your users, or a link to external resource such as YouTube videos or a link to an article.
    - The full-sized object may be hosted with the project, in an external location, or retrieved from an API.

### image_small: 
    - A path to a web-quality image (will be used to represent the objects on its Item page).
    - For all Item types, the "image_small" value should be a JPEG approximately 800x800 px max.
    - The small image may be hosted with the project, in an external location, or retrieved from an API.

### image_thumb: 
    - A path to a web quality image in a fast, user friendly file size (will be used to represent the object on visualization pages--i.e. Home, Browse, Map, and Timeline).
    - For all Item types, the "image_thumb" value should be a JPEG approximately 400x400 px max.
    - The thumb image may be hosted with the project, in an external location, or retrieved from an API.

{% capture note %}
**Note:**
Items are not *required* to have any corresponding objects--in other words, you can leave "object_location", "image_small", and "image_thumb" blank, and your record will be a metadata-only record.

It's also okay to include a value for "object_location" but leave the "image_small" and "image_thumb" fields blank: objects without "image_small" or "image_thumb" values will be represented by icons based on their "display_template" or "format" field in visualization pages.
{% endcapture %}

{% include feature/alert.html color="purple" text=note %}

## Creating Object Paths

Generally, the best approach for filling in the "object_location", "image_small", and "image_thumb" columns will be to document the paths / locations for each group of object type in your collection.

Think of the values that make up these paths as "recipes".
You will likely want to gather the values necessary for each recipe in their own columns and use formulas in Google Sheets or OpenRefine to create the final links.

{:.alert .alert-yellow}
Example paths / locations are given for a variety of object types below.

-----

This can be automated using the included Rake tasks ([see below](#generate-derivatives-rake-task)) or manually created using other software.

## Path for Stand Alone Objects

See [SA objects docs]({{ '/docs/objects/sa-objects/' | relative_url }}) for details of preparing a folder of image and PDF objects, and creating derivatives using our Rake task.

Once you have prepped your objects and decided where to deploy them, you will add their location to your metadata fields.
This is generally done by starting from a `filename` column in the metadata listing the full filename for each record.
From the `filename` column use formulas in Sheets or OpenRefine to create URLs pointing to the files.

For example:

- `object_location` 
    - for object in project: `/objects/demo_002.pdf`
    - for object externally hosted: `https://example-host.org/collection/demo_002.pdf`
    - Recipe: `https://example-host.org/collection/` + "filename"
- `image_small`
    - for object in project: `/objects/small/demo_002_sm.jpg`
    - for object externally hosted: `https://example-host.org/collection/small/demo_002_sm.jpg`
    - Recipe: `https://example-host.org/collection/small/` + "filename without extension" + `_sm.jpg`
- `image_thumb`
    - for object in project: `/objects/thumbs/demo_002_th.jpg`
    - for object externally hosted: `https://example-host.org/collection/thumbs/demo_002_th.jpg`
    - Recipe: `https://example-host.org/collection/thumbs/` + "filename without extension" + `_th.jpg`

------------------

## Path for CONTENTdm Objects

The CONTENTdm API can be used to retrieve display images and file downloads from any CONTENTdm repository. 
To use the API you will need to know the "Collection Alias" and "CONTENTdm number" of each object, see our [CDM metadata docs]({{ '/docs/metadata/cdm_metadata/' | relative_url }}) for more info on finding that information.

Once you have columns in your metadata for "Collection Alias" and "CONTENTdm number" you can use formulas in Sheets or OpenRefine based on the CDM APIs to fill in `object_location`, `image_small`, and `image_thumb` columns for different item types.
In general, it best to use IIIF for image objects and CDM "utils" API for non-image items.

- [CONTENTdm API reference](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/CONTENTdm_API)
- [CONTENTdm IIIF API reference](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/IIIF_API_reference)
- [IIIF Image API 2.1.1](https://iiif.io/api/image/2.1/)

### CDM utls

This API is unique to CONTENTdm and used to get image and file downloads from the repository.
CollectionBuilder uses these calls:

- [GetThumbnail](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference/getthumbnail.en.html#par_text_4c0f) - will provide a thumb for any object in the repository. `/utils/getthumbnail/collection/alias/id/pointer` 
- [GetFile](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference/getfile.en.html#par_text_6545) - provides a download link for PDF objects, `/utils/getfile/collection/alias/id/pointer/filename/name`
- [GetStream](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference/getstream.en.html#par_text_2d39) - provides download and playable link for video/audio objects, `/utils/getstream/collection/alias/id/pointer`

### CDM IIIF 

CONTENTdm supports IIIF API for images only (i.e. won't work with an object that is a PDF file or video, etc).

IIIF standard looks like: 
`{scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}`

Which looks like this in CDM: 
`https://cdm17254.contentdm.oclc.org/digital/iiif/psychiana/548/full/pct:50/0/default.jpg`

Get max size:
`https://cdm17254.contentdm.oclc.org/digital/iiif/psychiana/548/full/max/0/default.jpg`

Get image info example: `https://cdm17254.contentdm.oclc.org/digital/iiif/psychiana/548/info.json`

### CDM IIIF Issues 

CONTENTdm implementation of IIIF has some limitations:

- using the Size parameter `!w,h` does not work, instead returns `max` instead.
- using the Size parameter `pct:` with less than 10% does not work, and will return an error message.
- if either pixel size used in Size parameter `w,h` is larger than actual dimension of the full image, it will return an error message.

Given these limits, we have used `pct:` in most API calls, since it is the least likely to break. 
However, this means that if the originals in CDM are abnormally large or small, you will want to adjust the % used in the theme.yml. 
With collections that have multiple scan qualities, this may still result in inconsistent image sizes in the visualizations and many require experimentation with the API to resolve. 

---------------

## Path for YouTube Objects

YouTube video items are supported in Item pages via the `video` "display_template". 
Provide the full YouTube video link in "object_location" field. 
Use the API recipes below to fill in the "image_small" and "image_thumb" fields if desired.

The "image_small" and "image_thumb" fields can be filled in using YouTube's image API.
This API is not well documented by Google, but is used by many sites and JS libraries.

Basically, you can get four sizes of the default thumbnail, or four smaller thumbnails from different points in the video.
You can use the domain "img.youtube.com" or "i3.ytimg.com"

Default images:

- thumb 120x90, https://img.youtube.com/vi/`[youtubeid]`/default.jpg
- medium quality 320x180, https://img.youtube.com/vi/`[youtubeid]`/mqdefault.jpg
- high quality 480x360, https://img.youtube.com/vi/`[youtubeid]`/hqdefault.jpg 
- SD 640x480 (not available for all videos), https://img.youtube.com/vi/`[youtubeid]`/sddefault.jpg
- max quality 1280×720 (or 1920x1080?, not available for all videos), https://img.youtube.com/vi/`[youtubeid]`/maxresdefault.jpg 

Auto thumbs:

- default thumb, 480x360, https://img.youtube.com/vi/`[youtubeid]`/0.jpg 
- alternate 120x90, https://img.youtube.com/vi/`[youtubeid]`/1.jpg 
- alternate 120x90, https://img.youtube.com/vi/`[youtubeid]`/2.jpg 
- alternate 120x90, https://img.youtube.com/vi/`[youtubeid]`/3.jpg

For more control, you can use [YouTube Data API](https://developers.google.com/youtube/v3/), but it requires a key to access.

----------------

## Path for Vimeo Objects

Vimeo video items are supported in Item pages via the `video` "display_template".
Provide the full Vimeo video link in "object_location" field. 
