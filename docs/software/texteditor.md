---
title: Get a Text Editor
parent: Software
nav_order: 2
---

# Get a Text Editor

Static web projects like CollectionBuilder are really just a folder of plain text files.
To edit them you will need a good text editor.
Code editors will allow you to work on whole folders of files at once (i.e. your Jekyll project repository) and have built in helpers for syntax highlighting, version control, terminals, search, and even spell check.

If you don't already have a favorite editor, the CollectionBuilder team suggests the very popular, open-source [Visual Studio Code](https://code.visualstudio.com/){:target="_blank" rel="noopener"} (VS Code).
Download VS Code and use their wizard to install with the default options on your computer--then tweak the configuration options and extensions listed in the sections below.

If you are unfamiliar with editors, there is pretty good [VS Code documentation](https://code.visualstudio.com/docs) including videos and reference, but you will learn a lot just working through you CB project!

*These docs will often reference VS Code--however, any text editor will work!*
Many good alternatives exist--if you are looking for a VS Code clone minus Microsoft, check out [VS Codium](https://vscodium.com/) or [Theia IDE](https://theia-ide.org/#theiaide).

*Note to Mac users:*
On macOS Sierra or later, VS Code automatically downloads to the Downloads directory, which can cause problems with updates down the road.
If this applies to you, after installation we recommend moving the VS Code app from Downloads to your Applications directory.
{:.alert .alert-blue}

## Configuring Visual Studio Code

VS Code is incredibly customizable via its settings. 
To configure the editor, click the *gear icon* in the bottom left corner of the VSCode window and choose *Settings*.
The searchable *Settings* pane has information about all the configuration options.

When you first install VS Code, the default settings can be distracting and overwhelming, so **don't be afraid to turn things off!**

We suggest two tweaks to your settings:

- We have found that the "persistent sessions" feature can cause mysterious issues that are difficult to debug, so we suggest turning it off. In Settings, search for "persistent", then *uncheck* the option "Terminal > Integrated: Enable Persistent Sessions".
- *If you are on Windows*, you will want to configure your built in terminal to use Git Bash (rather than Power Shell). Open the build in terminal window using Ctrl + backtick (that little character next to the "1" key). A dropdown is available on the upper left of the terminal pane to switch your terminal. Set it to use Git Bash as default to ensure you can use Jekyll correctly.

## Visual Studio Code Extensions 

VS Code has a tremendous number of extensions that can be added to enhance its functionality. 
For working on CollectionBuilder projects we recommend two extensions:

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker){:target="_blank" rel="noopener"}, which will check your spelling which is handy for content writing!
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv){:target="_blank" rel="noopener"}, highlights CSVs to make them easier to read directly in the editor.
