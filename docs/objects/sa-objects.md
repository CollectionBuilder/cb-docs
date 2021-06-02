---
title: Objects for SA
parent: Objects
nav_order: 3
---

# Collection Objects for CollectionBuilder-SA

CollectionBuilder-SA is designed for large, stand alone collections self-hosted on any basic static web server or platform.
The approach is similar to CollectionBuilder-GH, but is more robust and goes beyond the limitations of hosting on GitHub Pages.

CB-SA requires that you generate a thumb and small image derivative or representation for each object in your collection (for all item formats), in additional to providing the full sized object for download.
This can be automated using the included Rake tasks ([see below](#generate-derivatives-rake-task)) or manually created using other software.

It is important to note that collection object files will **not** be committed into your project (thus not stored on GitHub). 
Once your objects are prepared you will deploy them to the web along side your static site or on an external platform.

## Prepare Objects Directory 

The first step is to gather your collection's full sized digital objects in one folder and get them organized.

### Object File Guidelines for SA

- **Supported formats:** tif, jpg, png, pdf, mp3, mp4 -- plus YouTube, but you won't have objects for those!
- **File size:** the full size object can be any size you think your users might want to download. This might not be your full sized preservation file--generally, we try to provide very high quality objects to users, but balance that against the practicality of huge file sizes--most users don't want a 1GB TIF or PDF!
- **Filenaming:** to avoid issues, please pay close attention to filenaming conventions! You will use the exact filenames to populate the "filename" field of your collection metadata. For ease of use, the base filename (i.e. with out extension) should match the "objectid" used in the metadata. The filename should be:
    - all lowercase
    - no spaces
    - no special characters (underscores (`_`) are okay.

### Object Derivatives

Once your full sized digital objects are organized, you will need to prepare display derivatives for every item.
This process can be automated for TIF, JPG, PNG, and PDF files using the [Rake task](#generate-derivatives-rake-task).

Each collection object will have a "small" and "thumbs" JPG image for display on the collection web pages. 
The full sized and derivative files will be organized inside your "objects" folder:

- **"objects/"** - The root of the folder should contain the full sized object files. These files will be available for users to download. 
- **"objects/small"** - The folder must contain a folder named "small" that contains a web friendly small sized .jpg image representation of every object. This image is used on Item pages to provide a quality preview of the full sized object.
    - use the naming convention [base filename] + `_sm.jpg`.
    - should be approximately 800x800 px max.
- **"objects/thumbs"** - The folder must contain a folder named "thumbs" that contains a thumb sized .jpg image representation of every object. This image is used through out the CB visualization pages to provide a small preview of the object.
    - use the naming convention [base filename] + `_th.jpg`. 
    - should be approximately 400x400 px max.

For example, if you have an collection item file "example_document1.pdf", you will end up with these files in your objects:

- "objects/example_document1.pdf"
- "objects/small/example_document1_sm.jpg"
- "objects/thumbs/example_document1_th.jpg"

## Generate Derivatives Rake Task

All these details sound pretty overwhelming--luckily this prep work can be automated!
[Rake](https://github.com/ruby/rake) is a automation tool written in Ruby. 
It is a standard part of all Ruby installs, so if you are using Jekyll, you have it installed already.

CB-SA's `generate_derivatives` task, automates creating a small and thumb image from all images and PDFs contained within the "objects/" directory in your project repository. 
It outputs the derivatives to "objects/small" and "objects/thumbs" following the naming convention.

Before using the command, you will need to [install ImageMagick and Ghostscript]({{ '/docs/software/optional/' | relative_url }}) on your local machine.

Once the required software is installed, follow these steps to generate derivative images:

1. Place all your collection files in the "objects" directory. Ensure all the filenames are good!
2. Open a terminal in your project repository. If using VS Code with the project folder open, open the integrated terminal ``Ctrl + ` ``. Otherwise, open a normal terminal window and navigate to your project repository folder (use Git Bash on Windows, Terminal on Mac and Linux)
3. Type the command `rake generate_derivatives`
4. Wait! Generating derivatives might take awhile if you are working on a large collection. Check the terminal for messages from the task--it will alert you about any errors or files skipped. When the task is complete, your Terminal's command prompt will return.
5. Scroll up in your terminal window to check for any errors. 
6. Test your site with `bundle exec jekyll s`!

Once `generate_derivatives` has processed your files, you can optionally deploy your "objects" directory to an external location, i.e. copy the complete folder contents over to a file server or platform.
If you do, update your ["_config.yml"]({{ '/docs/config/collection/#objects' | relative_url }}) to point at the external location!

The "generate_derivatives" command can be further customized with several options if desired--check "docs/rake-tasks.md" in your repository for details.

*Tip:* on Linux if you install ImageMagick from a repository, you will probably have "legacy" ImageMagick 6.
To avoid errors, you will need to give an additional configuration option to change the ImageMagick command:
`rake generate_derivatives[,,,,convert]`

## Derivatives for Other Object Types

Some item formats where derivatives can not be automatically generated have alternatives build in to the CB-SA template:

- YouTube: for items hosted on YouTube with the "youtubeid" field in metadata, the template will use the YouTube API to retrieve appropriate images and embeds. 
- Audio: for items with "format" including "audio" (e.g. `audio/mp3`), the template will use a SVG icon in place of a thumbnail.
- Video: for items with "format" including "video" (e.g. `video/mp4`), the template will use a SVG icon in place of a thumbnail.

For other item types you may want to manually generate "small" and "thumbs" images following the conventions documented above.

## Objects Deployments

When using CB-SA the digital object files will not be stored on GitHub (i.e. don't commit your objects! Git is not optimized for binary file storage and GitHub has size limits).
Instead, the object files can be deployed in any web accessible location--in the "objects" folder with the generated website code, or anywhere else that you care to implement!

The location of the "objects" directory will be set in ["_config.yml"]({{ '/docs/config/collection/#objects' | relative_url }}) so that the web pages will know where to look.
This gives you a lot of flexibility to deploy and manage your objects depending on your needs.

For example, here are some options:

- **Just Testing:** keep the collection files in the "objects" folder in the project repository on your local machine. The files will *not* be committed to the repository, so are not available on GitHub. However, you will still be able to generate and test the site on your local machine.
- **Objects Deployed with Site:** you keep the collection files in the "objects" folder in the project repository on your local machine. When generating the site for deployment, Jekyll will copy the objects into the "_site" folder along with the rest of the site assets. Everything in "_site" is copied to a static web server (via SFTP or file share method) for your live deployment.
- **Objects in External Location:** prep your collection files, then move the objects to a static file hosting service (often provided by universities or purchased via a platform such as Digital Ocean or Reclaim Host). The objects are available at that location, e.g. "https://www.example.com/objects/newproject/". For the collection website, you can deploy the site assets in a totally separate location with out any objects, e.g. you set up a GitHub Action to build the CB-SA project resulting in the website hosted at "https://exampleuser.github.io/newproject/". This has advantage of being able to manage objects and html separately on platforms optimized for delivering each.
