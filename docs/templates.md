---
title: Templates
nav_order: 0
---

# CollectionBuilder Templates

A CollectionBuilder "template" is a repository of code that provides the starting point for your project. 
Each template is a complete, self-contained folder of source code ready to create a digital exhibit--> you will replace the demo configuration values, metadata, and objects with your own!

CollectionBuilder templates come in a couple different *flavors* designed to facilitate different use cases.
This documentation applies to all the current "templates" of the CollectionBuilder framework--the basics are the same for each type!
There are a few steps where the documentation does vary between templates, however, so be on the lookout for bolded font and colored alerts that indicate when the details diverge. 

The templates are currently: 

- **CSV** - for [CollectionBuilder-CSV](https://github.com/CollectionBuilder/collectionbuilder-csv), a robust template for developing exhibits on your local computer (and serving them from anywhere!). CSV is flexible and highly customizable, able to accommodate a wide variety of project types.
- **GH** - for [CollectionBuilder-GH](https://github.com/CollectionBuilder/collectionbuilder-gh), a lightweight learning-focused template designed for free hosting on GitHub Pages. This is a great option for learning, teaching, quick prototyping, or just testing! A complete collection can be built without installing anything using the GitHub web interface.
- **Sheets** - for [CollectionBuilder-Sheets](https://github.com/CollectionBuilder/collectionbuilder-sheets), a minimal template designed for loading collection metadata directly from a CSV (such as a published Google Sheet!). This enables live collaboration to prototype collections with minimal set up and unique learning experiences.

For technical details about what is inside a template, check [Overview of Template Structure]({{ '/docs/advanced/architecture-overview/' | relative_url }}).

## What is a template anyway?

A template is a model on which you can base your own work.

Rather than going through prompts and steps to create something new, a template asks you to replace what is already in the model with content of your own.

In CollectionBuilder's case, this means replacing our demo metadata and objects with your own, and then replacing the values in several config files with those that make the template look and feel like the site you want.

You can also use the templates to look at what's going on. Once you copy a CollectionBuilder template, the code and all the files are totally yours to investigate and customize.
