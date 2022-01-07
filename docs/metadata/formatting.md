---
title: Format Your Metadata
parent: Metadata
nav_order: 6
---

# Formatting Your Metadata

To avoid issues, please ensure you are following these best practices in your metadata spreadsheets:

- **Field Names Should Be Lowercase and Not Contain Special Characters**
    - Before you upload your metadata to CollectionBuilder, it is best practice to make all field names lowercase, since CollectionBuilder expects default fields to be lowercase. Preferably field names should not contain hyphens (`-`), spaces (` `), slashes (`/`, `\`), or special characters (`&`, etc.)--these won't necessarily break things, but might cause issues when fields are passed through javascript code!
- **Use a Semicolon When You Have Multiple Values in a Field**
    - Use a semicolon (`;`) to separate values in multi-valued fields. Many features in the template can split multi-valued fields on `;` to produce visualizations.
- **No Special Characters in ID values**
    - When creating "objectid" and "filename" do not use spaces (` `), slashes (`/`, `\`), and special characters (`&`). Since these values will be used in URLs, they should be only web safe characters.
- **Strip Extra White Space**
    - Ensure there are no overlooked spaces before or after column headers and values. Extra white space can cause unexpected outcomes--it is essential to play close attention to white space when working with your code and metadata. 
- **Always use UTF-8 Encoding**
    - Ruby and Jekyll require the standard UTF-8 encoding. Non-UTF-8 characters can cause breaking errors or unexpected outcomes. Excel does not handle UTF-8 correctly, so avoid using it with metadata in CSV format (only use Excel to edit ".xlsx" files). Google Sheets, OpenRefine, and LibreOffice Calc *will* correctly create UTF-8 CSVs. Take care when transforming data or pasting text to ensure your characters do not become corrupted--this is a common source of build errors in CollectionBuilder!

<div class="alert alert-green" markdown="1">
**Pro Tip:** In Visual Studio Code, there's **an easy way to make your metadata fields lowercase**: 

1. Highlight the first row of your CSV (the row containing field names) 
2. Click the 'Command Palette' option in the View menu 
3. Start typing 'Transform to lowercase'--the option will appear!
</div>