---
title: Build the Site
parent: Deploy
nav_order: 2
---

**These instructions are for CDM & SA Users**:

# Building the Site 

## Build using "rake deploy"

1. If you're running a development server, stop the server by typing `CTRL C` in the terminal. 
2. Type `rake deploy` in the command line. 
3. Jekyll will build your files in the _site directory. 

## Build using "jekyll build" (not recommended)

1. If you're running a development server, stop the server by typing `CTRL C` in the terminal. 
2. Type `bundle exec jekyll build` in the command line. 
3. Jekyll will build your files in the _site directory. 

# Overview of the Web Page Building Process

Jekyll creates the web like it's 1999, outputting a folder of HTML, CSS, and other static assets as a complete site--but when first using the generator, it's hard to know where those files actually are and how you might move them to another server. 
Let's lift the veil: 

**Jekyll outputs the complete website in a directory called "_site"**. 
It does this both while generating the files for development and when you command it to build for production. 

When you're generating a test site using `bundle exec jekyll s` on the commandline, Jekyll automatically builds all the pages with links based on the development server, by default using urls that start with `http://127.0.0.1:4000/`. 

To build the site for production, Jekyll uses the `bundle exec jekyll build` command instead. 
In contrast to the development server, `bundle exec jekyll build` generates the complete site using the real world URLs configured in your "_config.yml".

However, CollectionBuilder only adds some features when the site is built using the Jekyll ["production" environment](https://jekyllrb.com/docs/configuration/environments/){:target="_blank" rel="noopener"} (which is the default when generated on GitHub Pages). 

The environment can be added before the Jekyll command, like `JEKYLL_ENV=production bundle exec jekyll build`. 
To make it easier, CollectionBuilder provides the `rake deploy` command as an alternative.

## Why you should use "rake deploy" 

Using `rake deploy` does three important things: 

1. It builds the site with the appropriate (full) links. 
    - (so https://www.lib.uidaho.edu/digital/boxing/browse.html rather than http://127.0.0.1:4000/digital/boxing/browse.html)
2. It add rich meta markup for items pages including [Open Graph](https://opengraphprotocol.org/){:target='_blank' rel='noopener'}, [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/){:target='_blank' rel='noopener'}, and [Schema](https://schema.org/){:target='_blank' rel='noopener'} (as configured in "config-metadata.csv").
3. It adds the analytics include onto every page, including Google Analytics code *if* you have added a `google-analytics-id` in the "_config.yml" file. 
    - Waiting until final deployment to add the analytics prevents false hits on your analytics account.

{:.alert}
**A Note on Google Analytics**: We don't necessarily recommend adding Google Analytics to your website. 
We assume, however, that a large number of our eventual users might use the tool to collect web statistics (we do in many of our sites), so we provide a pre-configured method to automatically add the service's tracking code. <br>
However, any analytics service can be added to your site by pasting the tracking snippet they provide into "_includes/head/analytics.html".
If you're interested in an analytics platform that doesn't sell your users' data, we've enjoyed [Matomo](https://matomo.org/){:target='_blank' rel='noopener'} recently.
