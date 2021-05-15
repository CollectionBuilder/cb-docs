---
title: Timeline Page
parent: Theme Options
nav_order: 8
---

# Timeline Page

The Timeline page represents each year as a row and each corresponding item as a thumbnail. 
This section will let you determine which years are in the **dropdown button** at the top right of the Timeline page. 
This button allows a user to jump down the page.

### year-navigation: 
- Sets the years to appear in Timeline dropdown nav. 
	- *Tip*: If left blank, these will auto-generate. (We recommend leaving this blank.)
```yaml
year-navigation: 1900;1905;1910;1915;1920
```

### year-nav-increment: 
- Sets the increment at which the years in the Timeline dropdown nav are automatically generated. 
	- Default: `5`
```yaml
year-nav-increment: 7
```