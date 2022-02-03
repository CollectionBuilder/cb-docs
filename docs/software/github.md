---
title: GitHub
parent: Software
nav_order: 0
---

# GitHub

To manage the code and collaborate on developing your CollectionBuilder project, you will need a version control platform to keep everything organized.
We use [GitHub]({{ '/docs/glossary/#github' | relative_url }}), which is powered by the version control system [Git]({{ '/docs/glossary/#git' | relative_url }}).

GitHub is the most popular platform for developing and sharing code online, hosting projects from giant enterprise software, to OER learning, to personal portfolios. 
It is great to become familiar with the platform so that you can take part in this community and its resources.

Code for your CollectionBuilder project will be stored on GitHub in a Git "repository".
So the first step is to sign up for a GitHub account if you do not have one already.

*Note:* these docs assume you are using GitHub--however, it is not in any way a requirement to use CollectionBuilder. 
Alternative platforms, such as [GitLab](https://about.gitlab.com/) or [Bitbucket](https://bitbucket.org/product), are available--or you could use no version control at all (we don't suggest this)!
{:.alert}

## GitHub Account

Visit <https://github.com> and click the "Sign up" button to set up your account.
Normal use with CollectionBuilder projects falls within the "free" tier on the platform (**you do not need a paid account!**).

Once you complete the sign up, be sure to verify your email to get all features activated.
Check our [GitHub glossary entry]({{ '/docs/glossary/#github' | relative_url }}) for introductory resources.

If you are collaborating with others, you may also want to set up a GitHub Organization to own your projects.
See our [GitHub Orgs entry]({{ '/docs/glossary/#github-organizations' | relative_url }}) for info.

{:.alert .alert-blue}
Your email and user name is recorded with every commit.
This helps ensure integrity and authenticity of the history.
Most people keep their email public. 
Alternatively, check GitHub's tips on how to [set up email privacy](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses){:target="_blank" rel="noopener"}. 
GitHub can provide a no-reply email address that can be found via your email settings on your profile.

## Using GitHub

GitHub provides features for managing and editing project code right in your browser. 
Once you have a repository set up (more on that a bit later), the web interface will display the contents much like navigating a folder of files on your computer.

Click on folder or filenames to view them. 
On pages displaying text files (YAML, Markdown, CSV, HTML), look for the pencil icon in the upper right to open the built in web editor.

For a more powerful editing experience you can also use the [github.dev Web Editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) by pressing `.` or changing the URL from "github.com" to "github.dev"--this will open a light-weight version of the Visual Studio Code text editor in your browser without installing anything.

If you are starting a CollectionBuilder-GH project, it is possible to work entirely in the GitHub web interface--so you are ready to go, no software to install--skip ahead to [creating your project repository]({{ '/docs/repository/' | relative_url }})!

For other template types, GitHub will be the central place to sync your code and manage your project, but you will complete most work on your local machine--so you probably *do* need to keep reading this "Software" section of the docs.
