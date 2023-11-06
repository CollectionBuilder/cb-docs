---
title: Advanced GitHub Actions
parent: Advanced
nav_order: 12
---

# Advanced GitHub Actions

To add a basic GitHub Action that can build and deploy any CollectionBuilder site you can use the easy [starter workflow available via the Pages Settings]({{ '/docs/deploy/actions/' | relative_url }}).
However, GitHub Actions can do more than just the basics! 
There are some cases where you might want to manually add or edit your GitHub Action. 

This section provides detailed information about how the Action file works in case you end up wanted to customize the workflow... *if you used the Starter workflow, you don't need to read this!*

## Manually Add Action YAML

GitHub Actions are a workflow script added to your repository in a YAML file in the ".github/workflows/" directory.
The YAML describes the steps to build and deploy your project.

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
