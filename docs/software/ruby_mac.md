---
title: Mac - Ruby Install
parent: Software
nav_order: 5
---

# Ruby on Mac

Installing Ruby on Mac involves many steps, but don't be deterred!

OS X has a version of Ruby installed by default, but recommended practice is to set up a separate Ruby development environment.
To do this, follow the instructions below, which outline the steps to install Ruby using [rbenv](https://github.com/rbenv/rbenv){:target="_blank" rel="noopener"}.

## Install Xcode Command Line Tools

- Ensure you have Xcode Command Line Tools, so that you can work with Ruby (and Git, etc.).
- To do this, open your terminal by pressing "Command (⌘) + Spacebar", typing `terminal` into the spotlight box that appears, and pressing "Enter".
- To check if Xcode is already installed, type `xcode-select -v`. If Xcode is installed, you should see the version number output in the terminal and you can move on to the [Install Homebrew](#homebrew) section below. If no version is output, follow the next step in this section.
- Type `xcode-select --install` into the terminal window and press "Enter" to start the installer. Note: this may take some time to install.

## Install Homebrew

You'll need to use Homebrew to install rbenv. To install Homebrew, follow these steps:

- Open the [Homebrew](https://brew.sh/){:target="_blank" rel="noopener"} webpage in your browser.
- Open your terminal by clicking "Command (⌘) + Spacebar", typing `terminal` into the spotlight box that appears, and pressing "Enter".
- Locate and copy the script in the box underneath the text Install Homebrew on the [Homebrew](https://brew.sh/){:target="_blank" rel="noopener"} webpage. Paste this script you just copied into the terminal prompt and press "Enter".
- The terminal will then prompt you to press "Enter" once more to continue the install.

{:.alert .alert-purple .my-3}
*Note: you may be prompted to enter your password. When you do so in the command line, you won't see anything happen. Just enter your password for your computer then press enter. That should complete the step.* 

- Installation will proceed, printing out lots of text to the terminal window. It is complete when your command prompt returns (looks something like `username@computername ~ %`).
- Look at the text about your command prompt, you should see a section "==> Next steps:" printed out in the terminal window. For most users, this will include several commands that need to be run in the terminal to finish setting up Homebrew (the exact commands are different depending on your MacOS version). Use your mouse to highlight and copy the commands one at a time. Paste each into the terminal prompt and press enter to run.
- Quit the terminal.

Check your installation: 

- Open a terminal window.
- Type `brew -v` into the terminal and press "Enter". This will either return your current Homebrew version or a message telling you the brew command cannot be found.
- If your terminal returns a version of Homebrew (an example might be "Homebrew 4.4.3", but keep in mind you may have a different version number, and that's okay!), you are ready to move on to the next section, [Install rbenv](#install-rbenv), below.
- However, if your terminal returns a "command not found: brew" message, you probably missed the final install commands from "Next steps". For most Apple silicon computers 2020+ the command you need is:
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile 
```
- Check to make sure Homebrew is installed properly by typing `brew -v` again into the terminal and pressing "Enter". If the installation was successful, your terminal will return your Homebrew version. You're now ready to move on to the next section.

## Install rbenv

- Copy and paste the command below into your terminal prompt and press "Enter". This installation might take a while.
```
brew install rbenv
```
- Once this rbenv installation is complete, run the command:
```
rbenv init
``` 
- Check the messages printed out in the terminal window. In up to date version of rbenv and MacOS no further action is required. However, older version may print out additional command that need to be run to finish your installation. See note below.
- To ensure everything refreshes, quit terminal.
- Open a new terminal window, type `rbenv -v` to check that your installation was successful.

*Older version notes:*

- After running `rbenv init` with older versions of MacOS or rbenv you may see a message that looks like this:
```
# Load rbenv automatically by appending
# the following to ~/.zshrc:

eval "$(rbenv init -)"
```

- Take a close look at the second line of text beginning with a pound sign (`#`). At the end of this line of text, you should either see `~/.zshrc` or `~/.bash_profile`.
- If you see `~/.zshrc`, copy and paste the following into the terminal and press "Enter":
```
echo 'eval "$(rbenv init -)"' >> ~/.zshrc 
```
- If you see `~/.bash_profile`, copy and paste the following into the terminal and press "Enter":
```
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

## Install Ruby

- Check the [Ruby download page](https://www.ruby-lang.org/en/downloads/){:target="_blank" rel="noopener"} to find the latest stable version number. For example, in Oct 2024, the current stable version was "3.3.5". (You do not need to download anything, just check the version number!)
- Back in your terminal, install the latest version of ruby by copy/pasting or typing: 
```
rbenv install 3.3.5
```
- Installation may take a long time!
- Next, set that version as your global Ruby version by typing: 
```
rbenv global 3.3.5
```
- Finally, refresh your terminal by running rehash:
```
rbenv rehash
``` 
- Now let's see if that worked:
    - Quit your terminal by right clicking ("Control (^) + click") the terminal's icon in your applications menu, and selecting "Quit" from the options that appear.
    - Then reopen your terminal by clicking "Command (⌘) + Spacebar", typing `terminal` into the spotlight box that appears, and pressing "Enter".
    - Type `ruby -v` into the terminal prompt, and press "Enter".
    - Your terminal should print out the version of ruby that you just installed. (If your terminal indicates that you have Ruby 2.7.0 or higher installed, you've done it!)

*Note: Ruby 3.2.0 was not working with some Jekyll versions--if you have 3.2.0, please update your ruby and jekyll to avoid issues!*

## Having trouble?

If this installation did not work, check out the [Jekyll install on mac docs](https://jekyllrb.com/docs/installation/macos/), or try Googling any error message or other hindrance you encountered.
