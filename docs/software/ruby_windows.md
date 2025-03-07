---
title: Windows - Ruby Install
parent: Software
nav_order: 4
---

# Ruby on Windows

Use [RubyInstaller for Windows](https://rubyinstaller.org/){:target="_blank" rel="noopener"}.

- First, [download](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener"} the suggested stable version "WITH DEVKIT" (as of this writing, Ruby+Devkit 3.2.4 (x64))
    - Double click the installer package you downloaded to start the install wizard. At this point, Windows may give you a "Microsoft Defender SmartScreen" warning pop up--click the "more info" to access the "Run anyway" option. On some systems, you may get an option to "install for current user" or "all users", choose the recommended "current user only".
    - Click through the installer using the default options (but make sure "Add Ruby executables to your PATH" is checked).
    - After extracting the components, the final step will display a "Finish" button--ensure the box to start the MSYS2 DevKit is checked, then click "Finish".
- Second, the installer will automatically open a terminal window with options to install MSYS2 DevKit components. 
    - Choose option 3, "MSYS2 and MINGW development toolchain", or simply press `Enter` to install all the necessary dependencies. 
    - The installer will proceed through a bunch of steps outputting a bunch of text in the terminal window. *Eventually*, this will conclude and you should see a message with the word `success` or `succeeded` in it. 
    - If the window doesn't close, press `Enter` again or manually close it.

Once the installation completes, you should have Ruby available on the command line!
Open a Git Bash terminal and type `ruby -v`. 
This should provide a response like "ruby 3.2.4" which lets you know that your Ruby is correctly installed.

To avoid possible issues, we suggest you update Ruby Gem at this time.
Gem is a tool to install Ruby Gems packages on your system. 
It comes with your Ruby, but may be out of date in the installer.
To update, type the command: `gem update --system`

*Notes:* 

- The Ruby MSYS2 DevKit installer can be restarted if necessary by typing `ridk install` into a command prompt.
- Ruby 3.2.0 was not working with some Jekyll versions--if you have 3.2.0, please update your Ruby and Jekyll to avoid issues!

## Update RubyInstaller

For minor patch versions (e.g. 3.1.0 to 3.1.3) you can update by downloading and running the fresh RubyInstaller package.
The installer will update your ruby version where it is currently installed and everything will still work. 

However, new stable branches (e.g. 3.1.x to 3.2.x) should be updated by first uninstalling the old version, then using RubyInstaller to install the new version. 

- Open "Settings" app, click on "Apps & features"
- In your list of "Apps & features", search for "ruby"
- Click on your ruby installation, then click "Uninstall"
- Once the uninstaller finishes, look in your C: drive for the folder "Ruby32-x64" where Ruby was installed. Delete this folder to finish cleaning your system.
- Install your new version using RubyInstaller as normal. Keep in mind, your previous gems and configuration will no longer exist! You will have to `gem install bundler jekyll` again to get started.
- In any existing projects, you will want to delete the "Gemfile.lock" file (since it is based on your old versions). 
