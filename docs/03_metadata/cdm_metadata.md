---
title: Metadata from CONTENTdm
parent: Metadata
nav_order: 6
---

- how to export from CONTENTdm
- fields to prep for CB
- option to enhance metadata beyond what is in contentdm repository
- option to curate only select items, or curate from multiple collections

## Required Fields for CONTENTdm

### **cdmid** (for CONTENTdm skin):

- This is the unique identification number assigned to the item by CONTENTdm (the field titled "CONTENTdm number" in your exported metadata). For convenience, we generally make this correspond with the number in the item's objectid (ex. objectid: `coll002`, cdmid: `2`), but this correspondence is not necessary for CollectionBuilder to work.
- Example value: `142`

***At this time, CONTENTdm's compound objects are not supported in CollectionBuilder.*** *If you have a compound object, link to it as a complete pdf.*

# Setting CONTENTdm Collection

CB-CONTENTdm supports creating collections of items from single or multiple CONTENTdm collections. 
Knowing the correct CONTENTdm collection name for every item is necessary to retrieve the correct objects from the API and to set up the search.

By default, the CONTENTdm collection ID (sometimes called "alias") is set in "_config.yml", as the value of `cdm-collection-id`. 
If all your items are from a single CDM collection, only this value is necessary. 

If you have items from multiple CDM collections, add a column named `collectionid` to your metadata file.
Each item will have it's collection alias in this column, which will be used in all API calls.
If there is no `collectionid` value, the item will default to the value of `site.cdm-collection-id` (set in _config.yml).
The nav links to CDM search and database will be derived from unique values in `collectionid` column plus `site.cdm-collection-id`.
