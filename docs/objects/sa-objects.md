---
title: Collection Objects for SA
parent: Objects
nav_order: 3
---

- objects are stored outside of github (don't commit your objects!)
- object can be in "objects" folder along side the project code, or in any web accessible location.
- set _config.yml objects value
- derivatives must be generated for the objects so each object has a thumb and small image representation (no matter what original object type)
- folder structure objects, objects/small, objects/thumbs
- filenaming convention, derivative convention _sm, _th
- filename field in metadata
- supported file types: jpg, png, pdf
- youtube items
- Rake task

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
