---
title: Create Repository
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

Using GitHub's "fork" option should be reserved for situations where you would like to edit the CB template itself and contribute your changes back to the project via a Pull Request.

------------

## Add a GitHub Collaborator

Most digital collection projects are collaborative, so you will probably want to add your collaborators to your GitHub project repository.

1. On the repository home page, click "Settings" tab
2. On left side nav, click "Manage access"
3. Click the green "invite teams or people" button
4. Type in a GitHub user name to add. The search bar will show suggestions based on what you type, select the correct account to add.
5. Select their level of access to the repository. Generally if you want people to be able to edit code in the repository, give them "Write" access. Then click the green "Add" button.

Once added your collaborator will receive an email with the invitation to join your repository.
They will have to confirm the invitation before being added!

------------

## Delete a Repository

Sometimes you will want to delete a GitHub repository. 
For example, if you were testing something out, creating a demo project, or just want to clean up.

To delete a repository on GitHub:

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page: scroll down to the bottom to the red "Danger Zone" section.
3. Click the "Delete this repository" button. 

Alternatively, you can "Archive" the repository if you want to keep the project, but switch it to read-only mode.
