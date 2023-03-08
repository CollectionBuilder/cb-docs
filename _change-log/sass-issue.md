---
title: Updated CSS filename
release: 2022-12-23
---

Due to breaking updates in the gem "jekyll-sass-converter" used by Jekyll, the main CSS file of CollectionBuilder templates were changed from "assets/css/custom.scss" to "assets/css/cb.scss".
This should have no impact on new projects.

However, if you are using a CB template copied before 2022-12-23, with the most up-to-date Jekyll packages, you might encounter a build error with the build failing on "custom.scss".
To fix it in your own existing template the best option is to rename the "custom.scss" file:

1. look for the "custom.scss" file in the folder "assets/css/", and rename the file to "cb.scss"
2. Edit the include "_includes/head/head.html", changing the line where it says `<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}" type="text/css">` to be `<link rel="stylesheet" href="{{ '/assets/css/cb.css' | relative_url }}" type="text/css">`

Alternatively, in your older existing projects, you can prevent Jekyll from updating the jekyll-sass-converter gem which is causing the issue. To do this, edit the "Gemfile" in your project, adding `gem "jekyll-sass-converter", "< 3.0"` on a new line. Delete your old "Gemfile.lock" then proceed as normal (i.e. `bundle exec jekyll s`). The older version of jekyll-sass-converter will work.
