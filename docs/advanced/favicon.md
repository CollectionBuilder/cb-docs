---
title: Site Icon
parent: Advanced
nav_order: 6
---

# Create a site icon

A favicon is that tiny image you see next to the page name in the browser tab or bookmark. 
By default, the theme uses the CollectionBuilder icon. 
To add a polishing touch to your collection, you can add your own custom favicon in a few steps.

1. Create an image that is representative of your site that will scale down to a tiny size nicely, i.e. it can't have much detail!
2. Open the image with [GIMP](https://www.gimp.org/) (a free opensource photo editor).
3. Make the image into a square by cropping or adding to the canvas size.
4. Click Image > Scale Image... and set the Image Size to 32 x 32 pixels (or 16 x 16 for full backward browser support), click Scale.
5. Click File > Export As... then in the name box type `favicon.ico`, and click Export (GIMP will automatically export the file type based on the extension). Click okay for the default export options.
6. Copy the "favicon.ico" file to your collection repository replacing the existing file. Git add, commit, and push.

## More info

The favicon file is set in the `<head>` section of your web pages using this link metatag: 

`<link rel="shortcut icon" type="image/x-icon" href="{{ "/favicon.ico" | relative_url }}">`

In your CB project, the tag is in the file `_includes/head/head.html`.
If you want to create a more advanced set of icons (for example from using a favicon generator), you can replace the current tag with the updated markup.
