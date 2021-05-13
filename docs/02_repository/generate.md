---
title: Generate Site
parent: Repository
nav_order: 3
---

# Generate Your Site

With your project repository copied to your local machine, you can use **Jekyll** to generate and serve your site on a local development server.
The complete website will be available to use in your browser *as if* it was on the live web--but it is only on your local computer.

This is great for iterative development, allowing you to test changes and see what happens!

With a fresh copy of a CollectionBuilder template, you should be able to test out your Jekyll set up without making any changes to the code, generating the demo collection using the commands below.

Once you start adding your own content, configuring, and customizing, you will follow exactly the same method to start the dev server to view your project.

## Open Terminal

To give commands to Jekyll, you will need to have a terminal open in the root of your project folder. 
Editors like VS Code can open a full folder and provides an integrated terminal to make working on a Jekyll project easier.

If you are using VS Code, open your project repository folder with the editor.
Use the keyboard shortcut ``Ctrl + ` `` (control + backtick " **\`** ", the key left of "1" shared with "~") to open and close the integrated terminal, or click the "View" menu and select "Terminal".
On Windows, please ensure you are using Git Bash (not PowerShell or CMD).

If you are **not** using an integrated terminal on your text editor, open a normal terminal window and navigate to your project repository folder (use Git Bash on Windows, Terminal on Mac or Linux).

## Bundle Install (1st Time Only)

The **first time** you use this project folder on this computer, type the command: 

`bundle install`

Bundler will check the project's "Gemfile", install any missing dependencies, and create a "Gemfile.lock" listing the exact Gems set up for this project.
You will see a bunch of output in your terminal window and if this is the first time bundling it may take awhile to finish.
Once complete your terminal prompt will return.

Although it seems complicated at first, using Bundler helps avoid dependency issues on your system.
The "Gemfile.lock" keeps the dependencies consistent to help reproduce the specific environment you are developing in.

## Jekyll Serve

The "jekyll serve" command will start the dev server and generate your site, rebuilding each time you save a file in the project folder.
Using the prefix `bundle exec` ensures that you are using the exact setup recorded in the project's "Gemfile.lock" (hopefully avoiding dependency issues unexpectedly breaking things).

With a terminal (integrated or not) open in your project folder follow these steps:

1. Type the command `bundle exec jekyll s` and press enter. 
2. In the terminal you'll see some text appear (messages from Jekyll), including a URL that appears after the title "Server address:"
3. Hold down `Ctrl` / `Command` and click the link to open the site in your browser, or copy the URL and paste it into a browser (we recommend doing this in a private window).
4. When you're ready to end your Jekyll session, click into the terminal, then type `Ctrl + C`. This stops the server from running. (This is how to close most command line programs, not just Jekyll!)
