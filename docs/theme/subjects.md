---
title: Subjects Page
parent: Theme Options
nav_order: 6
---

# Subjects Page

This section of "_data/theme.yml" configures the content of the collection's subject word cloud page.

### subjects-fields: 
- Choose metadata fields from your collection metadata CSV to be included in the Subjects page word cloud.
	- Multiple fields must be separated by a semicolon(`;`)
```yaml
subjects-fields: subject;creator
```
	- When this field is left blank, subjects will not be generated and the word cloud on the Subjects page will be blank. 

{:.alert .alert-yellow}
**Important note:** You must also remove the "Subjects" line from the [_data/config-nav.csv]({{ '/customization/config-nav/' | relative_url }}) to remove the Subjects page from the site completely.

### subjects-min: 
- Minimum number of times a subject term must appear before being displayed in the word cloud. 
	- Use this to improve load and build times. Too many terms = slow load time!
	- Range: `1` - `30` (note that a really large number will likely make no subjects appear)
```yaml
subject-min: 4
```

### subjects-stopwords: 
- A set of words/phrases to be removed from the word cloud
	- Multiple fields must be separated by a semicolon(`;`)
```yaml
stopwords: boxers;boxing;boxer
```

{:.alert .alert-red}
**Please note:** When you are adding a stop-word, it needs to be the exact word/phrase for it to be removed from the word cloud (e.g., including the stop-word "moscow" does *not* remove the subject term "moscow, idaho"). If you are removing a phrase, make sure to enclose the entire phrase within quotation marks.