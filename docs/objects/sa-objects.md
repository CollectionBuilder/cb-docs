---
title: Objects for SA
parent: Objects
nav_order: 3
---

# Collection Objects for CollectionBuilder-SA

CollectionBuilder-SA is designed for large, standalone collections self-hosted on a basic static web server (i.e. generally beyond the size limitations of GitHub Pages).

CB-SA requires that you generate a thumb and small image derivative/representation for each object in your collection (for all item formats), in additional to providing the full sized object for download.
This can be automated using the included Rake tasks or manually created using other software.

The digital object files will not be stored on GitHub (don't commit your objects! Git is not optimized for binary file storage and GitHub has size limits).
Instead, the files can be deployed in any web accessible location--in the "objects" folder with the generated website code, or anywhere else that you can implement!

## Example Deployments

For example,

## Objects Folder Structure

- folder structure objects, objects/small, objects/thumbs
- set _config.yml objects value

## Object Guidelines for SA 

- derivatives must be generated for the objects so each object has a thumb and small image representation (no matter what original object type)
- filenaming convention, derivative convention _sm, _th
- filename field in metadata
- supported file types: jpg, png, pdf
- youtube items

## Object Rake Tasks

[Rake](https://github.com/ruby/rake) is a task automation tool written in Ruby. 
It is a standard part of all Ruby installs, so if you are using Jekyll, you have it installed.

CB-SA provides a Rake task to prep image derivatives for image and PDF items.

## generate_derivatives

`rake generate_derivatives`, automates creating a small and thumb image from all images and PDFs contained within the "objects/" directory in this repository. 
It outputs the derivatives to "objects/small" and "objects/thumbs". 
Please ensure you have the requirements installed and available on the commandline before running!

Requirements:

- **ImageMagick**, [download](https://imagemagick.org/script/download.php)
- **Ghostscript**, [download AGPL version](https://www.ghostscript.com/download/gsdnld.html) 

The following configuration options are available:

| option | description | default value |
| --- | --- | --- |
| thumbs_size | the dimensions of the generated thumbnail images | 300x300 |
| small_size | the dimensions of the generated small images | 800x800 |
| density | the pixel density used to generate PDF thumbnails | 300 |
| missing | whether to only generate derivatives that don't already exist | true |
| im_executable | ImageMagick executable name | magick |

You can configure any or all of these options by specifying them in the rake command like so:

```
rake generate_derivatives[<thumb_size>,<small_size>,<density>,<missing>]
```

Here's an example of overriding all of the option values:

```
rake generate_derivatives[100x100,300x300,70,false]
```

It's also possible to specify individual options that you want to override, leaving the others at their defaults.
For example, if you only wanted to set `density` to `70`, you can do:

```
rake generate_derivatives[,,70]
```

The task assumes you are using ImageMagick 7. 
If you have legacy ImageMagick (i.e. 6), which is common from Linux repositories, you need to set the `im_executable` configuration option to `convert`:

```
rake generate_derivatives[,,,,convert]
```
