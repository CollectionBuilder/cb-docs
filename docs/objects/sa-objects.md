---
title: Objects for SA
parent: Objects
nav_order: 4
---

{:.alert .alert-red}
**Note: CollectionBuilder-SA is now deprecated! We strongly recommend using CollectionBuilder-CSV instead.**

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
- **Filenaming:** to avoid issues, please pay close attention to filenaming conventions! You will use the **exact filenames** (including extension and same case) to populate the "filename" field of your collection metadata. For ease of use, the base filename (i.e. with out extension) should match the "objectid" used in the metadata. The filename should be:
    - all lowercase
    - no spaces
    - no special characters (underscores (`_`) are okay.