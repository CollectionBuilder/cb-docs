---
title: Object Utilities
parent: Extras
nav_order: 1
---

{:.alert .alert-yellow }
This section presents **totally optional** command line utilities that **might** be helpful when working with digital files for your collection.

# Utilities for Working with Objects

Preparing your digital collection objects often involves needing to transform batches of files, such as making filenames lowercase or changing file extensions.
This section outlines some helpful command line utilities to solve these issues.

--------------

## Get List of Filenames

It is often helpful to have a list of filenames for all your objects as a starting point for your metadata CSV for GH and SA projects.
There are a couple ways to do this depending on your operating system.

**Windows Explorer:**

1. Open the folder containing all your objects in Windows Explorer (in GH this is likely the "objects" directory in your project repository).
2. Select all the files (you can use `Ctrl + A`). 
3. Hold `Shift` and right click in the selected files, then select the "Copy as path" option (alternatively, click Home tab at top of Explore and select the "Copy as path" option).
4. Paste (`Ctrl + V`) into a column in a spreadsheet or a text file.
5. This provides Windows style file paths for all select files, e.g. "C:\Users\username\Documents\collectionbuilder-demo\objects\demo_004.jpg". You will next want to use Find & Replace or split column to remove the Windows path, cleaning the value to just the filename with extension, e.g. "demo_004.jpg". 

**Mac Finder:**

1. Open the folder containing all your objects in Finder (in GH this is likely the "objects" directory in your project repository).
2. Select all the files (you can use `Command + A`)
3. Copy the files (use `Command + C`, or right click > Copy)
4. Paste into the column of a spreadsheet using `Command + Shift + V` or into a text file using `Command + V` (or right click > Paste). (Note: if you use `Command + V` when pasting into the spreadsheet, you'll find that you'll paste in the actual files themselves instead of the filenames. If this happens, try `Command + Shift + V` instead.)

**Using command line:**

1. Open a terminal in the folder containing all your objects (likely the "objects" directory in your project repository)
2. Type the command `ls > list.txt` ("ls" lists all files, ">" directs the output into a text file)
3. Open the new "list.txt" file with your editor and delete any lines that are not objects in your collection (i.e. "README.md", "list.txt", etc).
4. Copy the whole block of remaining filenames (there will be one on each line in the file), then paste into a spreadsheet in the "filename" column. Each filename should automatically fill in the value on one row.
5. Fill out the rest of the metadata starting from the "filename"!

----------------

## Rename Files to All Lowercase

Bash (on Windows Git Bash and Linux) and ZSH (on Mac) have built in functions to change the case of strings. 
You can use it in a `cp` command to make a copy of your files with lowercase filenames and extensions. 

On Bash (on Windows Git Bash, most Linux distros, and old versions of Mac OS):

1. Open a terminal in the folder containing all your objects (likely the "objects" directory in your project repository)
2. Type `pwd` to make sure your terminal is in the correct folder location! 
3. Type the command `mkdir renamed` to create a new folder for the renamed files.
4. Type the command `for f in *.*; do cp "$f" "renamed/${f,,}"; done` to copy *all* files in the current directory to the new folder, while making the names and extensions all lowercase. You can copy specific file types by swapping `*.*` for an extensions, like `*.jpg`.
5. Look in the "renamed" folder to ensure you have the intended output. If all is good, delete the originals from "objects", then copy the renamed versions out of "renamed" and into "objects".

If you encounter an error, try the older `tr` version, like: `for f in *.*; do cp "$f" "renamed/$( tr '[:upper:]' '[:lower:]' <<<"$f" )"; done`.

ON ZSH (on Mac OS, and some Linux):
follow the same steps, but use the command `for f in *.*; do cp "$f" "renamed/${file:l}"; done`.

*Tip:* If you want to use a GUI try [Advanced Renamer](https://www.advancedrenamer.com/) or [FileRenamer](https://www.sttmedia.com/filerenamer-download). 
And the Linux Files app has GUI renaming support built in. 

-----------------

## Extract Embedded Metadata with ExifTool

[ExifTool](https://exiftool.org/) is a command line utility that can reliably work with metadata embedded in files. 

You might want to extract embedded metadata because: 

- Images taken by modern cameras and phones often contain useful embedded metadata such as GPS coordinates.
- PDF, video, and audio files can also sometimes have embedded metadata fields that may be of interest added by their creators or devices. 
- Some organizations may embed descriptive or rights metadata into their objects.

### Install ExifTool

- Windows: [download the "Windows Executable"](https://exiftool.org/index.html)
    - Unzip the package.
    - Inside you will find a file named "exiftool(-k).exe". Rename it to `exiftool.exe`.
    - Copy "exiftool.exe" into the folder "C:\Windows" (this will require admin privileges). Alternatively, add it to your [Git Bash root](https://evanwill.github.io/_drafts/notes/gitbash-windows.html).
- Mac: [download the "MacOS Package"](https://exiftool.org/index.html) (.dmg file) and install.
- Linux: install ExifTool as the Perl library from your distro repository, e.g. on Ubuntu `sudo apt install libimage-exiftool-perl`

Check the [official install docs](https://exiftool.org/install.html) for more details.

### Extract Embedded Metadata as CSV

Once you have exiftool on your system, open a terminal in the folder containing all your objects (likely the "objects" directory in your project repository).

You might start out by checking the embedded metadata in one image to see what is available in your objects.
The command `exiftool` followed by a filename will print out all available information:

```
exiftool example.jpg
```

ExifTool has built in batch and CSV export functions.
To extract all embedded metadata in all JPG files in the folder use:

```
exiftool -csv *.jpg > embedded_metadata.csv
``` 

Exactly what metadata is available varies widely between camera manufacturers. 
Most fields will be highly technical information that will probably not be of interest for your collection.
Change `*.jpg` to different extensions to extract from different file types.

Once you know what types of fields your files have embedded, you might want to only extract specific metadata tags.
Look up the possible [Tag Names](https://exiftool.org/TagNames/index.html) in the documentation for the guidelines.

For example, a batch of GPS tags from phone images can be extracted using: 

```
exiftool -gpslatitude -gpslongitude -csv *.jpg > embedded_locations.csv
```

### Writing Embedded Metadata

You may want to add embedded metadata to the image files in your collection to provide lasting attribution or source information. 
This can also be done as a batch with ExifTool. 

For example, this command will add embedded fields to all JPGs in the current folder:

```
exiftool -Title="Example Collection" -Copyright="Photo courtesy of the Example Collection, University of X." -XMP-dc:Source="Example Collection, SPEC, University of X." *.jpg
```

*Note*, although there are lots of possible ways to embed metadata, not many are actually readable to commonly used applications. 
If you want the metadata to be visible in Window's file properties stick to common tags such as Title, Authors, and Copyright.
Full XMP DC elements are not commonly read by applications.
IPTC metadata has a ~30 character limit. 

-----------------

## Batch Convert Video Formats with FFmpeg

Video formats are complex--they involve combinations of video encoding, audio encoding, and containers--it all gets really confusing fast...
But generally speaking, MP4 is the most widely supported format on the web. 

If you have video files in other formats, you may want to convert them for compatibility or smaller file sizes. 
FFmpeg is a powerful command line tool that can do these types of conversions in batches.

### Install FFmpeg

- Windows install with downloaded installer: <https://www.ffmpeg.org/>
- Mac install using Homebrew: `brew install ffmpeg`
- Ubuntu install from repository: `sudo apt install ffmpeg`

FFmpeg is a command line application, so to use it: 

- open your terminal and navigate to the directory containing your videos (or open the terminal in that folder!)
- type your FFmpeg commands, starting with `ffmpeg`

For full information check [FFmpeg docs](https://www.ffmpeg.org/ffmpeg.html).

### Convert AVI to MP4

To losslessly copy your AVI video into the MP4 container (i.e. *without* re-encoding the video stream), use the command:

```
ffmpeg -i input-video.avi -c:v copy -c:a copy -y output-video.mp4
```

This command uses the options `-c:v copy` and `-c:a copy` to copy the video and audio streams without changing the encoding into the new MP4 container.

If you want to do a whole folder of AVI videos, you can use a Bash loop, like:

```
for f in *.avi; do ffmpeg -i "$f" -c:v copy -c:a copy -y "${f%.avi}".mp4; done
```

This loop goes through all AVI files in the current folder (`*.avi`), copies each one to a new MP4 file, and names it using the same base filename swapping out the extension (`"${f%.avi}".mp4` removes ".avi" and adds ".mp4" to the filename). 

If you get an error using the `copy` method, it probably means your AVI contains encodings that are not compatible with MP4. 
To just get it to work with the default options, just remove the `-c` flags, using just:

```
ffmpeg -i input-video.avi -y output-video.mp4
```

or

```
for f in *.avi; do ffmpeg -i "$f" -y "${f%.avi}".mp4; done
```

This might not be the optimal conversion, but it should work!

If you want to take more care, use `ffprobe -i input-video.avi` to learn more about the video and audio encodings embedded in your AVI. 
Then use specific encodings in the `-c` flags to control your output file.
