---
title: Create a Repository
parent: Repository
nav_order: 1
---

# Create a New Repository

First, set up a repository on GitHub for your CollectionBuilder project.
Each repository on GitHub is basically a folder for storing and tracking the code for a project.

{% capture newrepo %}
1. Login on [GitHub](https://github.com)
2. Go to the repository corresponding to the type you are using: 
    - **GH** 
        - <https://github.com/CollectionBuilder/collectionbuilder-gh>{:target="_blank"}
    - **CONTENTdm (CDM)** 
        - <https://github.com/CollectionBuilder/collectionbuilder-contentdm>{:target="_blank"} 
    - **SA** 
        - <https://github.com/CollectionBuilder/collectionbuilder-sa>{:target="_blank"} 
2. Click the green "Use This Template" button.    
3. This brings you to a "Create a new repository" form. Follow these steps:
    1. **Enter your new repository name**. Use a lowercase name without spaces or odd characters. We often append `_source` or `_draft` to our projects to keep track of the status. If you are using GH, this name will become part of your site URL, so think through how it will look as a link.
    2. Most users should choose "Public" repository. If you are hosting on GitHub Pages it *must* be public unless you upgrade to a paid account.
    3. Leave the "Include all branches" option **Unchecked**! (you do not want all branches, only the main branch)
    4. Click on the green button "**Create repository from template**." This will take you to your new repository.
{% endcapture %}
{% include feature/card.html text=newrepo %}