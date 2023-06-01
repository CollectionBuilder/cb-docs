---
title: Windows - Ruby Install
parent: Software
nav_order: 4
---

# Ruby on Windows

Use [RubyInstaller for Windows](https://rubyinstaller.org/){:target="_blank" rel="noopener"}.

- First, [download](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener"} the suggested stable version "WITH DEVKIT" (as of this writing, Ruby+Devkit 3.2.2 (x64))
    - Double click the installer package you downloaded to start the install wizard. 
    - Use the install defaults, but make sure "Add Ruby executables to your PATH" is checked. On the final step, ensure the box to start the MSYS2 DevKit is checked.
- Second, the installer will automatically open a terminal window with options to install MSYS2 DevKit components. 
    - Choose option 3, "MSYS2 and MINGW development toolchain", or simply press `Enter` to install all the necessary dependencies. 
    - The installer will proceed through a bunch of steps outputting a bunch of text in the terminal window. *Eventually*, this will conclude and you should see a message with the word `success` or `succeeded` in it. 
    - If the window doesn't close, press `Enter` again or manually close it. 
    - *Note:* The installer can be restarted if necessary by typing `ridk install` into a command prompt.

Once the installation completes, you should have Ruby available on the command line!
Open a terminal (Git Bash), and type `ruby -v`. 
This should provide a response like "ruby 3.2.2" which lets you know that your Ruby is correctly installed. 

*Note: Ruby 3.2.0 was not working with some Jekyll versions--if you have 3.2.0, please update your ruby and jekyll to avoid issues!*

## Update RubyInstaller

For minor patch versions (e.g. 3.1.0 to 3.1.3) you can update by downloading and running the fresh RubyInstaller package.
The installer will update your ruby version where it is currently installed and everything will still work. 

However, new stable branches (e.g. 3.1.x to 3.2.x) should be updated by first uninstalling the old version, then using RubyInstaller to install the new version. 

- Open "Settings" app, click on "Apps & features"
- In your list of "Apps & features", search for "ruby"
- Click on your ruby installation, then click "Uninstall"
- Once the uninstaller finishes, install your new version using RubyInstaller as normal. Keep in mind, your previous gems and configuration will no longer exist! You will have to `gem install bundler jekyll` again to get started.
