---
title: Linux - Ruby Install
parent: Software
nav_order: 6
---

# Ruby on Linux

Although many distros come with a system Ruby installed or a repository version, we suggest using a version manager such as [rbenv](https://github.com/rbenv/rbenv) or [RVM](http://rvm.io/).
This will ensure you have an up to date Ruby version and a clean environment separated from your system Ruby.

The instructions for installing via rbenv on Ubuntu are provided below (since that is what we generally use).

## Install Ruby via rbenv

Installing rbenv is a manual process, which is sort of nice because it is so minimal!

### 1. Install build dependencies

You will need these packages to build Gems:

```
sudo apt install autoconf bison build-essential libssl-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev
```

Install and then close your terminal. 

(this is based on the [suggested build environment](https://github.com/rbenv/ruby-build/wiki#suggested-build-environment) from ruby-build, slightly updated and tweaked for simplicity)

### 2. Install rbenv 

Using the [Basic Git Checkout](https://github.com/rbenv/rbenv?tab=readme-ov-file#basic-git-checkout) method to install rbenv is the simpliest and most up to date.

Open a terminal and clone rbenv into your home directory:

```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
```

Then run the init function to set it up:

```
~/.rbenv/bin/rbenv init
```

Close terminal and open a new one.

### 3. Add ruby-build

Clone ruby-build into the rbenv plugins directory:

```
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
```

### 4. Install a Ruby Version

Check the [Ruby download page](https://www.ruby-lang.org/en/downloads/) to find the latest stable version or your project requirements to find your desired Ruby version number.

Check `rbenv install -l` to get a list of available stable versions.

Use `rbenv install` + version number, e.g.:

```
rbenv install 3.4.1
```

This can take awhile since ruby-build will download and build from source. 

Once complete, set the version you want to use:

```
rbenv global 3.4.1
```

Now, `ruby -v` should report what you just set.

## Update rbenv and ruby-build

Since you installed the tools using git, to update rbenv and ruby-build you simply `git pull` the most recent master branch code.

```
cd ~/.rbenv && git pull
cd "$(rbenv root)"/plugins/ruby-build && git pull
```

**Note:** the list of available Ruby versions (`rbenv install -l`) is **NOT automatically updated**.
So you should periodically update ruby-build following the git pull method above (i.e. `cd ~/.rbenv/plugins/ruby-build && git pull`).

{:.alert .alert-yellow}
*Note:* there is technically an Ubuntu package available so you can use `sudo apt install rbenv ruby-build`.
Unfortunately `ruby-build` is *super* out of date, so it will only list very out-of-date versions of Ruby to install.
This is not a good install method!
