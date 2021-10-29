---
title: Objects for CSV
parent: Objects
nav_order: 2
---

# Collection Objects for CollectionBuilder-CSV

CollectionBuilder-CSV is designed for large, stand alone collections self-hosted on any basic static web server or platform.

Since CollectionBuilder-CSV adds object location information into the metadata CSV, the process for preparing objects is very flexible. 
You can follow the workflows described for any of the other templates, or combine multiple approaches to curate items from diverse sources.

The important step is to write the information about where your objects and object derivatives are located into your [metadata fields]({{ '/docs/metadata/csv_metadata/' | relative_url }}).
In general, CB-CSV supports three files associated with each record via links added to the following metadata columns:

- `object_location`: path to the full-sized digital object of any format.
    - this could be any format and size you would like to provide to your users, or a link to external resource such as YouTube videos or a link to an article.
    - the object may be hosted with the project, in an external location, or retrieved from an API.
- `image_small`: path to a web-quality image used to represent objects on Item pages or in visualizations where a larger than thumb image would be useful.
    - for all Item types should be JPGs approximately 800x800 px max.
    - the image may be hosted with the project, in an external location, or retrieved from an API.
- `image_thumb`: path to a web quality image used to represent the object on visualization pages (i.e. Home, Browse, Map, and Timeline), in a fast, user friendly file size.
    - for all Item types should be JPGs approximately 400x400 px max.
    - the image may be hosted with the project, in an external location, or retrieved from an API.

Items are not required to have any corresponding objects (in which case they are metadata-only records)!
Items without `image_small` or `image_thumb` values will be represented by icons based on their `display_template` or `format` field in visualization pages.

Generally, the best approach for filling in the `object_location`, `image_small`, and `image_thumb` columns will be to use "recipes" to document the paths / locations for each group of object type in your collection.
You will likely want to gather the values necessary for each recipe in their own columns and use formulas in Google Sheets or OpenRefine to create the final links.

{:.alert .alert-yellow}
Example paths / locations are given for a variety of object types below.

-----

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
