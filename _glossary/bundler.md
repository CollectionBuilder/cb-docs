---
title: Bundler
link: https://bundler.io/
---

Bundler is a utility to manage dependencies for Ruby projects.
It is used to install, record, and manage the specific versions of Ruby Gems used on a per project basis.

Since Jekyll is a very complex Gem with many dependencies, they recommend using Bundler to keep everything in working order.
When you start a new CollectionBuilder project, you will use Bundler to record your working development environment so that it can be reproduced on other computers to avoid breakage due to updates in dependencies.

Bundler terms: 

- "Gemfile" records the Gems required for your project (the requirements for CollectionBuilder are just Jekyll!).
- "Gemfile.lock" records all the Gems and their specific versions that are used in your project so that the environment can be reproduced.
- `bundle install` is used the first time you use a project on your computer to install the requirements listed in the "Gemfile" and "Gemfile.lock". This will set up a "bundle" of Gems matching the requirements separate from other versions of the same Gem installed on your system.
- `bundle exec` is used as prefix to all commands given in your project repository so that they are run using the bundle's Gems, rather than other versions on your system.
