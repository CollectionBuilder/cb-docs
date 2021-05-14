---
title: Objects for SA
parent: Objects
nav_order: 3
---

# Collection Objects for CollectionBuilder-SA

CollectionBuilder-SA is designed for large, stand alone collections self-hosted on any basic static web server or platform.
The approach is similar to CollectionBuilder-GH, but is more robust and goes beyond the limitations of hosting on GitHub Pages.

CB-SA requires that you generate a thumb and small image derivative or representation for each object in your collection (for all item formats), in additional to providing the full sized object for download.
This can be automated using the included Rake tasks (see below) or manually created using other software.

## Object Deployments

When using CB-SA the digital object files will not be stored on GitHub (i.e. don't commit your objects! Git is not optimized for binary file storage and GitHub has size limits).
Instead, the object files can be deployed in any web accessible location--in the "objects" folder with the generated website code, or anywhere else that you care to implement!

The location of the "objects" directory will be set in ["_config.yml"]({{ '/docs/04_config/collection/#objects' | relative_url }}).

For example, here are some options:

- **Just Testing:** keep the collection files in the "objects" folder in the project repository on your local machine. The files will *not* be committed to the repository, so are not available on GitHub. However, you will still be able to generate and test the site on your local machine.
- **Objects Deployed with Site:** you keep the collection files in the "objects" folder in the project repository on your local machine. When generating the site for deployment, Jekyll will copy the objects into the "_site" folder along with the rest of the site assets. Everything in "_site" is copied to a static web server (via SFTP or file share method) for your live deployment.
- **Objects in External Location:** you prep your collection files, then move the objects to a static file hosting service (often provided to faculty at universities or purchased via a platform such as Digital Ocean). The objects are available at that location, e.g. "https://www.example.com/objects/newproject/". For the actual website, you can deploy the site assets in a totally separate location with out any objects, e.g. you set up a GitHub Action to build the CB-SA project resulting in the website hosted at "https://exampleuser.github.io/newproject/".

## Objects Folder Structure

No matter where you choose to host your "objects" folder, the content will be organized in the same way:

- **"objects/"** - The root of the folder should contain the full sized object files.
- **"objects/small"** - The folder must contain a folder named "small" that contains a web friendly small sized .jpg image representation of every object. Small images use the naming convention <base filename> + `_sm.jpg`.
- **"objects/thumbs"** - The folder must contain a folder named "thumbs" that contains a thumb sized .jpg image representation of every object. Thumb images use the naming convention <base filename> + `_th.jpg`.

For example, if you have an collection item file "example_document1.pdf", you end up with these files in your objects:

- objects/example_document1.pdf
- objects/small/example_document1_sm.jpg
- objects/thumbs/example_document1_th.jpg

## Object Guidelines for SA 

- **Supported formats:** tiff, jpg, png, pdf -- plus YouTube and external links, but you won't have objects for those!
- **File size:** the full size object can be any size you think your users might want to download. Each object will have a "small" and "thumb" .jpg derivative for display on the collection web pages.
    - "small" image should be approximately 800x800 px max
    - "thumb" image should be approximately 400x400 px max
- **Filenaming:** to avoid issues, please pay close attention to filenaming conventions! The filename should be an all lowercase unique string with no spaces or special characters. Underscores (`_`) are okay. You will use the exact filenames to populate the "filename" field of your collection metadata. The base filename (i.e. with out extension) should match the "objectid" used in the metadata.

## Object Rake Task

All these details sound pretty overwhelming--luckily this prep work can be automated!
[Rake](https://github.com/ruby/rake) is a automation tool written in Ruby. 
It is a standard part of all Ruby installs, so if you are using Jekyll, you have it installed already.

CB-SA's "generate_derivatives" task, automates creating a small and thumb image from all images and PDFs contained within the "objects/" directory in the repository. 
It outputs the derivatives to "objects/small" and "objects/thumbs" following the naming convention.

Before using the command, you will need to install ImageMagick and Ghostscript on your local machine:

- **ImageMagick** is a popular open source tool for processing images. Visit the [ImageMagick download page](https://imagemagick.org/script/download.php) to get the installer for your OS, choosing the suggested version. Install following the default options.
- **Ghostscript** is a popular open source tool for working with PDFs. Visit the [Ghostscript download page](https://www.ghostscript.com/download/gsdnld.html) and choose the AGPL release for your OS. Install following the default options.

Once the required software is installed, follow these steps to generate derivative images:

1. Place all your collection files in the "objects" directory. Ensure all the filenames are good!
2. Open a terminal in your project repository. If using VS Code with the project folder open, just open the integrated terminal ``Ctrl + ` ``. Otherwise, open a normal terminal window and navigate to your project repository folder (use Git Bash on Windows, Terminal on Mac and Linux)
3. Type the command `rake generate_derivatives`
4. Wait! Generating derivatives might take awhile if you are working on a large collection. Check the terminal for messages from the task--it will alert you about any errors or files skipped. When the task is complete, your Terminal's command prompt will return.
5. Test or deploy your site!

The "generate_derivatives" command can be further customized with several options if desired--check "docs/rake-tasks.md" in your repository for details.

*Tip:* on Linux if you install ImageMagick from a repository, you will probably have "legacy" ImageMagick 6.
To avoid errors, you will need to give an additional configuration option to change the ImageMagick command:
`rake generate_derivatives[,,,,convert]`
