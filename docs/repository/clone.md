---
title: Clone Repository
parent: Repository
nav_order: 2
---

{:.alert .alert-blue}
**Attention GH users:** The rest of the instructions in this Repository section are optional for you!
You can move on to the [Metadata]({{ '/docs/metadata/' | relative_url }}) section. 
GH was designed so that all the edits can be made through the GitHub web interface. <br>
If you'd like to work on your repository on your local computer, and you've installed all the software required, you can follow the steps below and work in the same method as the other templates.

# Clone Your New Repository

Now that you have a repository set up on GitHub, we need to copy that folder down to your local machine to make working with it easier.

**Cloning** downloads a complete copy of the code and history from GitHub and stores it in a folder on your local computer.
This local copy of the repository is automatically configured to be connected to the version on GitHub.

It is important to realize that the repository really is just a folder of files!
You can open, move, or edit the files inside just like any other folder on your computer.

Cloning can be done visually using GitHub Desktop or Visual Studio Code, or on the command line using Git.
Each of these options is briefly described below--you only need to choose one!

## Clone with GitHub Desktop

1. On your new repository's home page, click on the green button labeled "Code" (appears on right above the code area).
2. In the box that pops up, click on the button labeled "Open with GitHub Desktop." This action will automatically open GitHub Desktop on your computer.
3. GitHub Desktop will ask you to confirm the path of the repository you are cloning to your computer. In most cases, the suggested path is fine to use so you can just click on the blue "Clone" button.

Once you click the "Clone" button, GitHub Desktop will create a new folder matching your repository name and download the repository from GitHub.

Now, in the top bar of GitHub Desktop you should see three buttons. 
On the left, the "Current repository" button lists the repository you just cloned. 
In the middle, you can check your current branch (it should say *main*), and on the right there is a button that allows you to "**Fetch origin**," "**Pull origin**," or "**Push origin**."

As you work, this button allows you to sync the local version of your repository with the version on GitHub, using Git to push and pull changes between them.

## Clone with Visual Studio Code

1. On your new GitHub repository's home page, click on the green button labeled "Code" (appears on right above the code area).
2. In the dropdown, under the "Clone" area, a HTTPS url will appear. Click the clipboard icon to copy the URL.
3. Open a new window of Visual Studio Code on your local computer.
4. Click on the Source Control pane (or `Ctrl + Shift + G`).
5. In the Source Control pane, click the "Clone Repository" button.
6. A textbox will appear at the top of the pane, paste in the clone url you copied from your GitHub repository and press Enter.
7. Select a folder to clone your repository to. Usually we create a folder in "Documents" named "github" to organize all our projects.

Once you select a location, Git (running in the background) will create a new folder on your computer matching your repository name and download the contents from GitHub.
When complete, VS Code will ask if you want to open the new repository to start working.

Check the [VS Code docs about using source control](https://code.visualstudio.com/docs/sourcecontrol/overview) for more details. 

## Clone on Command Line

1. On your new GitHub repository's home page, click on the green button labeled "Code" (appears on right above the code area).
2. In the dropdown, under the "Clone" area, a HTTPS url will appear. Click the clipboard icon to copy the URL.
3. Open a terminal on your computer (Git Bash on Windows, Terminal on Mac and Linux).
4. Navigate on the command line to the location where you want to keep your GitHub repositories. Usually we create a folder in "Documents" named "github" to organize all our projects. The command would be `cd Documents/github`. 
    - *Tip:* right clicking in a folder in your file explorer offers a quick way to open a terminal in that location so you can skip the navigation step. Look for "Git Bash here" or "Open in terminal".
5. With your terminal in the desired folder, type in the command `git clone`, then paste in the URL you copied from GitHub. Then click Enter.
    - *Tip:* paste into the terminal by using `Ctrl + Shift + V` or by right clicking and selecting paste.

Once you press "Enter", Git (running in your terminal) will create a new folder on your computer matching your repository name and download the contents from GitHub.
If you want to keep using Git on the command line, `cd` into the new repository folder that Git just created.
