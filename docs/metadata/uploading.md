---
title: Add Your Metadata
parent: Metadata
nav_order: 7
---

# Add Your Metadata

Once your metadata is ready, you'll want to add it to your project repository so CollectionBuilder can put it to use.
This can be done either by uploading via the GitHub web interface (most **GH** users) or by adding it to your local repository folder (most **CSV/CDM** users).
This section provides the steps to do it!

## Prepare Metadata File

Once you have finished preparing your metadata spreadsheet using Google Sheets or other software, you will need save it as a CSV format and ensure it has a sensible filename. 

{:.alert .alert-yellow}
CSV metadata should be in **UTF-8 encoding**.
It is important to note that you can create your metadata using Excel, however Excel **cannot** correctly export a CSV for use with CollectionBuilder or Jekyll (the encoding "UTF-8 with BOM" will cause errors!).
Google Sheets, OpenRefine, and LibreOffice Calc *will* correctly create the CSV, so we suggest working with those software options. 
If you do use Excel, save the spreadsheet in ".xlsx" format, then use Sheets or OpenRefine to open the file and export a correctly formatted CSV.

To download your metadata from Google Sheets:

- Click "File" and select "Download as Comma-separated values"
- Locate the metadata CSV you've just downloaded on your computer (probably in "Downloads" folder!) -- but **don't open it!**
- Without opening it (to avoid issues with Excel scrambling your UTF-8 encoding), rename this file using all lowercase letters, no spaces, and no special characters. For example: "psychiana-demo.csv", "idaho-waters.csv", "hjccc-dev.csv"

## Add Metadata to Project

With a properly formatted and named CSV in hand, you are ready to add your metadata to your CollectionBuilder project.
This can be done either by uploading via the GitHub web interface (most **GH** users) or by adding it to your local repository folder (most **CSV/CDM** users).

### Upload via GitHub Web interface

1. From the home page of your project repository on GitHub.com, click on the "_data" folder that appears in the code area of the page.
2. On the "_data" folder page, click the "Add file" button and select "Upload files" (appears to right side of page).
3. Click "choose your files", navigate to the location of the CSV on your local machine (probably in "Downloads"), and select your CSV file. Or drag the file from your File Explorer / Finder into the GitHub page. Once the file is uploaded, it will appear listed on the web page.
4. Scroll down to the "Commit changes" box, write a short commit message in the form, then click the green "Commit changes" button to add it to your repository. 

### Add to Local Repository Via Git

1. Locate your CSV in your File Explorer / Finder (probably in "Downloads"), and the your CollectionBuilder project repository folder (probably in "Documents" > "GitHub" folder).
2. Copy (or drag and drop) the CSV file into your CollectionBuilder project's "_data" folder.
3. Once the CSV is added, Git will notice that something has changes. Use Git on commandline, GitHub Desktop, or your editor's Git integration to add, commit, and push your changes to the repository.

## Update Metadata

If you've [cloned your repository to your computer]({{ '/docs/repository/clone/' | relative_url }}), you can make small changes to your metadata directly in Visual Studio Code.

However, over the course of creating your collection you'll probably find that you need to make some substantial edits to your metadata or add new records.
Rather than doing this in your text editor, it's often easiest to do this in Google Sheets, then re-add the metadata to your repository (note that we strongly recommend you use Google Sheets rather than Microsoft Excel. CollectionBuilder requires that CSV metadata be in UTF-8 encoding, and Excel cannot correctly export a CSV in UTF-8 encoding).

The following steps demonstrate how to edit your metadata in Google Sheets and add it to your repository:

1. If you've saved your collection's original metadata CSV in Google Sheets and it's up to date with the metadata in your repository, you can simply open the Google Sheets file and make your changes. Skip Step 2 and go directly to Step 3 below.
2. If you can no longer find your collection's original metadata CSV in Google Sheets, or if you've made substantial changes to the metadata in your repository but not to your Google Sheets copy, you'll need to import your repository's metadata CSV to Google Sheets to make your edits. Follow these steps:
    - In your web browser, open Google Drive. On the left side of the screen, locate the "+ New" button. Click this button. From the drop-down, select Google Sheets. This will open a new Google Sheets document. 
    - In your new Google Sheet, click File > Import. A white box with four tabs will appear. Select the tab labeled "Upload". This brings up a large box with the words "Drag a file here" above a blue button labeled "Select a file from your device".
    - Click the blue "Select a file from your device" button. This will open File Explorer (Windows) or Finder (Mac). 
    - In File Explorer / Finder, navigate to your project's repository on your computer (it will likely be in "Documents/GitHub", since this is where Git stores your GitHub repositories by default). 
    - Once you find your collection's repository folder, look for the _data subfolder. In the _data subfolder, locate your metadata CSV (example: "demo_metadata.csv"). Select your metadata CSV and click "Open".
    - The CSV will now upload to Google Sheets. At this point, a new box will appear on your Google Sheets screen titled "Import file". Make sure that the correct file is listed under "File". Leave the "import location" and "separator type" dropdowns as they are. Uncheck the box next to "Convert text to numbers, dates, and formulas". Click the "Import data" button. 
    - Your data will now populate your new spreadsheet. Make your edits.
3. To download your metadata from Google Sheets:
    - Click "File" and select "Download as Comma-separated values"
    - Locate the metadata CSV you've just downloaded on your computer (probably in the "Downloads" folder!) — **but don't open it!**
4. *Without opening it* (to avoid issues with Excel scrambling your UTF-8 encoding), ***rename this file the exact same filename as your current collection metadata CSV***.
5. Open your collection repository in Visual Studio Code. Locate the _data folder. 
6. Drag the CSV you just downloaded and renamed from your File Explorer / Finder and drop it directly into the _data folder that you see in Visual Studio Code. Since you gave it the same filename as your previous metadata file, Visual Studio Code will give you the message "A file or folder with the name 'demo_metadata.csv' already exists in the destination folder. Do you want to replace it?". Select "Replace" (remember, Git tracks changes, so you can always see the older iterations of your metadata in your commits history and go back to them if you need them).
7. Commit and push your changes using either GitHub Desktop or the command line or Visual Studio Code. 
