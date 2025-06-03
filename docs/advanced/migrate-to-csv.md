---
title: Migrate CB-GH to CB-CSV
parent: Advanced
nav_order: 14
---

# Migrate CollectionBuilder-GH project into CollectionBuilder-CSV

Sometimes you will have created a prototype collection using CB-GH or CB-Sheets and find that you would like to continue developing it in the more robust CB-CSV template. 
It is straight forward to migrate your project by updating your metadata and copying over your objects into a new CB-CSV project (in most cases this is much easier than updating the template in your existing repository!).

First, create a new project repository from [CB-CSV template](https://github.com/CollectionBuilder/collectionbuilder-csv).

## Copy Objects

Copy the files in your CB-GH project "objects" folder.
Paste them into the "objects" folder in your new CB-CSV project.

Open a terminal and run `rake generate_derivatives` (see [Objects Derivatives for more info](/cb-docs/docs/objects/derivatives/)).

In ".gitignore", comment out `objects/`.

Commit the objects into the repository.

## Update Metadata

Open your existing CB-GH metadata in Sheets or OpenRefine.
You will need to add [CB-CSV's technical metadata fields](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/#strongly-suggested-fields), which can be done using equations to transform your existing columns (see [Recipes for generating Object Location Fields](/cb-docs/docs/metadata/object-paths/)).

- "display_template": from your CB-GH "format" field, create a new column "display_template". Edit all "image/jpeg" to `image`, "application/pdf" to `pdf`, "
- "object_location" From your CB-GH "filename" field, create a new column "object_location". 
    - For items with a local filename, put `/objects/` in front of the filename value.
    - For items with a full URL, leave as is.
    - For items with "youtubeid" or "vimeoid", use the id to create the full youtube link in "object_location".
- Set up "image_small" and "image_thumb" from "filename".

## Transfer Configurations

Carefully compare the various configuration files in your CB-GH project with the default ones in your new CB-CSV project.
CB-CSV will have slightly MORE options than the CB-GH versions, so they can not be just copied over. 
Transfer the configurations values from your CB-GH project into CB-CSV where they match.
Check over these files:

- "_config.yml"
- "_data/theme.yml"
- Configs in "_data/": "config-browse.csv", "config-map.csv", "config-metadata.csv", "config-nav.csv", "config-search.csv", "config-table.csv", and "config-theme-colors.csv"
- "_sass/_custom.scss"

## Transfer Content Pages and Customizations

Carefully check over any pages that you have directly customized or added content to.
Most commonly this would include:

- "pages/about.md"
- "_layouts/home-infographic.html"

## Setup to Deploy with GitHub Actions

For the [docs for deploying using GitHub Actions](/cb-docs/docs/deploy/actions/).
