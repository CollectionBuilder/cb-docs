---
title: Object Derivatives
parent: Objects
nav_order: 5
---

{:.alert .alert-yellow}
**Note**: This section defines display derivative specifications for CollectionBuilder-CSV users and provides instructions for generating thumb and small derivatives using CollectionBuilder's built-in rake tasks.

## Creating Small and Thumb Derivatives

Once your full-sized digital objects are organized, you will need to prepare display derivatives for every item.
This process can be automated for tif, jpg, png, and pdf files using the "Generate Derivatives" [Rake task](#generate-derivatives-rake-task).

This rake task will produce a "small" and "thumb" jpg image for display on the collection web pages. 
The full sized and derivative files will be organized inside your project's "objects" folder:

### "objects/"
- Put your full-sized object files within your project's root "objects/" folder. These files will be available for users to download. 

CollectionBuilder-CSV requires two subfolders within the "objects/" folder: "objects/small/" and "objects/thumbs/".
**If you choose to create small and thumb derivatives on your own without using the Rake task**, you'll need to create these subfolders manually and add the respective objects to each folder. 
**If you choose to use the Rake task to generate the derivatives**, these subfolders will automatically be created as part of the Rake task.

### "objects/small/" 
- The "small/" subfolder contains a web-friendly small sized .jpg image representation of every object. This image is used on Item pages to provide a quality preview of the full sized object.
    - use the naming convention [base filename] + `_sm.jpg`.
    - should be approximately 800x800 px max.

### "objects/thumbs/" 
- The "thumbs/" subfolder contains a thumb sized .jpg image representation of every object. This image is used throughout the CollectionBuilder visualization pages to provide a small preview of the object.
    - use the naming convention [base filename] + `_th.jpg`. 
    - should be approximately 400x400 px max.

For example, if you have a collection object, "example_document1.pdf", these will be the files in your objects folder/subfolders:

- "objects/example_document1.pdf"
- "objects/small/example_document1_sm.jpg"
- "objects/thumbs/example_document1_th.jpg"

---

## Generate Derivatives Rake Task

All these details sound pretty overwhelming--luckily this prep work can be automated!
[Rake](https://github.com/ruby/rake) is a automation tool written in Ruby. 
It is a standard part of all Ruby installs, so if you are using Jekyll, you have it installed already.

CB-CSV's "generate_derivatives" Rake task automates creating a small and thumb image from all images and PDFs contained within the "objects/" directory in your project repository. 
It outputs the derivatives to "objects/small/" and "objects/thumbs/" following the naming convention defined above.

{:.alert .alert-yellow}
**Important!** Before using the `Rake generate_derivatives` command, you will need to [install ImageMagick and Ghostscript]({{ '/docs/software/optional/#imagemagick-and-ghostscript' | relative_url }}) on your local machine.

Once the required software is installed, follow these steps to generate derivative images:

1. Place all your collection files in your project's "objects" directory. Ensure all the filenames follow [best practices]({{ '/docs/objects/csv-objects/#object-guidelines-for-collectionbuilder-csv' | relative_url }})!
2. Open a terminal in your project repository. If using VS Code with the project folder open, open the integrated terminal ``Ctrl + ` ``. Otherwise, open a normal terminal window and navigate to your project repository folder (use Git Bash on Windows, Terminal on Mac and Linux)
3. Type the command `rake generate_derivatives`
4. Wait! Generating derivatives might take awhile if you are working on a large collection. Check the terminal for messages from the task--it will alert you about any errors or files skipped. When the task is complete, your terminal's command prompt will return.
5. Scroll up in your terminal window to check for any errors. 
6. You should be able to see your newly-generated derivatives in your repository's "objects/small/" and "objects/thumbs/" folders.
7. Test your site with `bundle exec jekyll s`.

Once the "generate_derivatives Rake task has processed your files, you can optionally deploy your "objects" directory to an external location, i.e. copy the complete folder contents over to a file server or platform.
If you do, update your [object location metadata fields]({{ '/docs/objects/csv-objects/#object-location-metadata-fields' | relative_url }}) to point at the external location!

The "generate_derivatives" command can be further customized with several options if desired--check "docs/rake-tasks.md" in your CB-CSV repository for details.

{:.alert .alert-info}
*Tip:* on Linux if you install ImageMagick from a repository, you will probably have "legacy" ImageMagick 6.
To avoid errors, you will need to give an additional configuration option to change the ImageMagick command:
`rake generate_derivatives[,,,,convert]`

---

## Derivatives for Other Object Types

See the [Object Paths]({{ '/docs/objects/object-paths/' | relative_url }}) page for information on [YouTube]({{ '/docs/objects/object-paths/#path-for-youtube-objects' | relative_url }}) derivatives.

For other item types you may want to manually generate "small" and "thumbs" images following the conventions documented in the [Creating Derivatives](#creating-small-and-thumb-derivatives) section above.