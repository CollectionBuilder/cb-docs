---
title: GitHub Actions
parent: Deploy
nav_order: 5
---

# GitHub Actions

GitHub Pages' default build process runs an older version of Jekyll and does not support plugins.
Since CB-CDM and CB-CSV use custom CollectionBuilder plugins to generate item pages and process data, they can not be built using the default GitHub Pages process. 

However, you *can* still host your site on GitHub Pages by setting up an alternative build using the [GitHub Actions](https://docs.github.com/en/actions) feature.

Setting up the Action takes a few extra steps, detailed below.

## Prep Project Repository

1. Double check your "_config.yml" to ensure the `url` and `baseurl` values are set correctly for hosting on GitHub Pages (i.e. following the pattern `url: https://username.github.io` and `baseurl: /repository-name`).
2. If this is a temporary url for testing / demo purposes, you probably want to uncomment `noindex: true` in the ROBOTS EXCLUDE section of "config.yml". This tells Google not to index the site.
3. Make sure your project has a "Gemfile". CollectionBuilder templates should have one by default.
4. Optional: Commit your "Gemfile.lock" to ensure the build uses the same setup as you have been using to develop the project. By default "Gemfile.lock" is usually listed in the ".gitignore" file, thus Git will not track it. Edit the ".gitignore" file to remove "Gemfile.lock" then commit the changes.

*Note:* some accounts may have GitHub Actions disabled by default. 
If you do not see the "Actions" tab in your repository's navigation (in between "Discussions" and "Projects"), it will need to be turned on first.
Visit the repository's "Settings", click on "Actions" in the left side nav menu, select "Allow all actions", and click "Save".
{:.alert .alert-yellow }

## Setup Action YML

To setup a GitHub Action you will be creating a file in your project repository named ".github/workflows/jekyll.yml".
To add this action you will need full "owner" administrative privileges for the repository (permission to create a "workflow" level token).
Sometimes your local GitHub authentication is not setup with full rights--so to avoid permissions issues, it is best to complete this step directly in the GitHub web interface.

On the repository home page, click "Add file" > "Create new file".
In the filename field start typing `.github/workflows/jekyll.yml`.
This will create a folder ".github" (with a period in front!), with "workflows" folder inside, with a file "jekyll.yml" inside.

In the editor pane below, paste in this action:

```{% raw %}
name: build site with jekyll and deploy on github pages

on:
  push: 
    branches: 
      - main
  pull_request:
    branches: 
      - main

jobs:
  jekyll:
    runs-on: ubuntu-18.04 # ubuntu-latest is now 20.04 and doesn't seem to work
    steps:
      # checkout code
      - uses: actions/checkout@v2

      # Use ruby/setup-ruby to shorten build times
      # https://github.com/ruby/setup-ruby
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.7 # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically

      # use jekyll-action-ts to build
      # https://github.com/limjh16/jekyll-action-ts
      - uses: limjh16/jekyll-action-ts@v2
        with:
          enable_cache: true

      # use actions-gh-pages to deploy
      # https://github.com/peaceiris/actions-gh-pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          # GITHUB_TOKEN secret is set up automatically
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
{% endraw %}
```

Scroll to the bottom of the editor page, and write your Commit message, and commit the file. 
Adding the file will automatically set up a `GITHUB_TOKEN` secret which will allow the Action to build your site, and commit the output to the "gh-pages" branch.

Once committed, the action will run immediately and will repeat each time you push a new commit or merge a pull request.

However, the first time you may have to manually activate GitHub Pages.
Go to the repository Settings, click "Pages" in the side nav, select "gh-pages" branch in the "Source" drop down, and save.
After Pages is activated, you may need to create another new commit to finally get the web site live.

### Action Details 

The `on` key says to build on any push or Pull Request to the "main" branch (you could switch it to what ever branch works for you, just don't try to use gh-pages branch).

The `jobs` key gives the list of things to do.
Each `uses` value is a repository on GitHub, so you can go look at the code to see what it is doing, or set up your own version. 
In this workflow: 

- [actions/checkout@v2](https://github.com/actions/checkout) checks out the code from the main branch (from GitHub).
- [ruby/setup-ruby@v1](https://github.com/ruby/setup-ruby) uses a pre-built Ruby and cached gems to speed up built time (when using Ruby, this is apparently preferable to using "actions/cache").
- [limjh16/jekyll-action-ts@v2](https://github.com/limjh16/jekyll-action-ts) runs the `jekyll build` (supposedly faster than "helaili/jekyll-action").
- [peaceiris/actions-gh-pages@v3](https://github.com/peaceiris/actions-gh-pages) takes the output and commits it to the `gh-pages` branch. 

The Actions tab of the repository provides detailed progress for your workflow, so if something goes wrong it is a bit easier to debug than default GitHub Pages.
If everything goes well, you will get a green check next to your latest commit message. 
If there is an error, a red X will appear.

Each time the action runs, you will see a commit from "github actions" bot, pushing the newly built site files to the "gh-pages" branch.
