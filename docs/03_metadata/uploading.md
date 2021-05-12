---
title: Add Your Metadata
parent: Metadata
nav_order: 7
---

# Add Your Metadata

Once your metadata is ready, you'll want to add it to your project repository so CollectionBuilder can put it to use.
This can be done either by uploading via the GitHub web interface (most **GH** users) or by adding it to your local repository folder (most **CDM/SA** users).
This section provides the steps to do it!

## Prepare Metadata File

Once you have finished preparing your metadata spreadsheet using Google Sheets or other software, you will need save it as a CSV format and ensure it has a sensible filename. 

{:.alert .alert-yellow}
CSV metadata should be in **UTF-8 encoding**.
It is important to note that you can create your metadata using Excel, however Excel **can not** correctly export a CSV for use with CollectionBuilder or Jekyll (the encoding "UTF-8 with BOM" will cause errors!).
Google Sheets, OpenRefine, and LibreOffice Calc *will* correctly create the CSV, so we suggest working with those software. 
If you use Excel, save the spreadsheet in ".xlsx" format, then use Sheets or OpenRefine to open the file and export a correctly formatted CSV.

To download your metadata from Google Sheets:

- Click "File" and select "Download as Comma-separated values"
- Locate the metadata CSV you've just downloaded on your computer (probably in "Downloads" folder!) 
- Without opening it (to avoid issues with Excel scrambling your UTF-8 encoding), rename this file using all lowercase letters, no spaces, and no hyphens. For example: "psychiana_demo.csv", "idaho_waters.csv", "hjccc_dev.csv"

## Add Metadata to Project

With a properly formatted and named CSV in hand, you are ready to add your metadata to your CollectionBuilder project.
This can be done either by uploading via the GitHub web interface (most **GH** users) or by adding it to your local repository folder (most **CDM/SA** users).

### Upload via GitHub web interface

1. From the home page of your project repository on GitHub.com, click on the "_data" folder that appears in the code area of the page.
2. On the "_data" folder page, click the "Add file" button and select "Upload files" (appears to right side of page).
3. Click "choose your files", navigate to the location of the CSV on your local machine (probably in "Downloads"), and select your CSV file. Or drag the file from your File Explorer / Finder into the GitHub page. Once the file is uploaded, it will appear listed on the web page.
4. Scroll down to the "Commit changes" box, write a short commit message in the form, then click the green "Commit changes" button to add it to your repository. 

### Add to local repository via Git

1. Locate your CSV in your File Explorer / Finder (probably in "Downloads"), and the your CollectionBuilder project repository folder (probably in "Documents" > "GitHub" folder).
2. Copy (or drag and drop) the CSV file into your CollectionBuilder project's "_data" folder.
3. Once the CSV is added, Git will notice that something has changes. Use Git on commandline, GitHub Desktop, or your editor's Git integration to add, commit, and push your changes to the repository.
