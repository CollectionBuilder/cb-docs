---
title: Install Jekyll
parent: Software
nav_order: 4
---

# Install Jekyll

Finally, we get to [Jekyll](https://jekyllrb.com/){:target="_blank" rel="noopener"}!
Jekyll is a static site generator that uses templates, data, and modular components to build out a website. 
It is a very popular tool used by tiny and giant web site projects. 

Jekyll is a Gem, a software package installed via Ruby's management system called RubyGems (similar to Python's Pip). 
Gem is a command line application, so again we will open a terminal to give it commands.
Once you have a terminal open, type in the command:

```
gem install jekyll bundler
```

This will install the Gems "Jekyll" and [Bundler](https://bundler.io/).
Bundler is a Ruby utility to manage dependencies on per project basis. 
Because Jekyll is a complex Gem with many dependencies, they recommend using Bundler to keep everything in working order. 

This process will take awhile as Gem installs all the dependencies and builds extensions. 
On Windows it may appear as if nothing is happening for a very very long time, since the terminal does not provide a progress bar, be patient!
{:.alert .alert-yellow}

**Debugging Note:** 
if you have **Ruby version 3.0+** and **Jekyll version 4.2.0** or less, when using Jekyll you will encounter an error in your terminal including "cannot load such file -- webrick (LoadError)".
Please try installing webrick globally using `gem install webrick` *or* adding it to your project Gemfile using `bundle add webrick` in the project directory.
This issue will be resolved in future Jekyll versions.
{:.alert .alert-red}

Your dev environment is ready! Give yourself a hand!
