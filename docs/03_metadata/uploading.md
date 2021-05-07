---
title: Connecting Your Metadata
parent: Metadata
nav_order: 6
---

# Connecting Your Metadata

Once your metadata is ready, you'll want to deposit it into the repository either by uploading it to GitHub (**GH**) or by adding it your local folder (**SA/CDM**)

{:.alert}
*Note:* CSV metadata should be in UTF-8 encoding. CSVs downloaded from Google Sheets or exported from OpenRefine will have the correct encoding. However, Excel does not handle UTF-8 correctly, and may cause issues. The encoding "UTF-8 with BOM" (created by Excel save as CSV) will not work!'

## **Prepare your metadata file:**

- Once you've finished creating your metadata in Google Sheets (or other software), click "File" and select "Download as Comma-separated values."
- Locate the metadata CSV you've just downloaded on your computer. 
- Without opening it, rename this file using all lowercase letters, no spaces, and no hyphens.
- Example filenames: `idahowater.csv`, `hjccc_dev.csv`

## **Deposit your metadata:**

### For GH Users (Upload to GitHub)

1. Navigate to the _data directory on the GitHub.com repository. 
2. Click the "Upload Files" button at the top of the page.
3. Open your File Explorer (PC) or Finder (Mac) and locate the CSV you just downloaded and renamed (it's probably in your "Downloads" folder). 
4. Drag the file onto the web page. 
5. Write a short commit message in the form at the bottom of the page and then click the green "Commit changes" button directly below the form.

### For CDM and SA Users

1. Locate the CSV you just downloaded and renamed (it's probably in your "Downloads" folder) in your File Explorer / Finder
2. Copy (or drag and drop) the metadata file into your CollectionBuilder project repository's `_data` directory (your repository is probably in your Documents > GitHub folder). 
3. Commit the new metadata using Git or GitHub Desktop, and push your changes to the repository.
