---
title: Google Search
parent: Advanced
nav_order: 4
---

# Add Google Custom Search Page

After your site has been up for awhile, [Google Programmable Search Engine](https://programmablesearchengine.google.com/about/) (previously known as Custom Search Engine / CSE) can provide a quality search of your content.
It is possible to embed a Programmable Search directly into a page in your collection site. 

## Set up Custom Search

Start by setting up your custom search:

- Log in with a Gmail account at <https://programmablesearchengine.google.com/>
- The main "Programmable Search" page will display any custom searches you have already set up. Click the "Add" button to create a new one.
- Give your custom search a meaningful name.
- Paste the full URL of your collection site followed by a wild card (`*`) in the "Search specific sites" box. For example, `username.github.io/repository/*`.
- Click "Create".
- Click "Customize" (or from main page, click on the search name).
- Click "Look and Feel" on the left side menu.
- On the Layout tab, choose "Full width".
- On the Themes tab, choose "Minimalist", then click "Save".
- Click "Get Code", then copy the embed code provided. 

The embed code will look something like this:

```
<script async src="https://cse.google.com/cse.js?cx=a7dexampledf5">
</script>
<div class="gcse-search"></div>
```

The "Look and Feel" settings above will allow the embed to integrate into the search page seamlessly, but feel free to experiment with the options!
Check the [Programmable Search docs](https://developers.google.com/custom-search) for more details.

## Create Google Search Page

Next you need a page to add the embed code where users will be able to search.
You have two options, create a new page or replace the existing lunr search page.

### Create a New Search Page

[Add a new page]({{ '/cb-docs/docs/pages/add_page/' | relative_url }}) to your site as usual. 
Generally, this might be a file named "google.md", with content like this example:

```
---
title: Google Search
layout: page
permalink: /search/google.html
---

## Google Site Search

<script async src="https://cse.google.com/cse.js?cx=a7dexampledf5">
</script>
<div class="gcse-search"></div>

```

Notice the embed snippet provided by Programmable Search is pasted into the file. 
Be sure to add a link to this new page!

### Replace Existing Search

Replacing the standard Lunr search page will provide Google search that works directly with the search box in your site's navbar. 

Open the file "pages/search.md". 
Change the layout value from `search` to `page`.
Paste the embed code below the page's header.

For example, the edited "search.md" might look like:

```
---
title: Site Search
layout: page
permalink: /search/
---

## Google Search

<script async src="https://cse.google.com/cse.js?cx=a7dexampledf5">
</script>
<div class="gcse-search"></div>
```

Optionally, you might add a notice to your uses such as "Please note: Custom Search is a free service provided by Google. Results depend on third party indexing and may contain ads."

{:.alert .alert-yellow}
Google provides powerful, free(ish) services that can be added on to your site.
Using their platform services is a very popular choice, perhaps the standard. 
However, given concerns over exposing your user's privacy and tracking, you should carefully consider if they are necessary in your context or if other alternatives exist.
