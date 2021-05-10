---
title: Generate Your Site
parent: Repository
nav_order: 4
---

# Generating Your Site on a Test Server

Let's test the new code. 

Open the repository folder in your chosen text editor.
Editors like VS Code or Atom open the full repository folder making it easier work on the files as a group and provide tools such as an integrated terminal. 
(GitHub Desktop has a short cut "Open in text editor" available in the top bar)

1. If the terminal section of VSCode is not open, use the keyboard shortcut ``Ctrl + ` `` (control + backtick " **\`** ", the key left of "1" shared with "~") to open it. Or click the View menu at the top of VS Code and scroll down to "Terminal."
2. If this is the first time you have used this project on this computer, type the command `bundle install`. Bundler will check the "Gemfile", install any missing dependencies, and create a "Gemfile.lock" listing the exact Gems set up for this project (this way you can reproduce or update this specific environment if necessary).
3. In the terminal, type the command `bundle exec jekyll s` and press enter. This "jekyll serve" command will generate the site for you on a local server on your computer. Using the prefix `bundle exec` ensure that you are using the exact setup recorded in the project's "Gemfile.lock" (hopefully helping to avoid dependency issues unexpectedly breaking things).
4. In the terminal you'll see some text appear, including a URL that appears after the title "Server address:"
5. Hold down `Ctrl` or `command` and click this link to open the site in your browser, or copy the URL and paste it into a browser (we recommend doing this in a private window).
6. The generated site will be the demo version of CollectionBuilder. We'll show you soon how to add your own content soon!
7. When you're ready to end your jekyll session, click into the terminal, then type `Ctrl + C`. This stops the server from running. (This is handy to use for a number of command line programs, not just Jekyll!)
