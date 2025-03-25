---
title: Objects for CSV
parent: Objects
nav_order: 2
---

# Collection Objects for CollectionBuilder-CSV

CollectionBuilder-CSV is a highly customizable base designed for large, stand alone collections, ready for a wide variety of item types.
Each item in the collection can optionally have a full sized object, plus a small and thumb image derivative to represent the item in visualizations.
The template comes with a [Rake task]({{ '/docs/objects/derivatives/' | relative_url }}) to automate creating derivatives for PDF and image items.

The object files for CB-CSV collections are generally **not** committed directly into the project repository--the files are usually managed separately to avoid the drawbacks of tracking binary files in Git and the size limitations on GitHub.
Instead, the **CB-CSV metadata contains location information for each object and derivative** allowing you to flexibly combine and curate items from diverse sources.
The files may be hosted with the collection site, in an external location, or retrieved from an API.

For example, you could:

- build a curated exhibit featuring items from an existing digital repository--using the platform's API, such as IIIF, you reference derivative images and objects directly in the repository (i.e. you don't need to work with object files, just the URLs to access them!). 
- prepare a folder of image files using the Rake task and upload them to your static hosting service--then create a CB-CSV project on GitHub that references that location (i.e. the objects don't need to be in the same location as the collection site!).
- commit a set of objects directly to your GitHub project and use GitHub Actions to process and build the collection site (i.e. you can still use the ease of GitHub like CB-GH, but there will be size limitations!). 

## Object Guidelines for CollectionBuilder-CSV

- **Supported formats:** generally jpg, png, pdf, and mp3, plus YouTube, Vimeo, and external links have built in [display_template]({{ '/docs/metadata/csv_metadata/#display_template' | relative_url }}) options. Many other file types can be supported with basic customization. Image derivatives should usually be web quality jpg or png for wide browser support.
- **File size:** the full size object can be any size you think your users might want to download. This might not be your full sized preservation file--generally, we try to provide very high quality objects to users, but balance that against the practicality of huge file sizes--most users don't want a 1GB tif or pdf! File size will also depend on where you host them. For example, if hosting the objects directly on GitHub Pages, you will want to keep your entire "objects" folder to under about 500MB. 
- **Filenaming:** to avoid issues, please pay close attention to filenaming conventions! The filenames for all objects and derivatives should be:
    - all lowercase
    - no spaces
    - no special characters (underscores `_` are okay)

*Tip:* Your File Explorer / Finder might hide file extensions by default. 
Check your View settings to show extensions!

## Object Location Metadata Fields

Before we get into the process for gathering your objects and creating derivatives, it's important to understand how the CB-CSV metadata template works and how the files will be used on the collection site.

The CB-CSV metadata CSV contains three special fields recording the [location for each object and its derivatives]({{ '/docs/metadata/csv_metadata/#object-location-fields' | relative_url }})--i.e. CB-CSV supports three files associated with each record (full size object, small image, and thumb image), via links added to the following metadata columns:

### object_location: 

- The full-sized digital object of any format and size you would like to provide to your users. In some cases this may be a link to an external resource such as YouTube videos, a link to an article, or a IIIF manifest.
- Depending on the Item's display_template, this file/link will populate the "Download" button, image gallery, video viewer, or other appropriate feature.

### image_small: 

- Image used to represent the object on its Item page. It is also used in some feature includes.
- For all Item types, the "image_small" value should be a jpeg approximately 800px wide web-quality image. 
- The size guideline is based on the max natural width used in the default template--you may need larger or smaller size if you customize layouts. In some cases items with odd aspect ratios may need customized sizes or cropping (e.g. long skinny newspaper clippings or wide narrow panoramas).

### image_thumb: 

- Image used to represent the object in cards on visualization pages--i.e. Home, Browse, Map, and Timeline.
- For all Item types, the "image_thumb" value should be a jpeg approximately 450px wide, in a fast, user friendly file size.
- The size guideline is based on the max natural width used in the default template--you may need larger or smaller size if you customize layouts. In some cases items with odd aspect ratios may need customized sizes or cropping (e.g. long skinny newspaper clippings or wide narrow panoramas).

For each of these fields, the file may be hosted with the project, in an external location, or retrieved from an API (i.e. they don't all need to be in your project's "objects" folder!)--the value will be the full path, URL, or API recipe to retrieve the file.
Check the [CSV Metadata]({{ '/docs/metadata/csv_metadata/' | relative_url }}) documentation for more information.

<div class="alert alert-purple" markdown="1">
**Note:**
Items are not *required* to have any corresponding objects.
In other words, you can leave "object_location", "image_small", and "image_thumb" blank, and your record will be a metadata-only record.

It's also okay to include a value for "object_location" but leave the "image_small" and "image_thumb" fields blank: objects without "image_small" or "image_thumb" values will be represented by icons in visualization pages based on their value for the "display_template" or "format" metadata field.
</div>

## Create Small and Thumb Derivatives

Small and thumb derivatives are not required for your collection to work, but they do make your collection's visualizations a lot more engaging. 

If you are working with a folder of image and pdf objects, CB-CSV includes a Rake task to help automate creating derivatives.
First make sure that you've given all of your objects appropriate [file names](#object-guidelines-for-collectionbuilder-csv), and then gather them in one folder on your computer.
Then, head over to the [Object Derivatives]({{ '/docs/objects/derivatives/' | relative_url }}) page to follow step-by-step instructions for creating derivatives using CB's ["generate_derivatives" task]({{ '/docs/objects/derivatives/#generate-derivatives-rake-task' | relative_url }}).

Instead of using the Rake task, you can manually create your derivatives elsewhere using an image editing software of your choosing.
Be sure to follow the approximate image file sizes described above.
Items that are not images or PDFs can also have small and thumb images that you manually create following the same conventions. 
For example, an audio file might have an object_download of an MP3, but use an album cover jpg to represent the item in image_small and image_thumb.

If your objects are hosted in another platform, rather than processing files you will be doing metadata work figuring out the correct APIs or URL to add to the location fields. 

## Object Hosting

If there are objects and derivatives that you've prepared for your collection that aren't hosted externally, you'll need to find a place to host them.

Generally, you don't want to store these objects in your project's GitHub repository (i.e. don't commit your objects!). 
Git is not optimized for binary file storage and GitHub has size limits.

Instead, the object files can be deployed in any web accessible location: you can either put them in the "objects" folder within the generated website code, or anywhere else that you care to implement!

For example, here are some options for object file locations depending on your setup and stage of development:

- **Just Testing:** Keep the collection files in the "objects" folder in the project repository on your local machine. The files will *not* be committed to the repository, so they won't be available on GitHub. However, you will still be able to generate and test the site on your local machine.
- **Objects Deployed with Site:** Keep the collection files in the "objects" folder in the project repository on your local machine. When generating the site for deployment, Jekyll will copy the objects into the "_site" folder along with the rest of the site assets. Everything in the "_site" folder is copied to a static web server (via SFTP or file share method) for your live deployment.
- **Objects in External Location:** Prep your collection files, then move the objects to a static file hosting service (often provided by universities or purchased via a platform such as [Digital Ocean](https://www.digitalocean.com/) or [Reclaim Hosting](https://reclaimhosting.com/)). The objects are available at that location, e.g. `https://www.example.com/objects/newproject/`. For the collection website, you can deploy the site assets in a totally separate location without any objects, e.g. you set up a [GitHub Action]({{ '/docs/deploy/actions/' | relative_url }}) to build the CB-CSV project resulting in the website hosted at `https://exampleuser.github.io/newproject/'`. This has the advantage of being able to manage objects and html separately on platforms optimized for delivering each.
- **Objects are All External Links/APIs or Records:** congrats, you don't have to worry about object files at all, all this talk about objects is just a distraction! You can manually build and deploy your collection website, or use an automated build service such as GitHub Actions.
- **Objects on GitHub:** It is possible to commit your "objects" folder and host them directly on GitHub (like CB-GH). Please be aware that GitHub repositories have soft limits on total size of approximately 1 GB--a good rule of thumb is to keep your "objects" folder less than 500 MB. **By default the CB-CSV "objects" folder is gitignored!** You will have to un-ignore the folder to commit your object files (see below).

Please note that objects should be hosted at a secure HTTPS location for your final deployment.
Media at HTTP links are likely to be blocked by browser security defaults as [mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content).

<div class="alert alert-purple" markdown="1">
### Un-Ignoring the "objects" Folder 

By default the "objects" folder is [gitignored]({{ '/docs/repository/gitworkflow/#gitignore' | relative_url }}) in the CB-CSV template (since objects are usually managed separately to avoid the drawbacks of tracking binary files in Git and the size limitations on GitHub). 
To commit your object files directly into your GitHub repository you will need to edit your project's ".gitignore" file. 

In your project repository, open ".gitignore" in your editor (VS Code), and look for the last line which reads `objects/`. 
Delete this line (or comment out by adding a `#` in front), save, and commit the change.

Your "objects" folder will now be tracked by Git.
Any changes you have made (or files added) will now appear in your Git changes ready to commit!

</div>

## Add Object Paths To Your Metadata

Now that you've located or created your objects and their derivatives, you'll need to add their locations (or "paths") to your [object_location]({{ '/docs/metadata/csv_metadata/#object_location' | relative_url }}), [image_small]({{ '/docs/metadata/csv_metadata/#image_small' | relative_url }}), and [image_thumb]({{ '/docs/metadata/csv_metadata/#image_thumb' | relative_url }}) metadata fields.
See the [CollectionBuilder-CSV Metadata]({{ '/docs/metadata/csv_metadata/#object-detail-fields-strongly-suggested' | relative_url }}) page for more details on each field, and view the [demo-metadata.csv](https://github.com/CollectionBuilder/collectionbuilder-csv/blob/main/_data/demo-metadata.csv) (located in the "_data" folder in the CB-CSV project repository) for example paths for various object types.

When your collection contains multiple instances of the same object type hosted in the same location (say, five pdfs hosted on Digital Ocean, or 20 jpegs from a CONTENTdm collection), you can use "recipes" to pull together the values of the URL you will need to construct for the "object_location", "image_small", and "image_thumb" metadata fields for each object and its derivatives.

You will likely want to gather the values necessary for each recipe and use formulas in Google Sheets or OpenRefine to create the final links.

{:.alert .alert-red}
Need help figuring out paths for externally-hosted objects such as items from CONTENTdm, YouTube videos, etc.? 
View example paths and recipes on the [Constructing Object Paths]({{ '/docs/metadata/object-paths/' | relative_url }}) page.
