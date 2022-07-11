---
title: GitLab
parent: Advanced
nav_order: 10
---

# Using GitLab 

These docs assume you are using GitHub as a repository hosting service. 
However, GitHub is **NOT** a requirement for using CollectionBuilder!

Your repository hosting service provides version control, project management features, and deployment options.
A growing number of alternatives are available.
If you would like to use an alternative platform, you will replace the [GitHub software steps]({{ '/docs/software/github/' | relative_url }}) with your service.

[GitLab](https://gitlab.com/) is a popular alternative platform that provides all the same features available on GitHub.
Many people choose GitLab as an open source alternative to the more big-tech connected GitHub (owned by Microsoft).

Focused as a "DevOps Platform", GitLab's interface is more technical than GitHub, so may not be the best for beginners. 
You will also not be able to use GitHub Desktop, however other [GUI git software is available](https://git-scm.com/downloads/guis). 

GitLab has powerful deployment options and [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) hosting built in, so it can be set up to build a CollectionBuilder site.
One advantage is GitLab allows you to create private repositories *and* private websites with a free account (see [GitLab Pages Access Control](https://docs.gitlab.com/ee/user/project/pages/pages_access_control.html#gitlab-pages-access-control)).

The steps below outline how to use GitLab.

## Getting Started on GitLab

GitLab is an open source system that can be self-hosted by organizations. 
If you want to use the hosted version (similar to GitHub), [sign up for a free account on "GitLab SaaS"](https://gitlab.com/users/sign_up).

- Repositories are called **"Projects"**
- Organizations are called **"Groups"**
- Pull Requests are called **"Merge Requests"**

## Create CollectionBuilder Repository

There is two methods to set up a new CollectionBuilder project on GitLab:

- Import the GitHub project (quicker to set up, but results in larger repository with full development history of the CollectionBuilder template).
- Manually add the template code to a blank repository (cleaner option).

Choose **one** of theses options: 

### Import Repository from GitHub

- Click the "Create New project/repository" option from the "+" icon in the top bar navigation.
- Click "Import project" option.
- Select "Repository by URL" option.
- In the Git repository URL box, paste the clone link from the CB template you want to use. For example, CollectionBuilder-GH: `https://github.com/CollectionBuilder/collectionbuilder-gh.git`
- Give your project a name. 
- The "Project URL" option allows you to host the project under your username, or under one of your "groups". Generally, the project name will be used to generate the "project slug".
- GitLab allows public or private projects for free.

Once the import is complete, you will have a full copy to CollectionBuilder repository.
Unlike the GitHub "use template" method, this includes the full history and development branches. 
So your first step should be to do some clean up:

- On the left side menu, under Repository, click on the "Branches" option.
- Delete all branches except for "main" by clicking the trash icon to the right of each branch name.

### Manually add CB Template to Project

Download CB template:

- Visit the repository of the CollectionBuilder template you are going to use.
- Click the "Code" button, and select "Download ZIP".
- Unzip the CB download.

Start a new project:

- On GitLab, click the "Create New project/repository" option from the "+" icon in the top bar navigation.
- Select "Create blank project".
- Give your project a name.
- The "Project URL" option allows you to host the project under your username, or under one of your "groups". Generally, the project name will be used to generate the "project slug".
- Leave "Project deployment target" as default.
- GitLab allows public or private projects for free.
- Be sure "initialize repository with README" is checked.

Add template code:

- The GitLab web interface does not allow bulk upload of files and directories. So first, [Clone your project repository to your local machine using Git on the command line]({{ '/cb-docs/docs/repository/clone/#clone-on-command-line' | relative_url }}). 
- Open the folder for your project on your local machine.
- Copy all the CollectionBuilder template files into the folder, maintaining the directory structure. Be sure to get the hidden files like ".gitignore"!
- Commit the files.
- Push your changes.

You will now have a clean CB template project set up in your project repository. 

-------------

## Set Up GitLab Pages Build

