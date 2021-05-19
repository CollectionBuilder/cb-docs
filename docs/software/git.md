---
title: Git Setup
parent: Software
nav_order: 1
---

# Git Setup

To manage the code and collaborate on developing your CollectionBuilder project, you will need a version control platform to keep everything organized.
We use [Git]({{ '/docs/glossary/#git' | relative_url }}) and [GitHub]({{ '/docs/glossary/#github' | relative_url }}).
Although there are alternatives (such as [GitLab](https://about.gitlab.com/) or [Bitbucket](https://bitbucket.org/product)), these docs assume you will do the same!

If you are working on a CollectionBuilder-GH project, it is possible to work entirely in the GitHub web interface--all you need is a GitHub account.
To work with a copy of your project on your local machine, you'll need to install Git (the version control software that powers GitHub) and, *optionally*, GitHub Desktop (a handy visual way to use Git) on your computer.

## GitHub Account

GitHub is the most popular platform for developing and sharing code online, hosting projects from giant enterprise software, to OER learning, to personal portfolios. 
It is great to become familiar with the platform so that you can take part in this community and its resources.

Code for your CollectionBuilder project will be stored on GitHub in a Git "repository". 
So the first step is to sign up for a GitHub account if you do not have one already.

Visit <https://github.com> and sign up for a free account. 
Be sure to verify your email to get all features activated!
(check our [GitHub glossary entry]({{ '/docs/glossary/#github' | relative_url }}) for more resources)

{:.alert .alert-blue}
Your email and user name is recorded with every commit.
This helps ensure integrity and authenticity of the history.
Most people keep their email public. 
Alternatively, check GitHub's tips on how to [set up email privacy](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses){:target="_blank" rel="noopener"}. 
GitHub can provide a no-reply email address that can be found via your email settings on your profile.

## Install Git

[Git]({{ '/docs/glossary/#git' | relative_url }}) version control system is a piece of software you install on your computer. 
This is necessary to sync with your GitHub project.

Installing it is pretty straightforward:

**Windows:** 

- Install [Git for Windows](https://git-scm.com/downloads){:target="_blank" rel="noopener"} using the default options, *except* when setup asks you to choose the default editor used by Git, select "Use the Nano editor by default". This will give you Git, Git Bash, and Git GUI. Git Bash is a terminal that lets you use UNIX style commands and utilities on Windows, and will be used as your default terminal when working with Jekyll.

**Mac:** 

- Mac systems will require the "Xcode Command Line Tools" installed, so open a terminal (to find your terminal search for "terminal" in your Spotlight), type in the command `xcode-select --install`, and follow the prompts. After the install finishes, try typing `git --version`. If you want a newer version of Git, download the official [Mac git installer](https://git-scm.com/downloads){:target="_blank" rel="noopener"}.

**Linux:** 

- Install from your distribution's software center or package manager (for Ubuntu `sudo apt install git`).

## Configure Git

Once Git is installed, we need to configure your information, so that it can connect with your GitHub account.
Since Git is a command line application, we will need to open a terminal to give it commands. 

- On Windows, search for "Git Bash."
- On Mac and Linux, search for "terminal."

Once you have a terminal open, we will need to give it two commands.

First, set your user name so that it matches your GitHub user name:

```
git config --global user.name "User Name"
```

Second, set your email so that it matches your GitHub account's email:

```
git config --global user.email "myemail@gmail.com"
```

*Optionally*, set your default command line text editor for use with git (Windows users should have already done this when using the Git installer).
This editor may pop up inside your terminal window during some command line git operations that require a message (it is not your normal code editor such as VS Code).
By default it is set to Vim, which [can be very confusing](https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/){:target="_blank" rel="noopener"} if unexpected.
For ease of use, we generally suggest using Nano command line editor:

```
git config --global core.editor "nano -w"
```

## Install GitHub Desktop

If you are new to using Git and GitHub, we also recommend you install [GitHub Desktop](https://desktop.github.com/){:target="_blank" rel="noopener"} using the default options. 
This will help you visualize and implement some of the git processes that can seem non-intuitive.

GitHub Desktop is available on Windows and Mac only, however, there are a variety of [other GUI app for working with Git](https://git-scm.com/downloads/guis){:target="_blank" rel="noopener"} available, including "git-gui" that is built in to every default Git install.
However, many users will find they complete most Git commands using integrations built into their text editors such as VS Code or Atom instead.
