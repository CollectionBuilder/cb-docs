---
title: GitHub Actions
parent: Deploy
nav_order: 4
---

# GitHub Actions

GitHub Pages' default build process runs an older version of Jekyll and does not support plugins (see [dependency versions](https://pages.github.com/versions/) for details).
Since CB-CSV uses custom CollectionBuilder plugins to generate item pages and process data, they can not be built using the default GitHub Pages process. 

However, you *can* still host your site on GitHub Pages by setting up an alternative build using the [GitHub Actions](https://docs.github.com/en/actions) feature.
GitHub has recently made setting up Actions to build your site easier, so this is a great option.

## Prep Project Repository

1. Check your "_config.yml" to ensure the `url` and `baseurl` values are set correctly for hosting on GitHub Pages following the pattern `url: https://username.github.io` and `baseurl: /repository-name`.
2. If this is a temporary url for testing / demo purposes, you probably want to uncomment `noindex: true` in the ROBOTS EXCLUDE section of "config.yml". This tells Google not to index the site.
3. Make sure your project has a "Gemfile". CollectionBuilder templates should have one by default.
4. *Optional:* Commit your "Gemfile.lock" to ensure the build uses the same setup as you have been using to develop the project. By default "Gemfile.lock" is usually listed in the ".gitignore" file, thus Git will not track it. Edit the ".gitignore" file to remove "Gemfile.lock" then commit the changes.

*Note:* some accounts may have GitHub Actions disabled by default. 
If you do not see the "Actions" tab in your repository's navigation (in between "Discussions" and "Projects"), it will need to be turned on first.
Visit the repository's "Settings", click on "Actions" in the left side nav menu, select "Allow all actions", and click "Save".
{:.alert .alert-yellow }

## Setup Action YAML

To add a GitHub Action, you will be adding a YAML file describing the build steps to your project repository--you can do this automatically using GitHub's suggested starter workflows from the Pages settings or can be added manually.

### Using the Starter Workflow

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page: click "Pages" in the left side menu.
3. On the "Pages" page: under "Source", click the dropdown and select "GitHub Actions".
4. Below the "Source" dropdown, a box will appear under "Use a suggested workflow" titled "Jekyll". Click the "Configure" button.
5. This will open an editor page creating a new file named ".github/workflows/jekyll.yml" populated with GitHub's [starter Jekyll workflow](https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml). You can ignore the file and other options displayed on the right side, and just click the green "Start commit" button. 
6. Fill in the commit message as usual and click the green "Commit new file" button. 

Committing the action file to your repository will start the build process.
It may take a few minutes for the action to complete.
You can monitor the progress by looking at the status icon displayed next to your most recent commit message or by checking the "Actions" tab of your repository.
Once the action successfully completes a green checkmark will appear and your site will be live. 
To find the URL you can visit "Settings" > "Pages".

Going forward, each time you push or directly commit to the repository, the action will rebuild the site. 

The green checkmark will appear next to the most recent commit that triggered a successful build.
If a red "X" appears next to your commit, the build failed and your updates will not be deployed--the last working version of the site will still be live.
Visit the Actions tab to see detailed information about the error to help debug the issue.

You're all set, enjoy your site! 

----------------------------

### Manually Add Action YAML

{:.alert .alert-red}
*The information below provides more details about Actions in case you end up wanting to customize the workflow... if you used the Starter workflow, you don't need to read it!*

Rather than using "Settings" > "Pages" to add the starter workflow, you can manually create the file. 
This process was the default method, however when GitHub made the starter workflow easier, it unfortunately made this option harder!
You may want to do this process if you would like the customize the Action in some way.

To setup the GitHub Action you will be creating a file in your project repository named ".github/workflows/jekyll.yml".
To add this action you will need full "owner" administrative privileges for the repository (permission to create a "workflow" level token).
Sometimes your local GitHub authentication is not setup with full rights--so to avoid permissions issues, it is best to complete this step directly in the GitHub web interface.

On the repository home page, click "Add file" > "Create new file".
In the filename field start typing `.github/workflows/jekyll.yml`.
This will create a folder ".github" (with a period in front!), with "workflows" folder inside, with a file "jekyll.yml" inside.

In the editor pane below, paste in this action:

```{% raw %}
name: build site with jekyll and deploy on github pages

# runs when you push or merge PR to main
on:
  push: 
    branches: 
      - main
  pull_request:
    branches: 
      - main
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  jekyll:
    runs-on: ubuntu-20.04 
    steps:
      # checkout code
      - uses: actions/checkout@v3

      # Use ruby/setup-ruby to shorten build times
      # https://github.com/ruby/setup-ruby
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1 # Not needed with a .ruby-version file
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

Once committed, the action will run each time you push a new commit or merge a pull request.

However, the first time you may have to manually activate GitHub Pages.
Go to the repository Settings, click "Pages" in the side nav.
In the "Source" dropdown select "Deploy from a branch", and in "Branch" dropdown select "gh-pages", and save.
After Pages is activated, you may need to create another new commit to finally get the web site live.

### Action Details 

The `on` key says to build on any push or Pull Request to the "main" branch (you could switch it to what ever branch works for you, just don't try to use gh-pages branch).

The `jobs` key gives the list of things to do.
Each `uses` value is a repository on GitHub, so you can go look at the code to see what it is doing, or set up your own version. 
In this workflow: 

- [actions/checkout@v3](https://github.com/actions/checkout) checks out the code from the main branch (from GitHub).
- [ruby/setup-ruby@v1](https://github.com/ruby/setup-ruby) uses a pre-built Ruby and cached gems to speed up built time.
- [limjh16/jekyll-action-ts@v2](https://github.com/limjh16/jekyll-action-ts) runs the `jekyll build` process.
- [peaceiris/actions-gh-pages@v3](https://github.com/peaceiris/actions-gh-pages) takes the output and commits it to the `gh-pages` branch. 

The Actions tab of the repository provides detailed progress for your workflow, so if something goes wrong it is a bit easier to debug than default GitHub Pages.
If everything goes well, you will get a green check next to your latest commit message. 
If there is an error, a red X will appear.

Each time the action runs, you will see a commit from "github actions" bot, pushing the newly built site files to the "gh-pages" branch.
