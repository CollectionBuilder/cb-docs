---
title: Linux - Ruby Install
parent: Software
nav_order: 6
---

# Ruby on Linux

Although many distros come with a system Ruby installed or a repository version, we suggest using a version manager such as [rbenv](https://github.com/rbenv/rbenv){:target="_blank" rel="noopener"} or [RVM](http://rvm.io/){:target="_blank" rel="noopener"}.
This will ensure you have an up to date Ruby version and a clean environment separated from your system Ruby.

The instructions for installing via rbenv on Ubuntu are provided below (since that is what we generally use).

## Install Ruby via rbenv

Installing rbenv is a manual process, which is sort of nice because it is so minimal!

### 1. Install build dependencies

You will need these to build Gems:

```
sudo apt install autoconf bison build-essential libssl-dev libyaml-dev libreadline-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev
```

(this is based on the [suggested build environment](https://github.com/rbenv/ruby-build/wiki#suggested-build-environment) from ruby-build, slightly updated and tweaked for simplicity)

### 2. Install rbenv 

Clone rbenv into your home directory:

```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
```

Then add it to PATH (this is for Ubuntu, if using a different distro check the location of your bash profile):

```
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
```

Close terminal and open a new one.

Next, follow the instructions given by the command `rbenv init` (this can be confusing, because `rbenv init` doesn't do anything, it just prints out the instructions). 
Or just do this on Ubuntu:

```
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
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
rbenv install 2.7.3
```

This can take awhile since ruby-build will download and build from source. 

Once complete, set the version you want to use:

```
rbenv global 2.7.0
```

Now, `ruby -v` should report what you just set.

{:.alert .alert-yellow}
*Note:* there is a new Ubuntu package to install, so you can use `sudo apt install rbenv ruby-build`.
Unfortunately `ruby-build` is *super* out of date, so it will only list very out-of-date versions of Ruby to install.
As far as I can tell, this is not a good install method.
