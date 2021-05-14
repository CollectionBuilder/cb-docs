---
title: Objects for GH
parent: Objects
nav_order: 1
---

# Collection Objects for CollectionBuilder-GH

Collectionbuilder-GH is designed for learning with small collections.
To minimize barriers to getting started, GH has a simplified approach to collection objects. 

GH supports a small set of object types including jpg, png, pdf, and mp3, plus externally hosted items via YouTube, Vimeo, and external links.
All object files are placed in the "objects" folder directly in your project repository and will be committed to GitHub.
No access derivatives are generated, meaning the full sized objects you add to the project will be displayed on web pages through out the site, and no thumbnails are created for non-image items.

Prep your items in a folder together on your local machine, doing any object editing in advance of adding them to the project.

## Object Guidelines for GH

- Supported formats: jpg, png, pdf, mp3 -- plus YouTube, Vimeo, and external links, but you won't have objects for those!
- File size: since there are no thumbnails generated, keep your object files at a reasonable size for access on the web. This means you will usually not be using your full resolution versions! For example, jpeg images of about 1200px wide and PDFs less than 1 MB will work well. Larger objects (especially images) will slow load times and make your users download unnecessarily large data--so keep them to a web friendly size!
- Total size: GitHub repositories have soft limits on total size, some where around 1 GB. A good rule of thumb is to keep your "objects" folder less than 500 MB. 
- Filenaming: to avoid issues, please pay close attention to filenaming conventions! The filename should be an all lowercase unique string with no spaces or special characters. Underscores (`_`) are okay. You will use the exact filenames to populate the "filename" field of your collection metadata.

{:.alert .alert-purple }
**Note:** 
CB-GH is great for learning and prototyping--all your configuration and metadata template is transferable to other CollectionBuilder templates.
If you are building a larger collection or featuring larger objects, you will run into its limitations--try using a smaller subset of your collection and smaller size images for your prototype, then migrate to the fully featured template later!
Other CollectionBuilder templates enable generating derivatives and hosting objects outside of GitHub.

## Add Objects to your GH Project

Once your digital objects are prepped in a folder with good filenames and reasonable sizes...
You will upload your files into the "objects" folder in your project repository on GitHub.
The template comes with four demo items (.jpg, .pdf, .mp3) as examples.

Follow these steps:

1. On the home page of your project repository on GitHub, click on the "objects" folder that appears in the code area of the page.
2. On the "objects" folder page, click the "Add file" button and select "Upload files" (appears to right side of page).
3. Click "choose your files" and navigate to the location of your object files on your local machine, and select all the collection items. Or drag and drop all the files from your File Explorer / Finder into the GitHub page. Once the files are uploaded, they will appear listed on the web page.
4.  Scroll down to the "Commit changes" box, write a short commit message in the form (an appropriate message might be "add collection objects to project"), then click the green "Commit changes" button to add them to your repository. (this is a Git Commit!)
