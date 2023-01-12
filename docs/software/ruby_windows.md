---
title: Windows - Ruby Install
parent: Software
nav_order: 4
---

# Ruby on Windows

Use [RubyInstaller for Windows](https://rubyinstaller.org/){:target="_blank" rel="noopener"}.

{:.alert .alert-purple .my-3}
January 2023 Note: Ruby 3.2.0 is the latest stable version as of this writing **BUT** it is not working cleanly right now with Ruby, so **we are recommending you install version 3.1.3**.


- First, [download](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener"} the suggested stable version "WITH DEVKIT" (as of this writing, Ruby+Devkit 3.1.X (x64))
    - Double click the installer package you downloaded to start the install wizard. 
    - Use the install defaults, but make sure "Add Ruby executables to your PATH" is checked. On the final step, ensure the box to start the MSYS2 DevKit is checked.
- Second, the installer will automatically open a terminal window with options to install MSYS2 DevKit components. 
    - Choose option 3, "MSYS2 and MINGW development toolchain", or simply press `Enter` to install all the necessary dependencies. 
    - The installer will proceed through a bunch of steps outputting a bunch of text in the terminal window. *Eventually*, this will conclude and you should see a message with the word `success` in it. 
    - If the window doesn't close, press `Enter` again or manually close it. 
    - *Note:* The installer can be restarted if necessary by typing `ridk install` into a command prompt.
