---
title: Updating Metadata Walkthrough
parent: Walkthroughs
nav_order: 5
lazyload: true
---

# Updating Metadata Walkthrough

This two-part walkthrough provides steps for updating your CollectionBuilder site's metadata using the **GitHub web interface** and **Visual Studio Code** (VS Code). You can repeat these steps whenever you make a change to your metadata that you would like to see reflected in your live site.

**This walkthrough assumes you have already set up a CollectionBuilder site and need to update your metadata file.** If you need help setting up a CollectionBuilder site, please visit our [CollectionBuilder-GH Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/gh-walkthrough/), [CollectionBuilder-SHEETS Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/sheets-walkthrough/), or [CollectionBuilder-CSV Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/csv-walkthrough/) depending on which [CollectionBuilder template](https://collectionbuilder.github.io/cb-docs/docs/templates/) you are interested in using.

{:.alert .alert-blue}
**Are you a VS Code user?** If you are using VS Code for your CollectionBuilder project, feel free to jump to [Part 2](#part-2-updating-metadata-using-visual-studio-code) of this walkthrough.

## Part 1: Updating Metadata Using the GitHub Web Interface

This part of the walkthrough is recommended for when you are using the GitHub web interface for editing your site, which is most often used for the **CollectionBuilder-GH** and **CollectionBuilder-SHEETS** templates.

### 1. Update your metadata spreadsheet

- Edit your metadata file in **Google Sheets** (e.g., adding additional items to your metadata, removing items, editing metadata fields, etc.).

{:.alert .alert-green}
**Note:** When updating your metadata, it is easiest to edit the Google Sheet as opposed to editing the CSV file in your repository. 

### 2. Download the updated metadata spreadsheet as a CSV file

- Download the updated metadata spreadsheet as a .csv file by clicking **File** → **Download** → **Comma Separated Values (.csv)**

{% include feature/image.html img="download-metadata.gif" alt="User downloading the Google Sheet as a CSV file" border=true width="80%" %}

### 3. Rename the CSV file as **the exact same file name** as the CSV file already in your repository

- Locate the updated CSV file you just downloaded in the **Downloads** folder on your computer. 

{:.alert .alert-red}
**Warning: Do not open the CSV file in Microsoft Excel** If you do, Excel often scrambles your UTF-8 encoding and/or your data (if you see weird dates, Excel might be the culprit). Excel cannot correctly export a CSV for use with CollectionBuilder, which is why we recommend Google Sheets or Office Libre.

- **Without opening the CSV file**, rename the file to be exactly the same file name as the CSV file already in your repository. 

- If you forget what you named the file previously, you can check the **COLLECTION SETTINGS** section of your `_config.yml` file.

- For CollectionBuilder-SHEETS, your metadata file name will be included after `metadata-csv:` and for CollectionBuilder-GH, your metadata file name will be included after `metadata:` without the .csv extension.

For example, in CollectionBuilder-SHEETS:

```yaml
metadata-csv: /assets/watkins.csv
```

In CollectionBuilder-GH:

```yaml
metadata: psychiana-demo
```

### 4. Reupload your new metadata file

- Visit the homepage of your repository on [github.com](https://github.com/){:target="_blank" rel="noopener"}.

- If you are using CollectionBuilder-GH, click on the **"_data"** folder. (If you are using CollectionBuilder-SHEETS, click on the **"assets"** folder).

- On the folder page, click the **"Add file"** button and select **"Upload files."**

- Click **"Choose your files"** and navigate to the location of your renamed metadata CSV (probably in "Downloads"). 

{% include feature/image.html img="upload-metadata.gif" alt="User clicking on add file button and then upload files" border=true width="80%" %}

- Ensure the file name is _exactly the same_ as your previous version of the metadata CSV and select the file.

### 5. Commit your changes

- Scroll down to the **"Commit changes"** box, write a short commit message describing what you did (e.g., **"Update metadata"**), and then click the green "Commit changes" button

- This will replace your old metadata file with the new metadata file. Your GitHub Pages site will automatically rebuild to reflect the changes you made.

<hr>

## Part 2: Updating Metadata Using Visual Studio Code

This part of the walkthrough is recommended for when you are using VS Code for editing your site, which is most often used for the **CollectionBuilder-CSV** template.

### 1. Use GitHub Desktop to open your repository in VS Code

- Check to make sure you are in the correct repository by viewing the top left section of GitHub Desktop. To switch between repositories, locate the **Current Repository** dropdown, and select the repository you'd like to open. 

- In the box that says **Open the repository in your external editor**, click the button that says **Open in Visual Studio Code**.

{% include feature/image.html img="open-vs-code.gif" alt="GitHub Desktop user clicking on Open in Visual Studio Code button to open VS Code application" border=true width="80%" %}

### 2. Update your metadata spreadsheet

- Edit your metadata file in Google Sheets (e.g., adding additional items to your metadata, removing items, editing metadata fields, etc.).

### 3. Download the updated metadata spreadsheet

- Download the updated metadata spreadsheet as a .csv file by clicking **File** → **Download** → **Comma Separated Values (.csv)**

{% include feature/image.html img="download-csv-metadata.gif" alt="Google Sheets user clicking on File, Download, and Comma Separated Values to download metadata as a csv file." border=true width="80%" %}

### 4. Open the updated CSV file in Visual Studio Code

- Locate the CSV file in the Downloads folder on your computer. 

{:.alert .alert-red}
**Warning: Do not open the CSV file in Microsoft Excel** If you do, Excel often scrambles your UTF-8 encoding and/or your data (if you see weird dates, Excel might be the culprit). Excel cannot correctly export a CSV for use with CollectionBuilder, which is why we recommend Google Sheets or Office Libre.

- Right click the file and then click **Open With...** → **Visual Studio Code**.

{% include feature/image.html img="open-vs-code-csv-metadata.gif" alt="User right clicking and opening CSV file with Visual Studio Code" border=true width="80%" %}

{:.alert .alert-yellow}
**Note:** If Visual Studio Code does not show up in your list of recommended applications, click **"Other..."** and then search for **"Visual Studio Code"** in your Finder or file explorer.

### 5. Select all the text in the updated CSV file and copy it

- Once you have the CSV file opened in Visual Studio Code, hit **Command+A** (on Mac) / **Ctrl+A** (on Windows) to select all the text.

- Next, hit **Command+C** (on Mac) / **Ctrl+C** (on Windows) to copy all the text. Or, right click the text and then click **"Copy"**.

{% include feature/image.html img="copy-metadata-vs-code.gif" alt="User selecting all text in a CSV file in VS Code and then copying the text" border=true width="80%" %}

### 6. Paste the copied text over the old metadata CSV file and save

- Click on the old version of your metadata file in your **"_data"** folder to open the file. 

{% include feature/image.html img="open-current-metadata-file.gif" alt="Visual Studio Code user expands the data folder and then clicks on the current metadata file to open it" border=true width="80%" %}

- Press **Command+A** (on Mac) / **Ctrl+A** (on Windows) to select all the text.

- Next, hit **Command+V** (on Mac) / **Ctrl+V** (on Windows), or right click the text and click **"Paste"**, to paste over the text with the text from the updated metadata file.

{% include feature/image.html img="paste-metadata-vs-code.gif" alt="User selecting all text in a CSV file in VS Code and then pasting over the text" border=true width="80%" %}

- Finally, press **Command+S** (on Mac) / **Ctrl+S** (on Windows) to save the file. This will update your old metadata file with the changes from the new metadata file.

### 7. Commit and push your changes

- In VS Code, click on the **"Source Control"** icon, i.e. the network icon on the left side.

- Changed files will be listed under **"Changes."** Hover over the CSV file name and click on the plus icon to stage the change. Once added, the file will move to a new list **"Staged Changes"** and it is ready to commit.

- Click in the text box at the top labeled **"Message."** Type your "commit message" into the box (in this case something like, **"Update metadata"**).

- Click the blue **"Commit"** button below the message box to commit the change.

{% include feature/image.html img="commit-push-vs-code.gif" alt="Visual Studio Code user adds a changed file to the staged changes list, makes a commit, and then hits the blue sync changes button" border=true width="80%" %}

- To Push your local changes up to GitHub, click the blue **"Sync Changes"** button. This will sync your local changes with the GitHub repository.

{:.alert .alert-green}
**Metadata Tips:** Need help with editing your metadata? Check out our guide to [formatting your metadata](https://collectionbuilder.github.io/cb-docs/docs/metadata/formatting/), as well as our documentation on [Metadata for CB-CSV](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/) and [Metadata for CB-GH and CB-SHEETS](https://collectionbuilder.github.io/cb-docs/docs/metadata/gh_metadata/).