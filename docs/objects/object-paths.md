---
title: Constructing Object Paths
parent: Objects
nav_order: 6
---

# Example Paths/Locations for CollectionBuilder-CSV

Example paths are given below for the following object types/locations:

- [External or Self-Hosted Objects](#example-paths-for-external-or-self-hosted-objects)
- [YouTube Objects](#path-for-youtube-objects)
- [Vimeo Objects](#path-for-vimeo-objects)
- [CONTENTdm Objects](#path-for-contentdm-objects)

---

## Example Paths for External or Self-Hosted Objects

See the [Object Derivatives]({{ '/objects/derivatives/' | relative_url }}) section for details of preparing a folder of image and PDF objects and generating derivatives using a Rake task.

Example values for the CB-CSV [metadata fields]({{ '/docs/objects/csv-objects/#object-location-metadata-fields' | relative_url }}) "object_location", "image_small", and "image_thumb" metadata fields might look like this:

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

---

## Path for YouTube Objects

YouTube video items are supported in Item pages via the `video` value for the "[display_template]({{ '/docs/metadata/csv_metadata/#display_template' | relative_url }})" metadata field. 
Provide the full YouTube video link in the "object_location" metadata field. 
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

---

## Path for Vimeo Objects

Vimeo video items are supported in Item pages via the `video` value for the "[display_template]({{ '/docs/metadata/csv_metadata/#display_template' | relative_url }})" metadata field.
Provide the full Vimeo video link in the "object_location" metadata field.

---

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