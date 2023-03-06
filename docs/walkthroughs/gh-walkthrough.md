---
title: GH Walkthrough
parent: Walkthroughs
nav_order: 1
lazyload: true
---

# CollectionBuilder-GH Walkthrough

This walkthrough provides steps for creating an example digital collection using demo metadata from the University of Idaho's [Psychiana Digital Collection](https://www.lib.uidaho.edu/digital/psychiana/), the **CollectionBuilder-GH Template**, and **GitHub Pages**.

{:.alert .alert-yellow}
**Note:** You will not need to install any software on your computer for this walkthrough, but you will need to create a free GitHub account.

## 1. Create a GitHub account.  

- Visit [GitHub](https://www.github.com) and click the **Sign up** button. You do not need a paid account for using CollectionBuilder. After signing up, check your email to verify your account.

## 2. Create a new repository.

- Log in to your GitHub account and visit the [**collectionbuilder-gh repository page**](https://github.com/CollectionBuilder/collectionbuilder-gh). 

- Click the green **Use this template** button and then the **Create a new repository** dropdown option. 

{% include feature/image.html img="use-template.gif" alt="User clicking on use template button and then create a new repository option" border=true width="80%" %}

- Leave the repository as **Public**. Enter a repository name (Ex: **psychiana-demo**) and click **Create repository from template**.

{% include feature/image.html img="create-repository.gif" alt="User entering a repository name and clicking create repository from template button" border=true width="80%" %}

## 3. Prepare your metadata for upload.

- Make a copy of this [**Google Sheet**](https://docs.google.com/spreadsheets/d/1x48Te3duPAxh53foEihQVKTfCKUjaCCbH7TrMMd_yU4/copy) of demo metadata. 

- Download the spreadsheet as a CSV file by clicking **File** → **Download** → **Comma Separated Values (.csv)**

{% include feature/image.html img="download-metadata.gif" alt="User downloading the Google Sheet as a CSV file" border=true width="80%" %}

- Locate the CSV file on your computer (probably in the Downloads folder). 

{:.alert .alert-red}
**Warning:** Do not open the CSV file to avoid issues with Microsoft Excel scrambling your UTF-8 encoding. **Excel cannot correctly export a CSV** for use with CollectionBuilder.

- **Without opening the CSV file**, rename it using all lowercase letters, no spaces, and no special characters (Ex: **psychiana-demo.csv**)

## 4. Upload your metadata file.

- On the homepage of your repository on GitHub.com, click on the **"_data"** folder. 

- Then click the **Add file** button and select **Upload files**. 

{% include feature/image.html img="upload-metadata.gif" alt="User clicking on add file button and then upload files" border=true width="80%" %}

- Click **Choose your files**, navigate to the location of your metadata CSV (probably in your Downloads folder), and select the file. Press Enter to begin the upload.

- Scroll down to the **Commit changes** box, write a short commit message describing what you did (Ex: Add demo metadata), and then click the green **Commit changes** button.

{:.alert .alert-blue}
If you want to learn about creating, updating, and uploading your own metadata, visit our [**CollectionBuilder-GH Metadata Documentation**](https://collectionbuilder.github.io/cb-docs/docs/metadata/gh_metadata/).

## 5. Upload your objects.

- Download the [**demo-objects.zip**](https://www.lib.uidaho.edu/collectionbuilder/demo-objects.zip) file (includes image files, PDFs, and mp3s). 

- Double click on this file to unzip it.

- On your repository homepage, click on the **"objects"** folder, find the unzipped demo-objects folder, and drag your mouse down the list to select all the objects to add. Press Enter to begin the upload.

{:.alert .alert-red}
**Warning:** Make sure to select all the object files in the demo-objects folder instead of just uploading the demo-objects.zip file.

- Write your commit message (Ex: Add collection objects) and commit your changes.

## 6. Configure your site settings.

- On your repository homepage, click on the **"_config.yml"** file.

- Click on the edit button (the pencil icon) to edit the file. 

{% include feature/image.html img="edit-file.gif" alt="User clicking on pencil icon to edit the file" border=true width="80%" %}

- Under the **SITE SETTINGS** section, replace the `title` placeholder text with a title of your choice. 

For example:

```yaml
title: Psychiana Demo Collection
``` 

- **Optional:** Write a new `tagline`, `description`, and `author`.

- Under the **COLLECTION SETTINGS** section, replace the `metadata` placeholder text with the filename of your uploaded metadata file **_without the CSV extension_**. 

For example:

```yaml
metadata: psychiana-demo
``` 

- Write your commit message (Ex: Update site settings) and commit your changes.

## 7. Generate your site.

- On your repository homepage, click the **Settings** tab in the top right and then click **Pages** in the left side menu. 

{% include feature/image.html img="GHpages.gif" alt="User clicking on Settings and then Pages" border=true width="80%" %}

- Under **Source** leave the dropdown option as **Deploy from a branch**. 

- Use the dropdown to change from **“none”** to **“main”** (leave the folder option as **“/root”**). Then click the **Save** button.

{% include feature/image.html img="generate-site.gif" alt="User generating the GitHub pages site" border=true width="80%" %}

It will take a few minutes for your site to go live. You will see a message that your site is currently being built.

{% include feature/image.html img="site-build.png" alt="Screenshot text reads 'Your GitHub pages site is currently being built from the main branch.'" border=true width="80%" %}

After waiting a bit, refresh the page. If the build is successful, an alert will appear providing the URL to your live site. The URL will follow the pattern: **https://username.github.io/repository-name**

{% include feature/image.html img="live-site.png" alt="Screenshot text reads 'Your site is live at https://juliastone0729.github.io/psychiana-demo/.'" border=true width="80%" %}

You can visit this URL to see changes to your live site. To ensure any changes you commit are complete, look for a _green check mark_ instead of an _orange dot_ in the Code section of your repository’s homepage.

**Tip:** You may need to refresh the collection website for the changes to display.

## 8. Add a featured image.

- On your repository homepage, click on the **"_data"** folder and then click on the **"theme.yml"** file. 

- Under the **HOME PAGE** section, replace the `objectid` placeholder text with the `objectid` of an image in the collection that you want to be the top image on the homepage. 

For example:

```yaml
featured-image: psychiana005
```

Visit your live site and use the Browse page to view potential featured images. 

{% include feature/image.html img="browse-items.gif" alt="User clicking on browse option in the website navigation bar" border=true width="80%" %}

To find the `objectid` for an image, click on the image title and then check the end of the URL of the item page. The URL will include the `objectid` after **id=**. 

{% include feature/image.html img="find-objectid.gif" alt="User clicking on an item and then highlighting the object ID in the URL" border=true width="80%" %}

For example:

For the URL, https://juliastone0729.github.io/psychiana-demo/item.html?id=**psychiana005**, the `objectid` is **psychiana005**.

**Tip:** It is best to choose a large horizontal image if possible. 

- After you have updated the featured image, write your commit message (Ex: Add featured image) and commit your changes. View your changes by visiting your site’s URL.

## 9. Edit the About Page

- On your repository homepage, click on the **"pages"** folder and then on the **"about.md"** file. 

- Write some text on this page using [Markdown](https://collectionbuilder.github.io/cb-docs/docs/glossary/#markdown). 

- **Optional:** Practice using example code from our [Feature Includes Bonanza page](https://collectionbuilder.github.io/collectionbuilder-gh/feature_options.html). 

- After you are done editing the About page, write your commit message (Ex: Edit About page) and commit your changes. View your changes by visiting your site’s URL.

## 10. Explore potential next steps.

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
