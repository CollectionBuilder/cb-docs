---
title: Collection Settings
parent: Site Config
nav_order: 3
---

# Collection Settings

This section of "_config.yml" connects your metadata to your CollectionBuilder site so that your items can be pulled in.
Metadata specified in this value will drive the browsing features and item page generation--this is the true heart of your CollectionBuilder project!

## Collection Metadata

This option is an important place where GH and Sheets diverge (the only place really!).
GH and CSV **require** the `metadata` option (which is not used in Sheets). 
Sheets **uses** the `metadata-csv` option instead (not used in GH or CSV).
Because of the unique way Sheets handles metadata, we have kept these options separate.
{:.alert .alert-blue}

### metadata: 

- *GH and CSV only*
- The filename **without the extension** of your metadata CSV file (contained in the "_data/" folder).
- Metadata specified in this value will drive the browsing features and item page generation--this is the true heart of your CollectionBuilder project!
```yaml
metadata: boxing
```

*To reiterate, notice that the metadata value does **not** have the extension ".csv", this is a common error to avoid!*
The second most common error is spelling or case not **exactly** matching the CSV file--double check those filenames! 

### metadata-csv: 

- *Sheets only!* This value is generally used, but is not required--see [development mode]({{ '/docs/config/additional/#development-mode-sheets-only' | relative_url }}) for details.
- The full URL to your metadata CSV file or relative path + filename of CSV in your project repository 
- If using a CSV contained with in the project, use a relative path starting with a slash `/`.
```yaml
metadata-csv: /assets/demo-metadata.csv
```
- If using a published Google Sheet, use the full URL provided
```yaml
metadata-csv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSn7AA-cbsXT3_nNUGftc1ab-CKXOJHMQCIENeR9NHElbyI9_qA99o0-HNZdG04v-M2_N21bUe_krQQ/pub?output=csv"
```
- If using a CSV in another GitHub repository, use the raw link
```yaml 
metadata-csv: "https://raw.githubusercontent.com/CollectionBuilder/collectionbuilder-sample-data/main/psychiana_cbdemo_gh.csv"
```

------

## Page Generation Settings (CSV only, optional!)

CollectionBuilder-CSV uses a custom Jekyll plugin to generate individual HTML pages for each item (row) in your metadata CSV.
By default, the "CollectionBuilder Page Generator" plugin needs no additional configuration--it will automatically use the value set in `metadata` to generate pages.

*In advanced use cases only*, you may want to tweak the CB defaults or generate pages from more than one data file. 
The values under the `page_gen` key can be used to customize page generation. 

For details, please see "docs/plugins.md" in the project template you are using.
