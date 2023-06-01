---
title: Alt Text and Transcript Fields
release: 2023-05-30
---

CollectionBuilder-CSV now supports two new metadata fields aimed at increasing accessibility in collections:

- **"image_alt_text"** is used to provide custom descriptive alt text for "image_small" and "image_thumb" where they are used throughout the template. Separating this from the metadata "title" or "description" field allows you to more carefully craft appropriate alt text to communicate information about the image to users. If your metadata does not have the "image_alt_text" column or values, the template will fallback using the previous behavior. 
- **"object_transcript"** is used to provide a basic transcript on the Item page. This is aimed at audio and video objects which can be greatly enhanced by providing users with descriptive transcripts, an essential for accessibility.

These fields are documented in the [CB-CSV metadata section]({{ '/docs/metadata/csv_metadata/#image_alt_text' | relative_url }}), with examples in the demo metadata and template.

A variety of other minor accessibility improvements have also recently been pushed to the templates, such as improving logical heading order on pages, keyboard focus, and hiding decorative icons. 
