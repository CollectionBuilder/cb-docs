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

{:#homebrew}
## Install Homebrew
You'll need to use Homebrew to install rbenv. To install Homebrew, follow these steps:
- Open the [Homebrew](https://brew.sh/){:target="_blank" rel="noopener"} webpage in your browser.
- Open your terminal by clicking "Command (⌘) + Spacebar", typing `terminal` into the spotlight box that appears, and pressing "Enter".
- Locate and copy the script in the box underneath the text "Install Homebrew" on the [Homebrew](https://brew.sh/){:target="_blank" rel="noopener"} webpage. Paste this script you just copied into the terminal prompt and press "Enter".
- The terminal will then prompt you to press "Enter" once more to continue the install.

## Install rbenv
Copy and paste the command 
```
brew install rbenv
```
into your terminal prompt and press "Enter". This installation might take a while.

Once this rbenv installation is complete, copy and paste
```
rbenv init
``` 
into the terminal prompt and press "Enter".

After you run the command `rbenv init`, you will see a message that looks like this:
```
# Load rbenv automatically by appending
# the following to ~/.zshrc:

eval "$(rbenv init -)"
```

Take a close look at the second line of text beginning with a pound sign (`#`).
At the end of this line of text, you should either see `~/.zshrc` or `~/.bash_profile`.

If you see `~/.zshrc`, copy and paste the following into the terminal and press "Enter":
```
echo 'eval "$(rbenv init -)"' >> ~/.zshrc 
```

If you see `~/.bash_profile`, copy and paste the following into the terminal and press "Enter":
```
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

## Install Ruby

{:.alert .alert-purple .my-3}
Note: Ruby 3.0.1 is the latest stable version as of this writing; if you are reading this past Spring 2021, you may want to check the "Stable Releases" section on [the download Ruby page](https://www.ruby-lang.org/en/downloads/){:target="_blank" rel="noopener"} and install the latest stable version.

- Back in your terminal, install the latest version of ruby by copy/pasting or writing, `rbenv install 3.0.1` and pressing "Enter".
- Now let's set that version as your global Ruby version by entering `rbenv global 3.0.1` into the terminal prompt and pressing "Enter".
- Finally, we're going to rehash, just to be safe: copy and paste the command `rbenv rehash` into your prompt and pressing "Enter".
- Now let's see if that worked:
    - Quit your terminal by right clicking ("Control (^) + click") the terminal's icon in your applications menu, and selecting `Quit` from the options that appear.
    - Then reopen your terminal by clicking "Command (⌘) + Spacebar", typing `terminal` into the spotlight box that appears, and pressing "Enter".
    - Type `ruby -v` into the terminal prompt, and press "Enter".
    - If your terminal indicates that you have Ruby 2.7.0 or higher installed, you've done it!

## Having trouble?

If this installation did not work, check out the [Jekyll install on mac docs](https://jekyllrb.com/docs/installation/macos/), or try Googling any error message or other hindrance you encountered.