---
title: Working With Git
parent: Repository
nav_order: 5
---

# Working With Git

*As we might have mentioned a few times by now*, your project folder is a Git repository.

To review, Git is used to track the history of changes in a folder of files, i.e. version control.
You can use Git via a variety of interfaces: 

- GitHub web interface (or other Git-based hosting platform)
- [GitHub Desktop](https://desktop.github.com/) (or other [GUI git software](https://git-scm.com/downloads/guis) on your computer)
- Git integrations built into your text editor (such as the ["source control" panel on VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview))
- Git commands entered in your terminal

**_Under the hood all these methods are interacting with the same version control software and the same history for each repository!_**

Always keep in mind that with all methods of using Git, the repository is just a folder of files on your computer. 
You can go into the folder to edit, delete, add, and rearrange just like you would with any other folder on you computer. 
Only in this case, Git is watching and knows when things have changed!

These are the basic Git terms you will be using:

- `fetch` - download updates to the history from GitHub.
- `pull` - download updates from GitHub *and* update your local repository files.
- `add` - stage files with changes that you want to "commit" (this step is sometimes not clear in GUI tools, or called "stage changes").
- `commit` - record a snapshot of the staged changes in your local repository history.
- `push` - upload your local history to update GitHub.

## gitignore 

In the root of your CB project repository you will see a file ".gitignore".
This text file contains a list of files and folders you want Git to **not** track (yes, ignore!).
It lists things that are not necessary to commit into your repository, since they are temporary files or artifacts of the Jekyll build process. 

The ignored files will appear in the folder on your computer, but will not be added to your history or pushed up to GitHub.
If you edit an ignored file or add a file to an ignored folder, Git just ignores it! 
No changes will show up in git.

Most users will not need to adjust this file, but you might want to be aware of [how gitignore works](https://git-scm.com/docs/gitignore) if you ever want to ignore (or stop ignoring) any additional items.
The one exception is for some CB-CSV users who want to host objects on GitHub--the "objects" folder is ignored by default in the template, so you will have to [edit the gitignore to commit your objects]({{ '/docs/objects/csv-objects/#un-ignoring-the-objects-folder' | relative_url }}). 

Note, the "." dot / period in front of the filename ".gitignore" tells your computer it is a hidden file.
By default File Explorer / Finder will not show the hidden files when you view a folder--check your settings to "display hidden files". 

Hidden files *will* be displayed in the [VS Code explorer](https://code.visualstudio.com/docs/getstarted/userinterface#_explorer) side bar and files that are gitignored will appear grey.

## Git Resources

**Learning Git concepts can be challenging.**
We know that.
All we can say is that it gets easier with repetition (even if it still stumps you sometimes)!

These docs don't provide a full Git and GitHub tutorial, but we do try to cover enough to make sense of getting started with a CollectionBuilder project.
The next page of the docs provides an example walk through for creating your first commits--you will be repeating this process over and over when setting up your site, hopefully reinforcing the basics.

We encourage you to learn more!
Check out these resources: 

- [GitHub Guides](https://guides.github.com/){:target="_blank" rel="noopener"}, see [Hello World](https://guides.github.com/activities/hello-world/){:target="_blank" rel="noopener"} for an introduction.
- [GitHub Skills](https://skills.github.com/){:target="_blank" rel="noopener"} for in depth lessons.
