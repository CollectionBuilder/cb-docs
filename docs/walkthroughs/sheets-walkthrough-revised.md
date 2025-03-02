---
title: Sheets Walkthrough Revised
parent: Walkthroughs
nav_order: 7
lazyload: true
---
# Building Your Digital Collection with CollectionBuilder-Sheets

## Before You Begin
- You'll need:
  - A Google account for working with Google Sheets
  - A modern web browser (Chrome, Firefox, Edge, or Safari)
  - About 30-45 minutes to complete this walkthrough
  - No coding or command line experience necessary

## What You'll Build
In this walkthrough, you'll create a digital collection website using the Carleton Watkins Mine Interiors Collection as an example. In two parts, you'll learn how to:

1. Set up your collection's metadata (part 1)
2. Create a development version for testing (part 1)
3. Share your work with collaborators (part 1 +2)
4. Publish a permanent collection site (part 2)

## Step 1: Setting Up Your Collection Metadata

### 1.1 Access the Demo Spreadsheet
- Navigate to the [Watkins Digital Collection Metadata](link) spreadsheet
- When the page loads, Google Sheets will automatically prompt you to make a copy
- Click the "Make a copy" button to create your own version
- The spreadsheet will open in a new tab under your Google account

### 1.2 Verify Your Spreadsheet
- Look at the bottom of your Google Sheet
- Locate the sheet named "watkins_cbdemo"
- Confirm it's the first tab in your spreadsheet
- If it's not first, drag the tab to the leftmost position

## Step 2: Publishing Your Metadata

### 2.1 Start the Publishing Process
- In your Google Sheet, click on "File" in the top menu
- Select "Share" from the dropdown menu
- Choose "Publish to web" from the submenu
- A new window titled "Publish to the web" will appear

{% include feature/image.html img="publish-sheet-web.gif" alt="User clicks on File, Share, and then Publish to web to publish their Google Sheet online" border=true width="80%" %}

### 2.2 Configure Publishing Settings
- In the "Publish to the web" window:
  - Click the first dropdown menu and select "Entire Document"
  - Click the second dropdown menu and select "Comma-separated values (.csv)"
  - You should now see both settings displayed in the window

### 2.3 Complete Publication
- Click the green "Publish" button
- If you see a confirmation message asking "Are you sure you want to publish this selection?", click "OK"
- Wait for the publication link to appear
- Verify that your link ends with "output=csv"

{% include feature/image.html img="publish-button-sheets.gif" alt="User clicks on Entire Document and Comma-separated values dropdown options and then clicks publish button" border=true width="80%" %}

### 2.4 Set Up Auto-Updates
- Before closing the window, look for the checkbox labeled "Automatically republish when changes are made"
- Ensure this box is checked
- This setting allows your website to update when you make changes to your metadata

### 2.5 Save Your Publication Link
- Copy the entire publication link
- Store it somewhere easily accessible (like a text file or note)
- Make sure the link ends with "output=csv" -- if it doesn't return to step 2.1 and try again, making sure you select "Comma-separated Values (.csv)" on the publish to the web page.
- You'll need this link in the next step

{:.alert .alert-info}
**Need to Stop Sharing?** You can unpublish your sheet at any time by clicking "Published content & settings" and then "Stop publishing" in the same menu.


## Step 3: Creating Your Prototype Site

### 3.1 Access the Template
- Visit the [CollectionBuilder-Sheets default template site](https://collectionbuilder.github.io/collectionbuilder-sheets/)
- The template will open in a new browser tab
- You should see a form at the top of the page

### 3.2 Connect Your Metadata
- Look for the section labeled "Use Metadata CSV Link (e.g. Google Sheet)"
- Click inside the text box
- Paste your publication link from Step 2
- Click the "Submit" button to load your collection

{% include feature/image.html img="submit-csv-sheets.gif" alt="Demonstration of pasting the Google Sheet link into the metadata form field and clicking submit" border=true width="80%" %}

### 3.3 Verify Your Site
- Wait for the page to reload
- You should see images and information from the Watkins Collection
- Keep this tab open - you'll need it for testing changes

{% include feature/image.html img="sheets-site-populated.gif" alt="View of the prototype site showing the homepage populated with Watkins collection items and metadata" border=true width="80%" %}

{:.alert .alert-yellow}
**Important Note About Object Files:** Your collection items (images, PDFs, etc.) must be accessible on the web for them to display in your site. You can:
- Host files on your organization's server
- Use a service like [Digital Ocean](https://www.digitalocean.com/products/spaces) or [Reclaim Hosting](https://reclaimhosting.com/)
- [Host files using GitHub Pages](https://medium.com/@jeftachibiya360/how-to-host-images-for-your-website-on-github-a98d917284c5)

## Step 4: Testing Live Metadata Updates

### 4.1 Make a Test Change
- Return to your Google Sheet from Step 1
- Find the row with `objectid` "watkins0"
- Locate the "description" column
- Add the text "This is a test change" to the end of the existing description

{% include feature/image.html img="edit-cell.gif" alt="Demonstration of adding test text to a description field in Google Sheets" border=true width="80%" %}

### 4.2 View Your Change
- Go back to your prototype site tab
- Click "Browse" in the top navigation menu
- In the search box under "Browse Items", type "Anaconda Mine 1000 ft. level East [no. 1163]"
- Click on the search result that appears

{% include feature/image.html img="find-item-sheets.gif" alt="Demonstration of searching for and selecting the Anaconda Mine item in the browse interface" border=true width="80%" %}

### 4.3 Refresh Your Content
- On the item page, locate the "Refresh metadata" button in the top right corner
- Click the button
- Check the description field for your test change

{% include feature/image.html img="test-change-sheets.gif" alt="Demonstration of clicking the Refresh metadata button and seeing the updated description appear" border=true width="80%" %}

{:.alert .alert-yellow}
**Note:** Changes may take 1-2 minutes to appear due to Google's servers updating. If you don't see your change, wait a minute and try refreshing again.

## Step 5: Sharing Your Test Site

### 5.1 Create Your Shareable Link
- Start with the base URL: `https://collectionbuilder.github.io/collectionbuilder-sheets/`
- Add `?csv=` to the end
- Paste your full metadata URL after that

Your final URL should look like this:

https://collectionbuilder.github.io/collectionbuilder-sheets/?csv=**your metadata URL here**

### 5.2 Verify Your Link
- Copy your complete URL
- Open a new browser tab
- Paste and test the link
- Confirm your collection loads correctly


{:.alert .alert-red}
**Warning:** Your metadata URL cannot contain any & symbols (additional query parameters). These will cause the site to fail to load properly.

### 5.3 Share with Collaborators
- Share your complete URL for viewing the site
- Share your Google Sheet for collaborative metadata editing
- Remember that changes to the sheet will appear on the test site after using the "Refresh metadata" button

<hr>

# Part 2: Creating Your Permanent Collection Site

## Before You Begin Part 2
- You should have:
  - Completed your metadata work in Google Sheets
  - Tested your site using the prototype from Part 1
  - About 30 minutes to complete this section
- You'll be creating a permanent website using:
  - Your finalized metadata
  - The CollectionBuilder-Sheets Template
  - GitHub Pages (free web hosting)

## Step 6: Setting Up GitHub Access

### 6.1 Create Your GitHub Account
- Visit [GitHub.com](https://github.com)
- Click the "Sign up" button
- Complete the registration process
- Check your email to verify your account
- Note: You only need a free account - no paid features required

{% include feature/image.html img="create-github-account.gif" alt="Demonstration of signing up for a GitHub account, showing the registration form and signup button" border=true width="80%" %}

{:.alert .alert-info}
**Video Guide Available:** Want to see this step in action? Watch our [video walkthrough](https://www.youtube.com/watch?v=M5rvu_3GtIQ&list=PLt9zT3xACQo7q72AfphJzH41OiPcZrF4H&index=1&ab_channel=CollectionBuilder)

## Step 7: Creating Your Collection Repository

### 7.1 Access the Template
- Make sure you're logged into GitHub
- Visit the [CollectionBuilder-Sheets template](https://github.com/CollectionBuilder/collectionbuilder-sheets)
- Click the green "Use this template" button
- Select "Create a new repository" from the dropdown

{% include feature/image.html img="create-sheets-repo.gif" alt="Demonstration of clicking Use this template button and selecting Create a new repository" border=true width="80%" %}

### 7.2 Configure Your Repository
- Keep the "Public" option selected
- Choose a repository name:
  - Use only lowercase letters
  - Avoid spaces (use hyphens instead)
  - Example: "watkins-demo"
- Click "Create repository"

{% include feature/image.html img="generate-sheets-repo.gif" alt="Demonstration of naming the repository, selecting Public, and clicking Create repository button" border=true width="80%" %}

## Step 8: Managing Collection Objects

{:.alert .alert-yellow}
**Note for This Tutorial:** The demo metadata already includes external links to objects, so you can skip the file upload steps. However, read through this section to understand how to add objects for your own collections.

### 8.1 When to Add Objects Directly
- Add objects to your repository if:
  - Your items aren't hosted elsewhere online
  - You don't have a separate web server
  - You want GitHub to host your files

### 8.2 Adding Objects to Your Repository
1. On your repository homepage:
   - Click the "objects" folder
   - Click "Add file"
   - Select "Upload files"

2. Select your files:
   - Click "Choose your files"
   - Navigate to your object files
   - Select all files:
     - Click the first file
     - Hold Shift
     - Click the last file
   - Press Enter to begin upload

{:.alert .alert-red}
**Important:** Upload individual files only - do not upload zip files. GitHub needs direct access to each object file.

### 8.3 Commit Your Changes
- Scroll to the bottom of the page
- In the "Commit changes" box:
  - Write a brief description (e.g., "Add collection objects")
  - Click the green "Commit changes" button
- Wait for the upload to complete
## Step 9: Connecting Your Google Sheet to Your Site

{:.alert .alert-green}
**Choose Your Path:** Follow this step if you're creating an ongoing collaborative site where your metadata is still being edited. If you're ready for a permanent site, skip to Step 11.

### 9.1 Access Your Configuration File
- On your repository homepage:
  - Find and click the "_config.yml" file
  - Click the pencil icon (edit button)

{% include feature/image.html img="edit-file-sheets.gif" alt="Demonstration of locating and clicking the edit button on the _config.yml file" border=true width="80%" %}

### 9.2 Update Collection Settings
1. Find the "COLLECTION SETTINGS" section
2. Locate the `metadata-csv` line
3. Paste your Google Sheet URL:
```yaml
metadata-csv: https://docs.google.com/spreadsheets/d/e/YOUR-PUBLISHED-SHEET-URL/pub?output=csv

### 9.3 Customize Site Information
1. Find the "SITE SETTINGS" section
2. Update these key fields:
```yaml
title: Your collection name (e.g., "Watkins Demo Collection")
tagline: A brief description
description: A longer description
author: Your name or organization
## 9. Link to your Google Sheet in the _config.yml file.

{:.alert .alert-green}
**Note:** This step is recommended if you are working on an ongoing collaboration where your Google Sheet is not completed yet. If your collaborative metadata work is done and you are ready to publish the site in a more permanent and secure way, please move on to [Step 11](#11-add-your-metadata-csv-file-to-the-assets-folder).

- On the homepage of your repository, click on the **"_config.yml"** file.

- Click on the edit button (the pencil icon) to edit the file.

{% include feature/image.html img="edit-file-sheets.gif" alt="User clicks on the pencil icon to edit the config.yml file" border=true width="80%" %}

- Under the **COLLECTION SETTINGS** section, where it says `metadata-csv`, paste the full URL to your CSV file, such as a published Google Sheet. (If you need a reminder of how to publish a Google Sheet to the web, see [Step 2](#2-publish-your-google-sheet-to-the-web). 

For example:

```yaml
metadata-csv: https://docs.google.com/spreadsheets/d/e/2PACX-1vRJhe6UcNZXItEtHlxQFOaHBBD2SDU8nyNOAROtcLWLrl83sYaCNBNYHOvhM_xZ7SVnnOrjCzo6U5_o/pub?output=csv
``` 

- Under the **SITE SETTINGS** section, replace the `title` placeholder text with a title of your choice. 

For example:

```yaml
title: Watkins Demo Collection
``` 

- **Optional:** Write a new `tagline`, `description`, and `author`.

- Scroll down to the **Commit changes** box, write a short commit message describing what you did (e.g. Update site settings), and then click the green **Commit changes** button.

## 10. See your live changes by editing the Google Sheet.

- You can make changes to the metadata spreadsheet that you published to the web and view the changes on your live site. 

- Need a reminder on how to do this? Visit [Step 4](#4-view-live-changes-to-your-metadata) to practice editing the metadata sheet and viewing changes live with the **Refresh metadata** option.

{:.alert .alert-green}
**Ready to publish:** The following steps are for when your collaborative metadata work is done and you are ready to publish the site in a more secure way.

## 11. Add your metadata CSV file to the "assets" folder.

- Download your Google Sheet as a .csv file by clicking **File** → **Download** → **Comma Separated Values (.csv)**.

{% include feature/image.html img="download-sheets-csv.gif" alt="User downloads metadata as a csv file by clicking File, Download, and Comma separated values" border=true width="80%" %}

- Locate the CSV file on your computer (probably in the Downloads folder).

{:.alert .alert-red}
**Warning:** Do not open the CSV file to avoid issues with Microsoft Excel scrambling your UTF-8 encoding. **Excel cannot correctly export a CSV** for use with CollectionBuilder.

- **Without opening the CSV file**, rename it using all lowercase letters, no spaces, and no special characters (e.g. **watkins-demo.csv**)

- On the homepage of your repository on GitHub.com, click on the **"assets"** folder.

- Then click the **Add file** button and select **Upload files**.

{% include feature/image.html img="add-file-sheets.gif" alt="User clicking on add file button and then upload files" border=true width="80%" %}

- Click **Choose your files**, navigate to the location of your metadata CSV (probably in your Downloads folder), and select the file. Press Enter to begin the upload.

- Scroll down to the **Commit changes** box, write a short commit message describing what you did (e.g. Add metadata file), and then click the green **Commit changes** button.

## 12. Configure site settings.

- Under the **COLLECTION SETTINGS** section, where it says `metadata-csv`, put the relative path to your CSV in the "assets" folder following the pattern of `/assets/filename.csv`.

For example:

```yaml
metadata-csv: /assets/watkins-demo.csv
```

- Next, scroll down to the **BUILD SETTINGS** section. Find where it says `development-mode: true`. Replace `true` with `false`. This will turn off the ability to change the metadata on your live site.

- Scroll down to the **Commit changes** box, write a short commit message describing what you did (e.g. Update site settings), and then click the green **Commit changes** button.

## 13. Publish your site using GitHub Pages.

{:.alert .alert-green}
**Note:** The following steps are the same as the steps in the [CB-GH Walkthrough](https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/gh-walkthrough/){:target="_blank" rel="noopener"} for publishing a GitHub Pages site.

- On your repository homepage, click the **Settings** tab in the top right and then click **Pages** in the left side menu. 

{% include feature/image.html img="settings-pages-sheets.gif" alt="User clicks on Settings and then Pages" border=true width="80%" %}

- Under **Source** leave the dropdown option as **Deploy from a branch**. 

- Use the dropdown to change from **“none”** to **“main”** (leave the folder option as **“/root”**). Then click the **Save** button.

{% include feature/image.html img="generate-site.gif" alt="User generating the GitHub pages site" border=true width="80%" %}

- It will take a few minutes for your site to go live. You will see a message that your site is currently being built.

{% include feature/image.html img="site-build.png" alt="Screenshot text reads 'Your GitHub pages site is currently being built from the main branch.'" border=true width="80%" %}

- After waiting a bit, refresh the page. If the build is successful, an alert will appear providing the URL to your live site. The URL will follow the pattern: **https://username.github.io/repository-name**

{% include feature/image.html img="sheets-site-live.png" alt="Screenshot text reads 'Your site is live at https://juliastone0729.github.io/watkins-demo/." border=true width="80%" %}

- You can visit this URL to see changes to your live site. To ensure any changes you commit are complete, look for a _green check mark_ instead of an _orange dot_ in the Code section of your repository’s homepage.

**Tip:** You may need to refresh the collection website for the changes to display.

## 14. Add a featured image.

- On your repository homepage, click on the **"_data"** folder and then click on the **"theme.yml"** file. 

- Under the **HOME PAGE** section, replace the `objectid` placeholder text with the `objectid` of an image in the collection that you want to be the top image on the homepage. 

For example:

```yaml
featured-image: watkins37
```

- Visit your live site and use the Browse page to view potential featured images. 

{% include feature/image.html img="browse-sheets-site.gif" alt="User browses through the items on the digital collection site" border=true width="80%" %}

- To find the `objectid` for an image, click on the image title and then check the end of the URL of the item page. The URL will include the `objectid` after **id=**. 

{% include feature/image.html img="objectid-watkins.gif" alt="User clicking on an item and then highlighting the object ID in the URL" border=true width="80%" %}

For example:

For the URL, https://juliastone0729.github.io/watkins-demo/item.html?id=**watkins37**, the `objectid` is **watkins37**.

**Tip:** It is best to choose a large horizontal image if possible. 

- After you have updated the featured image, write your commit message (e.g. Add featured image) and commit your changes. View your changes by visiting your site’s URL.

## 15. Edit the About Page.

- On your repository homepage, click on the **"pages"** folder and then on the **"about.md"** file. 

- Write some text on this page using [Markdown](https://collectionbuilder.github.io/cb-docs/docs/glossary/#markdown){:target="_blank" rel="noopener"}. 

- **Optional:** Practice using example code from our [Feature Includes Bonanza page](https://collectionbuilder.github.io/collectionbuilder-gh/feature_options.html){:target="_blank" rel="noopener"}. 

- After you are done editing the About page, write your commit message (e.g. Edit About page) and commit your changes. View your changes by visiting your site’s URL.

## 16. Explore potential next steps.

Your collection website is complete! To implement additional **Customization Options**, your next steps could be:

- [Customizing your theme options](https://collectionbuilder.github.io/cb-docs/docs/theme/)
- [Configuring your pages](https://collectionbuilder.github.io/cb-docs/docs/customization/)
- [Adding more pages](https://collectionbuilder.github.io/cb-docs/docs/pages/add_page/)

If you want to get into more **Advanced Options**, you could explore:
- [Including a TimelineJS feature](https://collectionbuilder.github.io/cb-docs/docs/advanced/timelinejs/)
- [Creating new cloud pages](https://collectionbuilder.github.io/cb-docs/docs/advanced/cloudpage/)
- [And more advanced options!](https://collectionbuilder.github.io/cb-docs/docs/advanced/)

{:.alert .alert-blue}
To build your own custom digital collection website, you can follow these steps again after [creating your own metadata file](https://collectionbuilder.github.io/cb-docs/docs/metadata/gh_metadata/).

<!---{:.alert .alert-blue}
Want to create a collection using our CollectionBuilder-CSV Template? Check out our **CB-CSV Walkthrough** _(link to CSV Walkthrough here)_.-->
