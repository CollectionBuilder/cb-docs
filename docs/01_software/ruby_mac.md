---
title: Mac - Ruby Install
parent: Software
nav_order: 5
---

# Ruby on Mac

Installing Ruby on Mac involves many steps, but don't be deterred!

OS X has a version of Ruby installed by default, but recommended practice is to set up a separate Ruby development environment.
To do this, follow the instructions below, which outline the steps to install Ruby using [rbenv](https://github.com/rbenv/rbenv){:target="_blank" rel="noopener"}.

## Get the Xcode Command Line Tools First

- Ensure you have Xcode Command Line Tools, so that you can work with Ruby (and Git, etc.).
- To do this, open your terminal by clicking `Command (⌘) + Spacebar`, typing `terminal` into the spotlight box that appears, and pressing `Enter`.
- To check if Xcode is already installed, type `xcode-select -v`. If Xcode is installed, you should see the version number output in the terminal and you can move on to the [Install Homebrew](#homebrew) section below. If no version is output, follow the next step in this section.
- Type `xcode-select --install` into the terminal window and press `Enter` to start the installer. Note: this may take some time to install.

## Use rbenv to Install Ruby

{:#homebrew}
1. **Install Homebrew**
    - You'll need to use Homebrew to install rbenv. To install Homebrew, follow these steps:
        - Open the [Homebrew](https://brew.sh/){:target="_blank" rel="noopener"} webpage in your browser.
        - Open your terminal by clicking `Command (⌘) + Spacebar`, typing `terminal` into the spotlight box that appears, and pressing `Enter`.
        - Locate and copy the script in the box underneath the text "Install Homebrew" on the [Homebrew](https://brew.sh/){:target="_blank" rel="noopener"} webpage. Paste this script you just copied into the terminal prompt and press `Enter`.
        - The terminal will then prompt you to press `Enter` once more to continue the install.

2. **Install rbenv**
    - Copy and paste the command `brew install rbenv` into your terminal prompt and press `Enter`. This installation might take a while.
    - Once this rbenv installation is complete, copy and paste `rbenv init` into the terminal prompt and press `Enter`.
    - Depending on whether you are using a [zsh](#zsh) or [bash](#bash) shell, follow the appropriate instructions below to finish the rbenv installation.

{:#zsh}
### If using the zsh environment:

After you run the command `rbenv init` (as instructed in the previous step), you will see this message:

```
# Load rbenv automatically by appending
# the following to ~/.zshrc:

eval "$(rbenv init -)"
```

To do this, follow these instructions:
- Copy and paste `nano ~/.zshrc` into the terminal prompt and press `Enter` (this will open your zsh configuration file with the terminal's text editor, nano). 
- Your terminal should switch to a nano text editor screen that includes a path to `.zshrc` at the top. 
- Use the down arrow on your keyboard to move to the end of the text file.
- Paste `eval "$(rbenv init -)"` at the end of the file.
- Press `Control (^)` + `x` to exit and save the file. You'll see a message at the bottom of your screen asking whether you want to save the file.
- Press the `y` key on your keyboard to specify yes, you want to save.
- Press `Enter` to finish saving the file and exit nano.

{:#bash}
### If using the bash environment:

After you run the command `rbenv init` (as instructed in the previous step), the program will ask you to edit your bash profile. To do this, follow these instructions:
- Copy and paste `nano ~/.bash_profile` into the terminal prompt and press `Enter` (this will open your bash profile with the terminal's text editor, nano). 
- Your terminal should switch to a nano text editor screen that includes a path to `.bash_profile` at the top. 
- Use the down arrow on your keyboard to move to the end of the text file.
- Paste `eval "$(rbenv init -)"` at the end of the profile's text.
- Press `Control (^)` + `x` to exit and save the file. You'll see a message at the bottom of your screen asking whether you want to save the file.
- Press the `y` key on your keyboard to specify yes, you want to save.
- Press `Enter` to finish saving the file and exit nano.

{:.pt-4}
**Both zsh and bash users can now follow the instructions below to install Ruby:**

## Install Ruby

- Back in your terminal, install the latest version of ruby by copy/pasting or writing, `rbenv install 2.7.3` and pressing `Enter`.

{:.alert .alert-purple .my-3}
Note: 2.7.3 is the latest solid version as of this writing; if you are reading this past Fall 2020, you may want to check the "Stable Releases" section on [the download Ruby page](https://www.ruby-lang.org/en/downloads/){:target="_blank" rel="noopener"} and install the latest stable version.

- Now let's set that version as your global Ruby version by entering `rbenv global 2.7.3` into the terminal prompt and pressing `Enter`.
- Finally, we're going to rehash, just to be safe: copy and paste the command `rbenv rehash` into your prompt and pressing `Enter`.
- Now let's see if that worked:
    - Quit your terminal by right clicking (`Control (^) + click`) the terminal's icon in your applications menu, and selecting `Quit` from the options that appear.
    - Then reopen your terminal by clicking `Command (⌘) + Spacebar`, typing `terminal` into the spotlight box that appears, and pressing `Enter`.
    - Type `ruby -v` into the terminal prompt, and press `Enter`.
    - If your terminal indicates that you have Ruby 2.7.0 or higher installed, you've done it!

## Having trouble?

If this installation did not work, see our more detailed guide, [How to Install Ruby on a Mac](https://lib-static.github.io/howto/howtos/installrubymac.html){:target="_blank" rel="noopener"}, check out the [Jekyll install on mac docs](https://jekyllrb.com/docs/installation/macos/), or try Googling any error message or other hindrance you encountered.