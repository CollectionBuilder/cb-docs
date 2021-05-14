---
title: Objects Using CONTENTdm
parent: Objects
nav_order: 2
---

# Collection Objects Using CONTENTdm

CollectionBuilder-CONTENTdm is designed as a "skin" over the top of one or more existing CONTENTdm digital collections. 
Collection objects are managed and stored in the CONTENTdm repository as normal--you don't need change anything with your CONTENTdm set up!

This also means you don't have to do any special "objects" prep for CollectionBuilder! 
CB-CDM work is focused on getting the metadata correct after exporting from CONTENTdm.

CB-CDM sites use standard [CONTENTdm APIs](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/CONTENTdm_API) to retrieve display images and file downloads from your existing collection using each items "CONTENTdm number" (`cdmid` in CB) and the "Collection Alias" (`cdm-collection-id` or `collectionid` in CB). 
In general, CB-CDM uses [IIIF](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/IIIF_API_reference) for image objects and [CDM "utils" API](https://help.oclc.org/Metadata_Services/CONTENTdm/Advanced_website_customization/API_Reference/CONTENTdm_API/CONTENTdm_Website_API_Reference_-_utils) for non-image items (see "docs/contentdm-api.md" in your repository for more details).
These APIs provide a thumbnail and download for any object type.
Image objects will have special treatment using the IIIF to retrieve higher quality images in various CB pages.

In addition to objects in your CONTENTdm repository, CB-CDM supports external video items hosted on YouTube. 
These items do not necessarily have to be part of your CONTENTdm repository.

{:.alert .alert-red}
**Note:** CONTENTdm "compound object" type can be tricky to work with! 
There is solutions to working with and displaying "compound objects" in CB-CDM, however, they may not immediately work out of the box in all cases.
If you have choice, avoid compound objects! 
If not, take care with your metadata transformations and reach out to the CollectionBuilder team for help.
