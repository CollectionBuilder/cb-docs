---
title: GitHub Actions
parent: Deploy
nav_order: 2
---

# Deploy on GitHub Pages via GitHub Actions

GitHub Pages' default build process runs an older version of Jekyll and does not support plugins.
Since CB-CSV uses custom CollectionBuilder plugins to generate item pages and process data, they can not be built using the default GitHub Pages process. 

However, you *can* still host your site on GitHub Pages by using the [GitHub Actions](https://docs.github.com/en/actions) feature.
GitHub has recently made setting up Actions to build your site easier, so this is a great option available directly from the GitHub Pages settings.

## Prep Project Repository

1. Ensure your repository is public. Your repository must be public to use GitHub Pages unless you have a paid account (most users make their projects public anyway!).
2. Edit your "_config.yml" to ensure the `url` and `baseurl` values are set correctly for hosting on GitHub Pages following the pattern `url: https://username.github.io` and `baseurl: /repository-name`.
3. Make sure your project has a "Gemfile". CollectionBuilder templates should have one by default!
4. *Optional:* Commit your "Gemfile.lock" to ensure the build uses the same setup as you have been using to develop the project. By default "Gemfile.lock" is usually listed in the ".gitignore" file, thus Git will not track it. Edit the ".gitignore" file to remove "Gemfile.lock" then commit the changes.

*Note:* some accounts may have GitHub Actions disabled by default. 
If you do not see the "Actions" tab in your repository's navigation (in between "Discussions" and "Projects"), it will need to be turned on first.
Visit the repository's "Settings", click on "Actions" in the left side nav menu, select "Allow all actions", and click "Save".
{:.alert .alert-yellow }

## Activate GitHub Pages

1. On your project repository's home page, click the "Settings" button (appears on the right along the tabs above the code area).
2. On "Settings" page, click "Pages" in the left side menu.
3. On the "Pages" page, under "Source", click the dropdown and select "GitHub Actions".
4. Below the "Source" dropdown, a box will appear under "Use a suggested workflow" titled "Jekyll". Click the "Configure" button.
5. This will open an editor page creating a new file named ".github/workflows/jekyll.yml" populated with GitHub's [starter Jekyll workflow](https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml). You can ignore the file and other options displayed on the right side, and just click the green "Start commit" button. 
6. Fill in the commit message as usual and click the green "Commit new file" button. 

Committing the action file to your repository will start the build process.
It may take a few minutes for the action to complete building and deploying your site.
You can monitor the progress by looking at the status icon displayed next to your most recent commit message or by checking the "Actions" tab of your repository.
Once the action successfully completes a green checkmark will appear and your site will be live. 

To find the URL you can visit "Settings" > "Pages".
For convenience, you might want to display the site URL on your home page:

1. Go to repository's home page.
2. On right side of the code area, look for "About" section and click on the cog icon to edit. 
3. In the "About" box, below the "Website" box, check the option "Use your GitHub Pages website", then click "Save". This will make it easy to access the site in the future!

Going forward, each time you push or directly commit to the repository, the action will rebuild the site. 
A green checkmark will appear next to the most recent commit that triggered a successful build.
If a red "X" appears next to your commit, the build failed and your updates will not be deployed--the last working version of the site will still be live.

### Build Errors

**As of January 2025:** *There is currently a bug in the default "jekyll.yml" starter workflow!*
Due to [changes in the ubuntu-latest image](https://github.com/actions/runner-images/issues/10636), the GitHub Action will end up with errors in existing and new repositories. 
To fix it, edit the file ".github/workflows/jekyll.yml" in your repository. 
On line 37, replace `uses: ruby/setup-ruby@8575951200e472d5f2d95c625da0c7bec8217c42 # v1.161.0` with `uses: ruby/setup-ruby@v1.207.0`.
This should fix the error!
{:.alert .alert-red}

Some errors in your project can cause the Jekyll build fail, for example an extra space before keys in "_config.yml" or unclosed Liquid tags.
Visit the "Actions" tab of your repository to see detailed information about the error message to help debug the issue.
Next look at your Commit history, successful builds will have a green check mark, failures will have a red "x".
Look at the commit when the build error started--something was introduced by that change that broke it, so that is where to start debugging!

-------------

## Turn Off GitHub Actions

Sometimes you may want to take down a live site, for example if you were just using it for a demo or prototype and want to deploy a new version somewhere else.
GitHub Pages is just as easy to turn off as it is to activate:

1. In your repository, delete the Action file ".github/workflows/jekyll.yml".
2. On your repository, click the "Settings" button (appears on the right along the tabs above the code area).
3. On "Settings" page, click "Pages" in the left side menu.
4. On the "Pages" page, under "Source", click the dropdown and select "Deploy from a branch".
5. Then, under "Branch" section, change the dropdown button to "none", then click the "Save" button. 

After deactivating GitHub Pages, visiting the old URL will result in an 404 page.
Keep in mind that the repository still contains all the code--so you can always turn it back on!
