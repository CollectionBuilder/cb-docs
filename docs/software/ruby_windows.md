---
title: Windows - Ruby Install
parent: Software
nav_order: 4
---

# Ruby on Windows

Use [RubyInstaller for Windows](https://rubyinstaller.org/){:target="_blank" rel="noopener"}.

- First, [download](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener"} the suggested stable version "WITH DEVKIT" (as of this writing, Ruby+Devkit 2.7.X (x64)) and double click to install. Use the install defaults, but make sure "Add Ruby executables to your PATH" is checked. On the final step, ensure the box to start the MSYS2 DevKit is checked.

- Second, the installer will automatically open a terminal window with options to install MSYS2 DevKit components. Choose option 3, "MSYS2 and MINGW development toolchain", or simply press `Enter` to install all the necessary dependencies. The installer will proceed through a bunch of steps outputting a bunch of text in the terminal window. *Eventually*, this will conclude and you should see a message with the word `success` in it. If the window doesn't close, press `Enter` again or manually close it. (The installer can be restarted by typing `ridk install` into a command prompt).