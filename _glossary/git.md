---
title: Git
link: https://git-scm.com/
---

[Git](https://git-scm.com/){:target="_blank"} is a popular free, [distributed version control](https://en.wikipedia.org/wiki/Distributed_version_control) system originally developed for coordinating huge software development projects. 
However, it is fast and flexible enough to be used on any scale project, from your personal notes to your research lab's code--and offers many benefits beyond "track changes".
Git can be used on your personal computer, or by online services to track the development of a project

Git tracks the history of changes in a folder of files, called a Git "repository" or "repo". 
Git captures a snapshot of your project each time you "commit".
Then it permanently stores this series of snapshots as your project's history.
Try to think of your changes as separate from the document itself.
The current file that you see in your folder is made up of a specific set of those changes, while the complete history of your project is safely stored in a hidden ".git" directory.

Each `commit` records the creator, email, message, and changes made, providing transparency and credit for your project, as well as, checksums to ensure no information can be lost or corrupted without detection.
Unlike "track changes", this history stays with the repository permanently.

Git is distributed meaning every copy of a repository contains the complete history. 
This is great for collaboration, fast performance, and offline usage.
Git can efficiently branch, diff, and automatically merge different sets of changes together, enabling people to work in parallel and sync their files.

Resources:

- Command: `git --help` (remember, lots of built in help at your finger tips!)
- The [Git Book](https://git-scm.com/book/en/v2)
- [GitHub Guides](https://guides.github.com/), check out Hello World to learn basic GitHub features, or for more in depth tutorials visit [GitHub Learning Lab](https://lab.github.com/)
- Software Carpentry [Unix Shell](http://swcarpentry.github.io/shell-novice/01-intro/){:target="_blank"} and [Version Control with Git](http://swcarpentry.github.io/git-novice/){:target="_blank"} lessons
- Get Git [command quick ref]({{ '/cheatsheet.html' | absolute_url }})
