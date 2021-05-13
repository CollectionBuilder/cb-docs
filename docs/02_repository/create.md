---
title: Create a Repository
parent: Repository
nav_order: 1
---

# Create a New Repository

The first step to any CollectionBuilder project is to create a new Git repository containing the template code.
The best/fastest way to do this is to visit a CollectionBuilder repository on GitHub and click the green "Use This Template" button.

## Generate from Template

1. Login to your account on [GitHub](https://github.com)
2. Visit the repository corresponding to the type you are using: 
    - **GH (GitHub Pages):** <https://github.com/CollectionBuilder/collectionbuilder-gh>{:target="_blank"}
    - **CONTENTdm (CDM):** <https://github.com/CollectionBuilder/collectionbuilder-contentdm>{:target="_blank"} 
    - **SA (Stand Alone):** <https://github.com/CollectionBuilder/collectionbuilder-sa>{:target="_blank"} 
3. On the repository home page, click the green "Use This Template" button (appears on right side above the code area).
4. This brings you to a "Create a new repository" page. Fill out using these options:
    1. **Repository name**: Use a lowercase name without spaces or odd characters. We often append `_source` or `_draft` to our projects to keep track of the status. If you are using GH, this name will become part of your site URL, so think through how it will look as a link!
    2. Most users should choose "Public" repository. If you are hosting on GitHub Pages it *must* be public unless you upgrade to a paid account.
    3. Leave the "Include all branches" option **Unchecked**! (you do not want all branches, only the main branch)
    4. Click on the green button "**Create repository from template**". 
    
With that final click, you will be redirected to your new repository!

------------

## Alternative Setup

*Please note,* using the template button is the fastest way to set up a project on GitHub. 
However, there are alternative, more manual methods to copy the code into your own repository.

By clicking the "Code" button on the CB repository, you are given options to "Download" the code (meaning you will have a zip file with the complete code) or "Clone" the project (meaning you will have the complete git repository).
The code can then be manually copied into your own repository or project location.
This may be useful if you do not want to use GitHub.

Using GitHub's "fork" option should be reserved for situations where you would like to edit the CB template and contribute back to the project via a Pull Request.
