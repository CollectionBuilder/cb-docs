---
title: Recipes for CSV Object Locations 
# Constructing Object Paths
parent: Metadata
nav_order: 9
---

# Recipes for Generating CollectionBuilder-CSV Object Location Fields

The metadata CSV for CollectionBuild-CSV projects contains three [Object Location Fields]({{ '/docs/metadata/csv_metadata/#object-location-fields' | relative_url }}) ("object_location", "image_small", and "image_thumb") that are used to add downloads and display images of the items.
These fields can often be filled using formulas while working on your metadata spreadsheet, taking advantage of external APIs or internal patterns. 

This section presents example recipes for figuring out the fields for a few common items types / locations:

- [Self-Hosted Objects](#example-paths-for-external-or-self-hosted-objects)
- [YouTube Objects](#path-for-youtube-objects)
- [Vimeo Objects](#path-for-vimeo-objects)
- [IIIF Images](#path-for-iiif-images)
- [Internet Archive Objects](#path-for-internet-archive-objects)
- [CONTENTdm Objects](#path-for-contentdm-objects)

------

## Example Paths for Self-Hosted Objects

See the [Object Derivatives]({{ '/docs/objects/derivatives/' | relative_url }}) section for details of preparing a folder of image and PDF objects and generating derivatives using a Rake task.
Following the conventions outlined will allow you to figure out where objects and derivatives should be located. 

If your are hosting your objects inside your project repository (i.e. in the "objects" folder), you can use the relative path. 
If you are hosting your objects in an external folder (i.e. in separate server location), you will use the full URL to that location. 
For example:

- "object_location"
    - for object in project: `/objects/demo_002.pdf`
    - for object externally hosted: `https://example-host.org/collection/demo_002.pdf`
    - Recipe: `https://example-host.org/collection/` + "filename"
- "image_small"
    - for object in project: `/objects/small/demo_002_sm.jpg`
    - for object externally hosted: `https://example-host.org/collection/small/demo_002_sm.jpg`
    - Recipe: `https://example-host.org/collection/small/` + "filename without extension" + `_sm.jpg`
- "image_thumb"
    - for object in project: `/objects/thumbs/demo_002_th.jpg`
    - for object externally hosted: `https://example-host.org/collection/thumbs/demo_002_th.jpg`
    - Recipe: `https://example-host.org/collection/thumbs/` + "filename without extension" + `_th.jpg`

------

## Path for YouTube Objects

YouTube video items are supported in Item pages via the `video` value for the [display_template]({{ '/docs/metadata/csv_metadata/#display_template' | relative_url }}) metadata field. 
Provide the full YouTube video link in the "object_location" metadata field. 
Use the API recipes below to fill in the "image_small" and "image_thumb" fields if desired.

The "image_small" and "image_thumb" fields can be filled in using YouTube's image API.
This API is not well documented by Google, but is used by many sites and JS libraries--check the details below.

For most CB collections the recipes will look like:

- "object_location"
    - the full YouTube video link
    - Recipe: `https://youtu.be/` + "youtubeid"
    - Example: `https://youtu.be/CVXQ3X6Q8oU`
- "image_small" 
    - the max quality youtube image api
    - Recipe: `https://img.youtube.com/vi/` + "youtubeid" + `/maxresdefault.jpg`
    - Example: `https://img.youtube.com/vi/CVXQ3X6Q8oU/maxresdefault.jpg`
- "image_thumb" = high quality youtube image api
    - Recipe: `https://img.youtube.com/vi/` + "youtubeid" + `/hqdefault.jpg`
    - Example: `https://img.youtube.com/vi/CVXQ3X6Q8oU/hqdefault.jpg `

### YouTube Image API 

Below is more information about the YouTube image API incase the recipe suggestions above do not work for your collection.
Keep in mind you can also manually create your own derivative images for the videos (using screenshots or exports) if the auto generated YouTube options don't meet your needs.

Basically, you can get four sizes of the default thumbnail, or four smaller thumbnails from different points in the video.
You can use the domain "img.youtube.com" or "i3.ytimg.com".
Replace `[youtubeid]` with the id of your video in these recipes.

Default images:

- thumb 120x90, `https://img.youtube.com/vi/[youtubeid]/default.jpg`
- medium quality 320x180, `https://img.youtube.com/vi/[youtubeid]/mqdefault.jpg`
- high quality 480x360, `https://img.youtube.com/vi/[youtubeid]/hqdefault.jpg`
- SD 640x480 (not available for all videos), `https://img.youtube.com/vi/[youtubeid]/sddefault.jpg`
- max quality 1280×720 (or 1920x1080?, not available for all videos), `https://img.youtube.com/vi/[youtubeid]/maxresdefault.jpg`

Auto thumbs:

- default thumb, 480x360, `https://img.youtube.com/vi/[youtubeid]/0.jpg`
- alternate 120x90, `https://img.youtube.com/vi/[youtubeid]/1.jpg`
- alternate 120x90, `https://img.youtube.com/vi/[youtubeid]/2.jpg`
- alternate 120x90, `https://img.youtube.com/vi/[youtubeid]/3.jpg`

For more control, you can use [YouTube Data API](https://developers.google.com/youtube/v3/), but it requires a key to access.

------

## Path for Vimeo Objects

Vimeo video items are supported in Item pages via the `video` value for the [display_template]({{ '/docs/metadata/csv_metadata/#display_template' | relative_url }}) metadata field.
Provide the full Vimeo video link in the "object_location" metadata field.

Vimeo does not have a documented thumbnail API. 
One option is to create screenshots to use as derivative images--if image_thumb is left blank, the item will be represented by an video icon.

------

## Path for IIIF Images

Many repositories and image servers support the [IIIF Image API](https://iiif.io/api/image/3.0/) which provides a standardized way to retrieve images of various sizes using URLs.
You can use the IIIF recipes to fill in the "object_location", "image_small", and "image_thumb" for your collection Items.

To use the IIIF API you will need to know the base url for your server and the image identifiers for your items.
The base url often contains a domain and potentially some prefixes to denote the service point. 
For example, the Internet Archive IIIF base url is `https://iiif.archive.org/image/iiif/3/`.
Image identifiers are internal unique ids that you will need to figure out from the system.

IIIF image requests follow the pattern:
`https://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}`.

For the purposes of CB, in most cases the region = `full`, rotation = `0`, quality = `default`, and format = `.jpg`.
Only the size option will change for "object_location", "image_small", and "image_thumb":

- "object_location" 
    - full sized image 
    - Recipe: baseurl + identifier + `/full/max/0/default.jpg`
    - Example: `https://iiif.archive.org/image/iiif/3/mma_wheat_field_with_cypresses_436535%2f436535.jpg/full/max/0/default.jpg`
- "image_small"
    - 800px width
    - Recipe: baseurl + identifier + `/full/800,/0/default.jpg`
    - Example: `https://iiif.archive.org/image/iiif/3/mma_wheat_field_with_cypresses_436535%2f436535.jpg/full/800,/0/default.jpg`
- "image_thumb"
    - 450px width 
    - Recipe: baseurl + identifier + `/full/450,/0/default.jpg`
    - Example: `https://iiif.archive.org/image/iiif/3/mma_wheat_field_with_cypresses_436535%2f436535.jpg/full/450,/0/default.jpg`

Issues can come up if the original full sized image is smaller than the requested size. 
In cases where the image is smaller than 450 pixels wide, you will likely want to use the `max` size for all image options.
Alternatively, most servers support adding `^` to the size to allow up scaling the image, e.g. `/^450,/`, but keep in mind the image will likely be blurry.

Despite being a standard, a lot of IIIF servers have quirks!
Two common options with slightly different details, Internet Archive and CONTENTdm, are described below.

### IIIF Viewer

In some cases you may want to display images in a IIIF viewer rather than the default "image" display_template.

To use the viewer, you will need the full url to the "manifest.json" file for the item, which will fill the "object_location" field.
The recipe usually follows the pattern: 

- "object_location"
    - URL to IIIF manifest.json
    - Recipe: base url + identifier + `/manifest.json`
    - Example: `https://iiif.archive.org/iiif/3/aladoren00newbuoft/manifest.json`

You will still want to figure out appropriate derivatives for "image_small" and "image_thumb" using the IIIF recipes above or manually created images.

With the manifest.json url in "object_location", you will then create a new display_template that uses a IIIF viewer to display the items (or modify the default "image" display_template).
CB has an include with [Universal Viewer](https://github.com/UniversalViewer/universalviewer) set up to use in this context, "_includes/item/iiif-manifest-universal-viewer.html".

To set up a custom display_template, create a new file such as "_layouts/item/iiif_image.html" by copying "_layouts/item/image.html" (or if all your "image" items are set up with a manifest.json, edit "_layouts/item/image.html").
In the file, change the line:

`{% raw %}{% include item/image-gallery.html %}{% endraw %}`

to to use the iiif-manifest-universal-viewer include instead:

`{% raw %}{% include item/iiif-manifest-universal-viewer.html %}{% endraw %}`

Note: Universal Viewer will work with manifest.json loaded from IA and other sources set up for broad access.
However, for many other servers, attempting to load a remote manifest this will trigger a CORS issue and nothing will load.
A potential work around is to download the manifests, rename, and put them directly in your project to avoid CORS.
You would then reference the local copy of the manifest in "object_location", e.g. `/objects/example.json`.

------

## Path for Internet Archive Objects

[Internet Archive](https://archive.org/) image items are accessible via standard IIIF api.
Check the [IA IIIF documentation](https://iiif.archive.org/iiif/documentation) for full details.
This works well for adding image and book items into a CB collection without needing to store any objects in your project.
You can upload your items at IA or curate existing IA items for your exhibit.
Since IA's interface isn't great for browsing and you can not customize item pages, using CB to provide context for a curated collection is a great option.

### Single Image Items

For single image items following the standard CB set up, you will use the IIIF recipes to create image URLs for your "object_location", "image_small", and "image_thumb" fields. 
To use the recipes you will need the image identifier--this is a bit tricky because you will need the item id plus the individual filename to create the identifier for IIIF.

- **ID:** 
    - IA item id is the last part of the item's URL. 
    - Example: for URL "https://archive.org/details/mma_wheat_field_with_cypresses_436535" the id is `mma_wheat_field_with_cypresses_436535`
- **Filename:** 
    - The filename can be found by checking the "Download Options" box on the item's page. Click "Show all" option. This will list various files. Look for the main JPG, which might have a strange name. You can look at the filename as listed in the downloads or copy the download link to get the name.
    - Example: visiting the [example item's download page](https://archive.org/download/mma_wheat_field_with_cypresses_436535) we can see the filename is `436535.jpg`.
    - You can use this method to reference individual images from a book / multiple image items. Looking at the download files, the images will be in a zip folder (generally look for the JP2 version). You will separate each level of folders shown in the downloads by an escaped slash `%2f`.
    - Example: to get the cover of this [book item](https://archive.org/details/aladoren00newbuoft), the filename is `%2faladoren00newbuoft_jp2.zip%2faladoren00newbuoft_jp2%2faladoren00newbuoft_0001.jp2` (a zip file, then a folder, then the filename). Generally, it will be easier to get this info from the manifest.json!
    - *Alternatively,* you can find the IIIF identifier by checking the "info.json" for an item following the pattern `https://iiif.archive.org/iiif/` + item id + `/info.json`. This json will have a field "@id" listed, with the full identifier following the "https://iiif.archive.org/image/iiif/2/" url. Note, "info.json" is only available for single image items!
    - Example: `https://iiif.archive.org/iiif/mma_wheat_field_with_cypresses_436535/info.json` 
- **Identifier:** 
    - The identifier for IIIF will be the ID and Filename separated by an escaped slash `%2f`. You will use this value in the IIIF recipes.
    - Example: `mma_wheat_field_with_cypresses_436535%2f436535.jpg`

Once you have the identifier, you can use standard IIIF recipes to create urls that will retrieve appropriately sized images:

- "object_location" 
    - full sized image 
    - Recipe: `https://iiif.archive.org/image/iiif/3/` + identifier + `/full/max/0/default.jpg`
    - Example: `https://iiif.archive.org/image/iiif/3/mma_wheat_field_with_cypresses_436535%2f436535.jpg/full/max/0/default.jpg`
- "image_small"
    - 800px width
    - Recipe: `https://iiif.archive.org/image/iiif/3/` + identifier + `/full/800,/0/default.jpg`
    - Example: `https://iiif.archive.org/image/iiif/3/mma_wheat_field_with_cypresses_436535%2f436535.jpg/full/800,/0/default.jpg`
- "image_thumb"
    - 450px width 
    - Recipe: `https://iiif.archive.org/image/iiif/3/` + identifier + `/full/450,/0/default.jpg`
    - Example: `https://iiif.archive.org/image/iiif/3/mma_wheat_field_with_cypresses_436535%2f436535.jpg/full/450,/0/default.jpg`

### IA Embed or IIIF Viewer for Books and Images

Rather than using CB's default "image" display_template for IA items, you can display items using a IA embed or IIIF viewer.

For book, pdf, video, or audio items from Internet Archive it is easiest to use the embed option.
This is available in ["_includes/item/ia-embed.html"](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/_includes/item/ia-embed.html).
For "object_location" you will use the IA item page url, then create a custom display_temple using the ia-embed include.

Alternatively, for single image, multi-image, or book items, it is possible to use the IIIF "manifest.json" to display the item in a IIIF viewer.
For "object_location" you will use the full url to the "manifest.json" file, then create a custom display_template using the iiif-manifest-universal-viewer include (see in IIIF section above).
The recipe follows the same pattern for all item types:

- "object_location"
    - URL to IIIF manifest.json
    - Recipe: `https://iiif.archive.org/iiif/3/` + item id + `/manifest.json`
    - Example: for book item page at "https://archive.org/details/aladoren00newbuoft", the IIIF manifest will be `https://iiif.archive.org/iiif/3/aladoren00newbuoft/manifest.json`

You will still want to figure out appropriate derivatives for "image_small" and "image_thumb" using the IIIF recipes above or manually created images.

------

## Path for CONTENTdm Objects

The CONTENTdm API can be used to retrieve display images and file downloads from any CONTENTdm repository. 
To use the API you will need to know the "Collection Alias" and "CONTENTdm number" of each object:

- **Collection Alias**
    - a path assigned by CONTENTdm and can be found in CONTENTdm Admin on the Collections > Profile page, or by looking at the URL of the collection on the web. 
    - Example: "https://cdm17254.contentdm.oclc.org/digital/collection/ui_ep/search" the collection alias is given after "/collection/", so would be `ui_ep`.
- **CONTENTdm number**
    - Individual identifier for each item in a collection. The values for *CONTENTdm number* are included in your metadata by default when you export your collection's metadata from CONTENTdm.
    - Example: `1`

Once you have columns in your metadata for "Collection Alias" and "CONTENTdm number" you can use formulas in Sheets or OpenRefine based on the CDM APIs to fill in "object_location", "image_small", and "image_thumb" columns for different item types.
In general, it is best to use IIIF for image objects and CDM "utils" API for non-image items.

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
