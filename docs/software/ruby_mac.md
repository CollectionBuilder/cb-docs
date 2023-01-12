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

- When the installation is complete, type `brew -v` into the terminal and press "Enter". This will either return your current Homebrew version or a message telling you the brew command cannot be found.
- If your terminal returns a version of Homebrew (an example might be "Homebrew 3.1.5", but keep in mind you may have a different version number, and that's okay!), you are ready to move on to the next section, [Install rbenv](#install-rbenv), below.
- However, if your terminal returns a "command not found: brew" message, you'll need to complete one more step before moving on (this will be true for most Apple silicon computers, produced after late 2020). Copy and paste the following into the terminal and press "Enter":
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile 
```
- Check to make sure Homebrew is installed properly by typing `brew -v` again into the terminal and pressing "Enter". If the installation was successful, your terminal will return your Homebrew version. You're now ready to move on to the next section.

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
January 2023 Note: Ruby 3.2.0 is the latest stable version as of this writing **BUT** it is not working cleanly right now with Jekyll, so **we are recommending you install version 3.1.3**.

- Back in your terminal, install the latest version of ruby by copy/pasting or writing, 
```
rbenv install 3.1.3
```
and pressing "Enter".
- Now let's set that version as your global Ruby version by entering 
```
rbenv global 3.1.3
```
into the terminal prompt and pressing "Enter".
- Finally, we're going to rehash, just to be safe: copy and paste the command 
```
rbenv rehash
``` 
into your terminal prompt and press "Enter".
- Now let's see if that worked:
    - Quit your terminal by right clicking ("Control (^) + click") the terminal's icon in your applications menu, and selecting "Quit" from the options that appear.
    - Then reopen your terminal by clicking "Command (⌘) + Spacebar", typing `terminal` into the spotlight box that appears, and pressing "Enter".
    - Type `ruby -v` into the terminal prompt, and press "Enter".
    - If your terminal indicates that you have Ruby 2.7.0 or higher installed, you've done it!

{:.alert .alert-purple .my-3}
Note: If you want to install the Ruby 3.2.0 is the latest stable version as of this writing **BUT** it is not installing cleanly right now, so we are recommending you install version 3.1.3; if you are reading this past January 2023, check the "Stable Releases" section on [the download Ruby page](https://www.ruby-lang.org/en/downloads/){:target="_blank" rel="noopener"} and install the latest stable version.

## Having trouble?

If this installation did not work, check out the [Jekyll install on mac docs](https://jekyllrb.com/docs/installation/macos/), or try Googling any error message or other hindrance you encountered.
