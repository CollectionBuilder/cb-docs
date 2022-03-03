---
title: Too Quick Start
nav_order: 12
---

# Too Quick Start

If you are familiar with Jekyll and GitHub, the basic concepts and set up of CollectionBuilder will be pretty straightforward to understand.
Instructions below provide the *way too fast* steps to creating a collection.

## CollectionBuilder-GH

1. Create a new project repository using the [CollectionBuilder-GH](https://github.com/CollectionBuilder/collectionbuilder-gh) template by clicking the "Use this template" button.
2. Copy the [Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/copy?usp=sharing).
3. Follow the formatting of the example record in the template to fill in metadata for your own collection objects.
4. Upload your collection files into the "objects" folder in your repository (.jpg, .png, .pdf, or .mp3).
5. Upload your collection metadata as CSV to the "_data" folder in your repository.
6. Edit the "_config.yml" with your site information.
7. Activate GitHub Pages for the repository.
8. Check out your site via the link provided on your repository's settings page!

## CollectionBuilder-CONTENTdm

1. Make sure you have Git, Ruby, Jekyll, and a text editor installed on your computer.
2. Create a new project repository using the [CollectionBuilder-CONTENTdm](https://github.com/CollectionBuilder/collectionbuilder-contentdm) template by clicking the "Use this template" button.
3. Clone your repository to your local computer.
4. Check the [Metadata Template](https://docs.google.com/spreadsheets/d/14iWUEoAJ6T9WDqlPnIHRN7M8-YgmMV4_bjFPVuSZ0yk/copy?usp=sharing).
5. Export your collection metadata from CONTENTdm (CDM Admin > Collections > Export), using the "Tab-delimited" option with the "Return field names in first record" option checked.
6. Transform your CDM metadata using OpenRefine or Google Sheets to include the fields required by CollectionBuilder.
7. Save/export your metadata as a CSV and copy into the "_data" folder of your repository.
8. Edit the "_config.yml" with your site and CDM information.
9. Open up a terminal in your directory and type `bundle exec jekyll s` to serve up your website on a local dev server.
10. Finish customizing your site with "theme.yml" and other config CSVs.
11. To build for deployment, use command `rake deploy`.
12. Open up the "_site" folder, copy all contents to your web server!
