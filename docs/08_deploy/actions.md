---
title: Deploying Using GitHub Actions
parent: Deploy
nav_order: 5
---

***FOR SA and CDM only***

# GitHub Actions

The following steps document how to host your site with GitHub Pages using GitHub Actions. 
The regular workflow for setting up GitHub Pages will not work for this repository because of its plugins, so Actions needs to be used instead.

## In Visual Studio Code, do the following:

Go to your _config.yml file. 
Under URL VARIABLES, make sure the value for `url` reflects the GitHub organization or GitHub username, whichever you are working under (i.e. `https://erholmes.github.io` or `https://ncdigitalcollections.github.io`). 
Make sure the value for `baseurl` matches the name of your repository (i.e. `/ncdctest`).
 
If this is a temporary url for the site, you probably don’t want Google to index it yet. 
You can easily adjust this in the config.yml file. 
Scroll down to the ROBOTS EXCLUDE section and delete the hashtag (`#`) in front of the words `noindex: true`. 
When it comes time to officially host your site, you can comment this line out again by putting the hashtag back in front of it, and your site will then be indexed.

## Don't commit/push your changes yet. Instead, view your repository on GitHub in the browser and do the following:

Make sure you have administrator privileges for the repository, otherwise you won't be able to do the next steps.
(Note: if it's your own repository you already have admin privileges).

Make sure you have a `Gemfile` and `Gemfile.lock` file. If you copied from the ncdigitalcollections collectionbuilder template you should already have these so you shouldn't need to worry about creating them.

From the base of your repo, create a folder called `.github` (don't forget the period in front of it).
Inside this folder create a subfolder called `workflows`.
Inside the `workflows` folder create a file called `jekyll.yml`.
Into this `jekyll.yml` file paste the following:

```{%raw%}
name: build with jekyll and deploy on github pages

on:
  push: 
    branches: 
      - master
  pull_request:
    branches: 
      - master

jobs:
  jekyll:
    runs-on: ubuntu-latest
    steps:
      # checkout code
      - uses: actions/checkout@v2

      # Use GitHub Actions' cache to shorten build times and decrease load on servers
      - uses: actions/cache@v1
        with:
          path: vendor/bundle
          key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}
          restore-keys: |
            ${{ runner.os }}-gems-
      # use jekyll action from jekyll docs example
      - uses: helaili/jekyll-action@2.0.2
        env:
          JEKYLL_PAT: ${{ secrets.JEKYLL_PAT }}{%endraw%}
```

Close and commit the `jekyll.yml` file.

Create a personal access token here, https://github.com/settings/tokens.
Give it access to public repos.
Copy the key (you can only see the key once so you need to be sure to copy it at this point).

In your repository, go to Settings > Secrets. 
Select "New secret" (top right button) and name it exactly `JEKYLL_PAT`.
Paste in the key that you copied from your personal access token.

## Go back to Visual Studio Code

Commit and push your changes you made to the _config.yml file.
 
The site will start to build as soon as you do this push. 
It may take a few minutes, so give it some time. 
To check the build status, you can click on the Actions tab.
A green checkmark should appear when the page is done building.

To find the url, click on Settings and scroll down to the GitHub Pages section.
You should see a message that says "your site is published at" with the name of the url.

You're all set up at this point; whenever you push a new commit the site will rebuild and you'll be able to view your live changes.

For more information, see: <https://jekyllrb.com/docs/continuous-integration/github-actions/>

## To turn off GitHub pages

View the repository's branches.

Delete the gh-pages branch.

For more information, see: <https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/unpublishing-a-github-pages-site#unpublishing-a-project-site>