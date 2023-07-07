---
title: CSV Walkthrough
parent: Walkthroughs
nav_order: 2
lazyload: true
---

# CollectionBuilder-CSV Walkthrough

This walkthrough provides steps for creating an example digital collection using preexisting demo metadata from the University of Idaho's [Psychiana Digital Collection](https://www.lib.uidaho.edu/digital/psychiana/){:target="_blank" rel="noopener"}, the **CollectionBuilder-CSV Template**, and the **GitHub Actions** feature.

{:.alert .alert-red}
**Important Note:** You will need to install free, open-source software on your computer for this walkthrough and create a free GitHub account.

## 1. Create a GitHub account.  

- If you don't have an account, visit [GitHub](https://www.github.com){:target="_blank" rel="noopener"} and click the **Sign up** button. You do not need a paid account for using CollectionBuilder. After signing up, check your email to verify your account.

## 2. Download and install software on your computer (Git, GitHub Desktop, Visual Studio Code, Ruby, Jekyll, ImageMagic and Ghostscript)

- Click on the links below to our documentation for detailed help with the installation process for each piece of free, open-source software:

    - [Install Git](https://collectionbuilder.github.io/cb-docs/docs/software/git/){:target="_blank" rel="noopener"}
    - [Install GitHub Desktop](https://collectionbuilder.github.io/cb-docs/docs/software/git/#install-github-desktop){:target="_blank" rel="noopener"}
    - [Install Visual Studio Code](https://collectionbuilder.github.io/cb-docs/docs/software/texteditor/){:target="_blank" rel="noopener"}
    - [Install Ruby](https://collectionbuilder.github.io/cb-docs/docs/software/ruby/){:target="_blank" rel="noopener"}
    - [Install Jekyll](https://collectionbuilder.github.io/cb-docs/docs/software/jekyll/){:target="_blank" rel="noopener"}
    - [Install ImageMagick and Ghostscript](https://collectionbuilder.github.io/cb-docs/docs/software/optional/#imagemagick-and-ghostscript){:target="_blank" rel="noopener"}

- In our documentation we've tried to anticipate common issues to help with troubleshooting, but if these options do not work, try Googling your problem using a specific search (include the error message you are getting!). 

- If you are still having problems installing software, please feel free to reach out to the CollectionBuilder team at [collectionbuilder.team@gmail.com](mailto:collectionbuilder.team@gmail.com){:target="_blank" rel="noopener"}.

## 3. Create a new repository

- After ensuring you are logged in to your GitHub account, visit the [**collectionbuilder-csv repository page**](https://github.com/CollectionBuilder/collectionbuilder-csv){:target="_blank" rel="noopener"}. 

- Click the green **Use this template** button and then the **Create a new repository** dropdown option. 

{% include feature/image.html img="use-csv-template.gif" alt="User clicking on use template button and then create a new repository option" border=true width="80%" %}

- Leave the repository as **Public**. Enter a repository name (use a lowercase name without spaces or odd characters, e.g. **demo-repository**) and click **Create repository from template**.

{% include feature/image.html img="create-repo-csv.gif" alt="User entering a repository name and clicking create repository from template button" border=true width="80%" %}

## 4. Clone your repository using GitHub Desktop

- On your new repository's home page, click on the green button labeled **Code**. In the box that pops up, click on the button labeled **Open with GitHub Desktop**. This action will open GitHub Desktop on your computer.

{% include feature/image.html img="clone-launch-repo.gif" alt="User clicking on Code dropdown and then the Open with GitHub Desktop button" border=true width="80%" %}

- GitHub Desktop will ask you to confirm the path of the repository you are cloning. Once you click the blue **Clone** button, GitHub Desktop will create a new folder on your computer with the matching your repository name and clone the contents of the repository from GitHub. 

{% include feature/image.html img="clone-demo.gif" alt="User clicking on the clone button in GitHub Desktop to clone the repository from GitHub" border=true width="80%" %}

- **Note:** The repository is a folder of files and you can store it anywhere, but we recommend using the default storage location on your computer: documents/GitHub.

{:.alert .alert-blue}
**A quick explanation of Fetch, Pull, and Push:** On the top right of GitHub Desktop, you can Fetch origin, Pull origin, or Push origin. Clicking these commands allows you to sync the local version of your repository with the version on GitHub, using Git to push and pull changes between them. 

- **Reminder:** When you are working on multiple computers or collaborating with others, be sure to fetch and pull changes from GitHub before you start working on your project.

{% include feature/image.html img="fetch-pull-gh-desktop.gif" alt="GitHub Desktop user clicking on fetch origin button and then pull origin button" border=true width="80%" %}

## 5. Use GitHub Desktop to open your repository in Visual Studio Code

- Check to make sure you are in the correct repository by viewing the top left section of GitHub Desktop. To switch between repositories, locate the **Current Repository** dropdown, and select the repository you'd like to open. 

- In the top menu, locate and click on **Repository**, and select the option, **Open in Visual Studio Code**. 

{% include feature/image.html img="open-repository-menu.gif" alt="GitHub Desktop user clicking on Repository and then Open in Visual Studio Code option" border=true width="80%" %}

- Alternatively, in the box that says **Open the repository in your external editor**, you can click the button that says **Open in Visual Studio Code**.

{% include feature/image.html img="open-vs-code.gif" alt="GitHub Desktop user clicking on Open in Visual Studio Code button to open VS Code application" border=true width="80%" %}

## 6. 