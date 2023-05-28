---
title: Install Ruby
parent: Software
nav_order: 3
---

# Install Ruby

[Ruby](https://www.ruby-lang.org/en/){:target="_blank" rel="noopener"} is a open source programming language popular with web applications.
**_You do not need to know anything about Ruby_** to use CollectionBuilder, but you do need it to run Jekyll on your system!

Jekyll requires a Ruby version 2.5.0 or greater, however, we usually use more up to date Ruby versions. 

Depending on your operating system (i.e. Mac), this might be the most complicated part of the development environment to install, so we divided instructions into three sections:

- [Ruby on Windows]({{ '/docs/software/ruby_windows/' | relative_url }})
- [Ruby on Mac]({{ '/docs/software/ruby_mac/' | relative_url }})
- [Ruby on Linux]({{ '/docs/software/ruby_linux/' | relative_url }})

These approaches that have worked for us, but you may want to refer to Jekyll's official [installation guides](https://jekyllrb.com/docs/installation/) for more tips!

{:.alert .alert-yellow}
Did you install Ruby and Jekyll a long time ago, but never updated it?
Issues and conflicts with old versions of Ruby and Jekyll are common stumbling blocks we encounter when teaching.
Although uninstalling your existing versions can be confusing and frustrating process if you don't remember how you installed it in the first place, it is a good idea to get a fresh start to ensure you have working and up to date versions.

{:.alert .alert-purple}
If you change or update Ruby versions and end up with bundler errors when you try to use Jekyll--deleting the old "Gemfile.lock" in your repository is usually a quick fix.
