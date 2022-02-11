---
title: Site Settings
parent: Site Config
nav_order: 2
---

# Site Settings

This section of "_config.yml" is used to define the core information about your site. 
The values will be pulled into pages throughout your collection, populating areas such as the banner, footer, and meta markup.

### title: 

- The title of your digital collection. 
- This will appear as the title on the home page, and on every other page's header and footer. 
```yaml
title: Donald R. Theophilus Boxing Photograph Collection
```

### tagline: 

- An *optional* descriptive subtitle for the digital collection.
- This will appear underneath the title on the home page and on every other page's header.
```yaml
tagline: Photographs of University of Idaho Boxers and Boxing Teams, 1934 - 1953
```

### description:

- One or two sentences of explanatory text about the collection.
- Appears on the home page under the featured image and in meta markup. Since this description may appear in search result lists, keep it around 160 characters max.
```yaml
description: "A digital collection composed of 52 photographs of boxers and boxing teams from the University of Idaho"
```

### author: 

- You! The creator of the digital collection.
- Use your GitHub username or your name. This will only appear in the site's meta tags.
```yaml
author: evanwill
```

## Organization Branding section 

These values are **optional**, but should generally be all filled in or all skipped. 
Filling in these values adds an organization logo and link to banner, footer, and nav elements.

### organization-name: 

- The name of your organization.
- Used to reference your organization in the site's citation, and serves as alternate text for your organization logos.
```yaml
organization-name: "Digital Initiatives, University of Idaho Library"
```

### organization-link: 

- A link to your organization's homepage.
- This is the url connected to your organization name.
```yaml
organization-link: https://www.lib.uidaho.edu/digital/
```

### organization-logo-banner: 

- The image source for your organization logo that appears at the top right of the screen on all pages *except* the home page. 
- This logo is connected to the **organization-link** url you entered above.
```yaml
organization-logo-banner: https://www.lib.uidaho.edu/media/digital/justdi_logo_sm.png
```

### organization-logo-nav: 

- The image source for your organization logo that appears above your site title. 
- This image will appear above the **title** on your collection's homepage. This logo is connected to the **organization-link** url you entered above.
```yaml
organization-logo-nav: https://www.lib.uidaho.edu/media/digital/bannerlogo_allwhite.png
```
