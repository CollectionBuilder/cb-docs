---
title: Git Setup
parent: Software
nav_order: 1
---

# Git Setup

To work with a copy of your project on your local machine, you'll need to install Git (the version control software that powers GitHub) and, *optionally*, GitHub Desktop (a handy visual way to use Git) on your computer.

## Install Git

[Git]({{ '/docs/glossary/#git' | relative_url }}) version control system is a piece of software you install on your computer. 
This is necessary to sync with your GitHub project and record the history of your work.

Installing this free and open source software is pretty straightforward:

**Windows:** 

- Install [Git for Windows](https://git-scm.com/downloads){:target="_blank" rel="noopener"} using the default options, *except* when setup asks you to choose the default editor used by Git, select "Use the Nano editor by default". This will give you Git, Git Bash, and Git GUI. Git Bash is a terminal that lets you use UNIX style commands and utilities on Windows, and will be used as your default terminal when working with Jekyll.

**Mac:** 

- Mac systems will require the "Xcode Command Line Tools" installed, which includes Git. Open a terminal (to find your terminal search for "terminal" in your Spotlight), type in the command `xcode-select --install`, and follow the prompts. After the install finishes, try typing `git --version`. (*Optionally,* if you want a newer version of Git, check [alternative Mac install methods](https://git-scm.com/download/mac){:target="_blank" rel="noopener"})

**Linux:** 

- Open a terminal and try typing `git --version`. If Git is not already available, install from your distribution's software center or package manager (for Ubuntu `sudo apt install git`), or check [alternative Linux install methods](https://git-scm.com/download/linux).

## Configure Git

Once Git is installed, we need to configure your information, so that it can connect with your GitHub account--this only has to be done once!
Since Git is a command line application, we will need to open a terminal to give it commands: 

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

If you set up your GitHub account to [keep your email private](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github), be sure to use the `noreply` email they provide!

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
However, many users will find they complete most Git commands using integrations built into their text editors such as VS Code instead.
