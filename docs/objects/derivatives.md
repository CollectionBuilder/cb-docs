---
title: Object Derivatives
parent: Objects
nav_order: 4
---

# Generating Thumb and Small Object Derivatives

This section defines display specifications for derivative objects in CollectionBuilder-CSV, and provides instructions for generating thumb and small derivatives using CollectionBuilder-CSV's built-in rake tasks.

## Thumb and Small Derivative Specifications

Once your full-sized digital objects are organized, you can prepare their display derivatives.
This process can be automated for tif, jpg, png, and pdf files using the ["Generate Derivatives" Rake task](#generate-derivatives-rake-task).

This Rake task will produce a "thumb" and "small" jpg image for each object, for display on the collection web pages.

To start, the full-sized files should be organized inside your project's "objects" folder:

### "objects/"
- Put your full-sized object files in your project's "objects/" folder.

If you're using the Rake task to generate derivatives, two new subfolders, "objects/small/" and "objects/thumbs/", will automatically be created as part of the Rake task:

### "objects/small/" 
- The "small/" subfolder will contain a web-friendly small-sized .jpg image representation of every object. This image is used on Item pages to provide a quality preview of the full sized object.
    - **Naming convention**: [base filename] + `_sm.jpg`.
    - **Size**: approximately 800x800 px max.

### "objects/thumbs/" 
- The "thumbs/" subfolder will contain a thumb-sized .jpg image representation of every object. This image is used throughout the CollectionBuilder visualization pages to provide a small preview of the object.
    - **Naming convention**: [base filename] + `_th.jpg`. 
    - **Size**: approximately 400x400 px max.

For example, if you have a collection object, "example_document1.pdf", after running the Rake task these will be the files in your objects folder/subfolders:

- "objects/example_document1.pdf"
- "objects/small/example_document1_sm.jpg"
- "objects/thumbs/example_document1_th.jpg"

{:.alert .alert-purple}
**Note**: You do not need to create the "objects/small/" and "objects/thumbs/" folders manually.
The Rake task will do this for you!

{:.alert .alert-yellow}
Are you creating your derivatives manually instead of using the Rake task?
We recommend using "small/" and "thumbs/" directories for organization purposes, but it's not required.
Just remember to put the [correct path]({{ '/docs/metadata/csv_metadata/#object-detail-fields-strongly-suggested' | relative_url }}) to your derivatives in each object's metadata record.

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

Once the "generate_derivatives" Rake task has processed your files, you can optionally deploy your "objects" directory to an external location, i.e. copy the complete folder contents over to a file server or platform.
If you do, update your [object location metadata fields]({{ '/docs/objects/csv-objects/#object-location-metadata-fields' | relative_url }}) to point at the external location!

The "generate_derivatives" command can be further customized with several options if desired--check "docs/rake-tasks.md" in your CB-CSV repository for details.

{:.alert .alert-info}
*Tip:* on Linux if you install ImageMagick from a repository, you will probably have "legacy" ImageMagick 6.
To avoid errors, you will need to give an additional configuration option to change the ImageMagick command:
`rake generate_derivatives[,,,,convert]`

{:.alert .alert-blue}
Questions about hosting your objects? See [Object Deployment]({{ '/docs/objects/csv-objects/#object-deployment' | relative_url }}) for CollectionBuilder-CSV.

---

## Derivatives for Other Object Types

See the [Object Paths]({{ '/docs/objects/object-paths/' | relative_url }}) page for information on [YouTube]({{ '/docs/objects/object-paths/#path-for-youtube-objects' | relative_url }}) derivatives.

For other item types you may want to manually generate "small" and "thumbs" images following the conventions documented in the [Creating Derivatives](#create-small-and-thumb-derivatives) section above.