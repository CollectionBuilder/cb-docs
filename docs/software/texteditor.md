---
title: Get a Text Editor
parent: Software
nav_order: 2
---

# Get a Text Editor

Static web projects like CollectionBuilder are just a folder of plain text files.
To edit them you will need a good text editor.
Code editors will allow you to work on whole folders of files at once (i.e. your Jekyll project repository) and have built in helpers for syntax highlighting, version control, terminals, search, and even spell check.

If you don't already have a favorite editor, we suggest the very popular, open-source Visual Studio Code (VS Code, see install notes below).

We will refer to "VS Code" through out CB-Docs--*however, any text editor will work!*
Many good alternatives exist--if you are looking for a VS Code clone minus Microsoft, check out [VS Codium](https://vscodium.com/) or [Theia IDE](https://theia-ide.org/#theiaide).
You can also use a light version of VS Code in your browser without installing anything by opening [vscode.dev](https://vscode.dev/).

## Install VS Code

Download [Visual Studio Code](https://code.visualstudio.com/) and [follow their instructions](https://code.visualstudio.com/docs/getstarted/overview) to install with the default options on your computer.
If you are unfamiliar with editors, there is pretty good [VS Code documentation](https://code.visualstudio.com/docs) including videos and reference, but you will learn a lot just working through you CB project!

*Note to Mac users:* be sure to drag the VS Code app from your Downloads to Applications directory to ensure correct installation!

Next, tweak the configuration options and extensions listed in the sections below to better support working on your CB project.

## Configuring Visual Studio Code

VS Code is incredibly customizable via its settings. 
To configure the editor, click the *gear icon* in the bottom left corner of the VS Code window and choose *Settings*.
The searchable *Settings* pane has information about all the configuration options.

When you first install VS Code, the default settings can be distracting and overwhelming, so **don't be afraid to turn things off!**

We suggest **two important tweaks to your settings**:

- We have found that the "persistent sessions" feature can cause mysterious issues that are difficult to debug, so we suggest turning it off. In Settings, search for "persistent", then *uncheck* the option "Terminal > Integrated: Enable Persistent Sessions".
- *If you are on Windows*, you will need to [configure your built in terminal](https://code.visualstudio.com/docs/terminal/profiles) to use Git Bash (rather than Power Shell). Open the built in terminal window using Ctrl + backtick (that little character next to the "1" key) or via the main menu > Terminal > New Terminal. On the upper right of the Terminal pane, click the plus "+" icon, and select "Select Default Profile". Then select "Git Bash". *Note:* you cannot use PowerShell or CMD run Jekyll or CB rake tasks.

## Visual Studio Code Extensions 

VS Code has a tremendous number of [extensions](https://marketplace.visualstudio.com/VSCode) that can be added to enhance its functionality. 
For working on CollectionBuilder projects we recommend two extensions:

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), which will check your spelling which is handy for content writing!
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv), highlights CSVs to make them easier to read directly in the editor.

*Please note:* Visual Studio Code is NOT the same thing as Visual Studio IDE (great naming Microsoft!).
VS Code is the lighter code editor; Visual Studio is a full traditional heavy IDE system.
You do not want Visual Studio.
{:.alert .alert-yellow}
