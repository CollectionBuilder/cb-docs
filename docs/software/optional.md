---
title: ImageMagick and Ghostscript
parent: Software
nav_order: 8
---

# ImageMagick and Ghostscript

Most (*but not all!*) CollectionBuilder projects will involve working with a collection of digital objects, i.e. JPEGs, PDFs, MP3s, etc.
We use the software listed below to batch process digital files for use in CollectionBuilder-CSV projects. 

This approach is **optional**--it's not required for GH or SHEETS and/or you may already have suitable images available or a different workflow to process the objects (for example using PhotoShop or [GIMP](https://www.gimp.org/)).

The CB-CSV template includes a [Rake](https://github.com/ruby/rake) task that automates creating derivative images for PDF and image items.
Rake is a standard part of all Ruby installs, so if you are using Jekyll, you have it installed already!

However, to use [CollectionBuilder's Rake task]({{ '/docs/objects/derivatives/#generate-derivatives-rake-task' | relative_url }}) `generate_derivatives` you will need the command line tools [ImageMagick](https://imagemagick.org) and [Ghostscript](https://www.ghostscript.com/) installed on your computer.
These *very* popular open source utilities are used in numerous applications and web platforms to provide digital object processing pipelines--and can also be useful for batch processing on your personal computer.

### Install on Windows

- Visit the [ImageMagick download page](https://imagemagick.org/script/download.php) and download the suggested version (the one at the top of the list). 
- This file will be a self contained installer, once downloaded double click to install on your computer following the default options.
- Visit [Ghostscript download page](https://ghostscript.com/releases/gsdnld.html) and choose the "AGPL release".
- This file will be a self contained installer, once downloaded double click to install on your computer following the default options.

### Install on Mac

Use [Homebrew](https://brew.sh/) to install:

- Open your terminal.
- Type in the command: `brew install imagemagick`
- Type in the command: `brew install ghostscript`

### Install on Linux

On Linux, use your distro's repositories to install imagemagick and ghostscript packages.

- On Ubuntu: `sudo apt install imagemagick ghostscript`

*Tip:* on Linux if you install ImageMagick from a repository, you will probably have "legacy" ImageMagick 6 which has slightly different commands then the current version 7.
Our Rake task will automatically handle the different versions.
Alternatively, if you want to run the most up to date Magick (but then have to manually set up and maintain your installation), you can get a binary release from [ImageMagick download page](https://imagemagick.org/script/download.php).
