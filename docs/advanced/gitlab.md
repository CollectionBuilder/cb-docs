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

--------------

## Create CollectionBuilder Repository on GitLab

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

## Edit URL Variables

To build on GitLab you will need to set the URL variables in your project's "_config.yml".

- Open your "_config.yml" file in editor or web editor.
- Under the "URL VARIABLES" section uncomment (i.e. delete the `#` in front of) the `url` and `baseurl` lines.
    - For `url` value, for hosting on GitLab Pages follow the pattern "https://username.gitlab.io" (replacing "username" with your user or the group name the project is owned by, all lowercase).
    - For `baseurl` value, use the same name as the project (all lowercase).
    - For `source-code` value, paste in your GitLab repository link.
- Commit the changes.

Once edited the URL Variables section should look like:

```
##########
# URL VARIABLES [optional if using GitHub Pages!]
#
# url is site domain, full URL to the production location of your collection
# on GitHub Pages follows the pattern username.github.io
url: https://examplename.gitlab.io 
# baseurl is path to location on the domain if necessary e.g. /digital/hjccc
# on GitHub Pages it is your github repository's name prefixed with a /
baseurl: /cb-gh-example
# location of code, the full url to your github repository
source-code: https://gitlab.com/examplename/cb-gh-example

```

## Set Up GitLab Pages Build

Unlike GitHub Pages, GitLab does not have a default Jekyll build automatically set up.
To build and host your CollectionBuilder site using GitLab Pages, you will add a "CI/CD file", named ".gitlab-ci.yml".
This YAML file contains instructions to GitLab about how to set up an environment, build your site, and deploy it.

- In the root of your project repository, click the "+" icon and select "New file" under "This directory". This will open a blank web editor page.
- In the filename box, type `.gitlab-ci.yml` (be sure to include the leading `.`).
- In the editor box, carefully paste in the following YAML (or copy from the [snippet file](https://gitlab.com/-/snippets/2368507)):

```
# Build CollectionBuilder using Jekyll

# use Ruby image that matches the version you are using locally
image: ruby:3.1

# set to production environment build
variables:
  JEKYLL_ENV: production
  LC_ALL: C.UTF-8

# install bundler, then install from Gemfile
before_script:
  - gem install bundler
  - bundle install

# build and deploy site
pages:
  stage: deploy
  script:
    - bundle exec jekyll build -d public
  artifacts:
    paths:
      - public
  only:
    variables:
      - $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH

```

- Commit the file. 

Once committed, the new file will show up in your repository and the "pipeline" will start running immediately.
You can check the status by clicking on "Jobs" under "CI/CD" in the left side menu.
When the build completes, GitLab Pages will be automatically activated and your website will be live at the URL "https://username.gitlab.io/repositoryname/".

By default, private repositories will be on "Access Control", only collaborators you have added to the project will be able to access the live website while *logged into GitLab*.
Check the option in Settings > Pages on the left side menu.

Notes: 

- Your project requires a "Gemfile" (this is included with the default CB templates).
- The file above uses Ruby version 3.1. You may want to change this to match the version of Ruby you are using on your local machine. 
