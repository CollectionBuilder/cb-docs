---
title: Objects for CSV
parent: Objects
nav_order: 2
---

# Collection Objects for CollectionBuilder-CSV

CollectionBuilder-CSV is designed for large, stand alone collections, and can be hosted on any basic static web server or platform.

CB-CSV's flexible style gives you the option to include a small and thumb image derivative or representation for each of your objects (and comes complete with a [Rake task]({{ '/docs/objects/derivatives/' | relative_url }}) to automate creating those derivatives!), in addition to providing full-sized objects for download.

Don't want to include derivatives/representations? 
No problem! 
A CB-CSV record works just fine with a single full-sized object (just like CB-GH) or no object at all.

## Object Guidelines for CollectionBuilder-CSV

- **Supported formats:** jpg, png, pdf, mp3 -- plus YouTube, Vimeo, and external links
- **File size:** the full size object can be any size you think your users might want to download. This might not be your full sized preservation file--generally, we try to provide very high quality objects to users, but balance that against the practicality of huge file sizes--most users don't want a 1GB tif or pdf!
- **Filenaming:** to avoid issues, please pay close attention to filenaming conventions! The filename should be:
    - all lowercase
    - no spaces
    - no special characters (underscores `_` are okay).

*Tip:* Your File Explorer / Finder might hide file extensions by default. 
Check your View settings to show extensions!

Before we get into the process for gathering your objects and creating derivatives, it's important that you understand how the CB-CSV template works with your objects:

## Object Location Metadata Fields

**The CB-CSV metadata CSV contains location information for each object**, which means the process for preparing objects for CB-CSV is very flexible, allowing you to combine and curate items from diverse sources.

In general, CB-CSV supports three files (full size, small, and thumb) associated with each record, via links added to the following metadata columns:

### object_location: 

- A path to a full-sized digital object of any format, or a link to an external resource that will be used by users as the full-sized file download.
- This could be any format and size you would like to provide to your users, or a link to external resource such as YouTube videos or a link to an article.
- The full-sized object may be hosted with the project, in an external location, or retrieved from an API.

### image_small: 

- A path to a web-quality image that will be used to represent the object on its Item page.
- For all Item types, the "image_small" value should be a jpeg approximately 800x800 px max.
- The small image may be hosted with the project, in an external location, or retrieved from an API.

### image_thumb: 

- A path to a web quality image in a fast, user friendly file size that will be used to represent the object on visualization pages--i.e. Home, Browse, Map, and Timeline.
- For all Item types, the "image_thumb" value should be a jpeg approximately 400x400 px max.
- The thumb image may be hosted with the project, in an external location, or retrieved from an API.

Check the [CSV Metadata]({{ '/docs/metadata/csv_metadata/' | relative_url }}) documentation for more information.

<div class="alert alert-purple" markdown="1">
**Note:**
Items are not *required* to have any corresponding objects.
In other words, you can leave "object_location", "image_small", and "image_thumb" blank, and your record will be a metadata-only record.

It's also okay to include a value for "object_location" but leave the "image_small" and "image_thumb" fields blank: objects without "image_small" or "image_thumb" values will be represented by icons in visualization pages based on their value for the "display_template" or "format" metadata field.
</div>

## Create Small and Thumb Derivatives

Small and thumb derivatives are not required for your collection to work, but they do make your collection's visualizations a lot more engaging. 

To create derivatives for your objects, first make sure that you've given all of your image and pdf objects appropriate [file names](#object-guidelines-for-collectionbuilder-csv), and then gather them in one folder on your computer.
Then, head over to the [Object Derivatives]({{ '/docs/objects/derivatives/' | relative_url }}) page to follow step-by-step instructions for creating derivatives using CB-CSV's built in ["generate_derivatives" Rake task]({{ '/docs/objects/derivatives/#generate-derivatives-rake-task' | relative_url }}).

Note that instead of using the Rake task, you can manually create your derivatives elsewhere using an image editing software of your choosing.
Be sure to follow the file specifications described in the [Derivatives]({{ '/docs/objects/derivatives/#create-small-and-thumb-derivatives' | relative_url }}) section of this site.

Items that are not images or PDFs may also have small and thumb images that you manually create. 
For example, an audio file might have an object_download of an MP3, but use an album cover to represent the item in image_small and image_thumb.

## Object Deployment

If there are objects and derivatives that you've prepared for your collection that aren't hosted externally, you'll need to find a place to host them.

Don't store these objects in your project's GitHub repository (i.e. don't commit your objects!). 
Git is not optimized for binary file storage and GitHub has size limits.
Instead, the object files can be deployed in any web accessible location: you can either put them in the "objects" folder within the generated website code, or anywhere else that you care to implement!

For example, here are some options for object file locations depending on your setup and stage of development:

- **Just Testing:** Keep the collection files in the "objects" folder in the project repository on your local machine. The files will *not* be committed to the repository, so they won't be available on GitHub. However, you will still be able to generate and test the site on your local machine.
- **Objects Deployed with Site:** Keep the collection files in the "objects" folder in the project repository on your local machine. When generating the site for deployment, Jekyll will copy the objects into the "_site" folder along with the rest of the site assets. Everything in the "_site" folder is copied to a static web server (via SFTP or file share method) for your live deployment.
- **Objects in External Location:** Prep your collection files, then move the objects to a static file hosting service (often provided by universities or purchased via a platform such as [Digital Ocean](https://www.digitalocean.com/) or [Reclaim Hosting](https://reclaimhosting.com/)). The objects are available at that location, e.g. `https://www.example.com/objects/newproject/`. For the collection website, you can deploy the site assets in a totally separate location without any objects, e.g. you set up a [GitHub Action]({{ '/docs/deploy/actions/' | relative_url }}) to build the CB-CSV project resulting in the website hosted at `https://exampleuser.github.io/newproject/'`. This has the advantage of being able to manage objects and html separately on platforms optimized for delivering each.

Please note that objects should be hosted at a secure HTTPS location for your final deployment.
Media at HTTP links are likely to be blocked by browser security defaults as [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content).

## Add Object Paths To Your Metadata

Now that you've located or created your objects and their derivatives, you'll need to add their locations (or "paths") to your [object_location]({{ '/docs/metadata/csv_metadata/#object_location' | relative_url }}), [image_small]({{ '/docs/metadata/csv_metadata/#image_small' | relative_url }}), and [image_thumb]({{ '/docs/metadata/csv_metadata/#image_thumb' | relative_url }}) metadata fields.
See the [CollectionBuilder-CSV Metadata]({{ '/docs/metadata/csv_metadata/#object-detail-fields-strongly-suggested' | relative_url }}) page for more details on each field, and view the [demo-metadata.csv](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/_data/demo-metadata.csv) (located in the "_data" folder in the CB-CSV project repository) for example paths for various object types.

When your collection contains multiple instances of the same object type hosted in the same location (say, five pdfs hosted on Digital Ocean, or 20 jpegs from a CONTENTdm collection), you can use "recipes" to pull together the values of the URL you will need to construct for the "object_location", "image_small", and "image_thumb" metadata fields for each object and its derivatives.

You will likely want to gather the values necessary for each recipe and use formulas in Google Sheets or OpenRefine to create the final links.

{:.alert .alert-red}
Need help figuring out paths for externally-hosted objects such as items from CONTENTdm, YouTube videos, etc.? 
View example paths and recipes on the [Constructing Object Paths]({{ '/docs/objects/object-paths/' | relative_url }}) page.
