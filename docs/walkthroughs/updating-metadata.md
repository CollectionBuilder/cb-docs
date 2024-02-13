---
title: Updating Metadata Walkthrough
parent: Walkthroughs
nav_order: 5
lazyload: true
---

# Updating Metadata Walkthrough

This two-part walkthrough provides steps for updating your CollectionBuilder site's metadata using the GitHub web interface and Visual Studio Code (VS Code). 

This walkthrough assumes you have already set up a CollectionBuilder site and need to update your metadata file. You can repeat these steps whenever you make a change to your metadata that you would like to see reflected in your live site.

{:.alert .alert-blue}
**Note:** If you need help setting up a CollectionBuilder site, please visit our [CollectionBuilder-GH Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/gh-walkthrough/), [CollectionBuilder-SHEETS Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/sheets-walkthrough/), or [CollectionBuilder-CSV Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/csv-walkthrough/) depending on which [CollectionBuilder template](https://collectionbuilder.github.io/cb-docs/docs/templates/) you are interested in using.

## Part 1: Updating Metadata Using the GitHub Web Interface

This part of the walkthrough is recommended for when you are using the GitHub web interface for editing your site, which is most often used for the CollectionBuilder-GH and CollectionBuilder-SHEETS templates.

### 1. Update your metadata spreadsheet

- Edit your metadata file in **Google Sheets** (e.g., adding additional items to your metadata, removing items, editing metadata fields, etc.).

{:.alert .alert-green}
**Note:** When updating your metadata, it is easiest to edit the Google Sheet as opposed to editing the CSV file in your repository. 

### 2. Download the updated metadata spreadsheet as a CSV file

- Download the updated metadata spreadsheet as a .csv file by clicking **File** → **Download** → **Comma Separated Values (.csv)**

{% include feature/image.html img="download-metadata.gif" alt="User downloading the Google Sheet as a CSV file" border=true width="80%" %}

### 3. Rename the CSV file as the exact same file name as the CSV file already in your repository

- Locate the file in the Downloads folder on your computer. 

{:.alert .alert-red}
**Warning:** Do not open the CSV file to avoid issues with Microsoft Excel scrambling your UTF-8 encoding. Excel cannot correctly export a CSV for use with CollectionBuilder.

- **Without opening the CSV file**, rename the file to be exactly the same file name as the CSV file already in your repository. 

- If you forget what you named the file previously, you can check the **COLLECTION SETTINGS** section of your `_config.yml` file.

- For CollectionBuilder-SHEETS, your metadata file name will be included after `metadata-csv:` and for CollectionBuilder-GH, your metadata file name will be included after `metadata:`

### 4. Reupload your new metadata file

- Visit the homepage of your repository on GitHub.com.

- If you are using CollectionBuilder-GH, click on the **"_data"** folder. (If you are using CollectionBuilder-SHEETS, click on the **"assets"** folder).

- On the folder page, click the **"Add file"** button and select **"Upload files."**

- Click **"Choose your files"** and navigate to the location of your renamed metadata CSV (probably in "Downloads"). 

{% include feature/image.html img="upload-metadata.gif" alt="User clicking on add file button and then upload files" border=true width="80%" %}

- Ensure the file name is _exactly the same_ as your previous version of the metadata CSV and select the file.

### 5. Commit your changes.

- Scroll down to the **"Commit changes"** box, write a short commit message describing what you did (e.g., **"Update metadata"**), and then click the green "Commit changes" button

- This will replace your old metadata file with the new metadata file. Your GitHub Pages site will automatically rebuild to reflect the changes you made.

<hr>

## Part 2: Updating Metadata Using Visual Studio Code

This part of the walkthrough is recommended for when you are using VS Code for editing your site, which is most often used for the CollectionBuilder-CSV template.

### 1. Use GitHub Desktop to open your repository in VS Code

- Check to make sure you are in the correct repository by viewing the top left section of GitHub Desktop. To switch between repositories, locate the **Current Repository** dropdown, and select the repository you'd like to open. 

- In the top menu, locate and click on **Repository**, and select the option, **Open in Visual Studio Code**. 

{% include feature/image.html img="open-repository-menu.gif" alt="GitHub Desktop user clicking on Repository and then Open in Visual Studio Code option" border=true width="80%" %}

- Alternatively, in the box that says **Open the repository in your external editor**, you can click the button that says **Open in Visual Studio Code**.

{% include feature/image.html img="open-vs-code.gif" alt="GitHub Desktop user clicking on Open in Visual Studio Code button to open VS Code application" border=true width="80%" %}

### 2. Update your metadata spreadsheet

- Edit your metadata file in Google Sheets (e.g., adding additional items to your metadata, removing items, editing metadata fields, etc.).

### 3. Download the updated metadata spreadsheet

- Download the updated metadata spreadsheet as a .csv file by clicking **File** → **Download** → **Comma Separated Values (.csv)**

{% include feature/image.html img="download-csv-metadata.gif" alt="Google Sheets user clicking on File, Download, and Comma Separated Values to download metadata as a csv file." border=true width="80%" %}

### 4. Open the updated CSV file in Visual Studio Code

- Locate the CSV file in the Downloads folder on your computer. 

{:.alert .alert-red}
**Warning:** Do not open the CSV file to avoid issues with Microsoft Excel scrambling your UTF-8 encoding. Excel cannot correctly export a CSV for use with CollectionBuilder.

- Right click the file and then click **Open With...** → **Visual Studio Code**.

[GIF GOES HERE]

{:.alert .alert-yellow}
**Note:** If Visual Studio Code does not show up in your list of recommended applications, click **"Other..."** and then search for **"Visual Studio Code"** in your Finder or file explorer.

### 5. Select all the text in the updated CSV file and copy it

- Once you have the CSV file opened in Visual Studio Code, hit **Command+A** (on Mac) / **Ctrl+A** (on Windows) to select all the text.

- Next, hit **Command+C** (on Mac) / **Ctrl+C** (on Windows) to copy all the text.

### 6. Paste the copied text over the old metadata CSV file and save

- Click on the old version of your metadata file in your **"_data"** folder to open the file. 

[GIF of selecting old metadata file in VS Code]

- Press **Command+A** (on Mac) / **Ctrl+A** (on Windows) to select all the text.

- Next, hit **Command+V** (on Mac) / **Ctrl+V** (on Windows) to paste over the text with the text from the updated metadata file.

[GIF of selecting all text in the old metadata file in VS Code and then pasting new text over the old text]

- Finally, press **Command+S** (on Mac) / **Ctrl+S** (on Windows) to save the file. This will update your old metadata file with the changes from the new metadata file.

### 7. Commit and push your changes.

- In VS Code, click on the **"Source Control"** icon, i.e. the network icon on the left side.

- Changed files will be listed under **"Changes."** Hover over the CSV file name and click on the plus icon to stage the change. Once added, the file will move to a new list **"Staged Changes"** and it is ready to commit.

- Click in the text box at the top labeled **"Message."** Type your "commit message" into the box (in this case something like, **"Update metadata"**).

- Click the blue **"Commit"** button below the message box to commit the change.

- To Push your local changes up to GitHub, click the blue **"Sync Changes"** button. This will sync your local changes with the GitHub repository.



