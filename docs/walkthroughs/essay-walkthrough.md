---
title: CB-Essay Recipe
parent: Walkthroughs
nav_order: 6
layout: walkthrough
commit_in: github
personalize:
  your-username: GitHub username
  your-repo: Repository name
  Your Site Title: Site title
  Your Name: Your name
---
{% raw %}

# Your first CB-Essay

A recipe for publishing a short essay on the web with [CB-Essay](https://collectionbuilder.github.io/cb-essay/): your writing, a featured quotation, a note in the margin, and a small collection of your own (a photo, a PDF and a video) woven into your words.
Everything happens in a web browser. There's nothing to install.

Makes
: One essay website with its own small collection, at your-username.github.io/your-repo

Time
: About two hours, including short waits. Parts 1 and 2 make a good first sitting.

Resting time
: 2–3 minutes each time GitHub republishes your site

Skill level
: Beginner. No coding experience needed.

## Ingredients

- [ ] A free [GitHub account](https://github.com/signup), with your email address verified
- [ ] A web browser
- [ ] Three or four paragraphs of your own writing, in a document you can copy from
- [ ] One quotation you'd like to feature, and the name of the person who said or wrote it
- [ ] One photo (a JPG file), one PDF, and the link to one YouTube video, all things you have permission to share
- [ ] A Google account, to use Google Sheets
- [ ] The [CB-Essay template](https://github.com/CollectionBuilder/cb-essay)

## Good to know before you start

- Your site and its files will be public. Free hosting on GitHub Pages needs a public repository.
- You'll write in [Markdown](https://www.markdownguide.org/basic-syntax/), a plain-text format: `*italic*`, `**bold**`, and `## Heading`.
- The template comes with a small demo collection, so you can use its items before adding your own.
- Each change you save is called a **commit**. After each one, GitHub takes 2–3 minutes to republish your site.

## Prepare the site

When you finish this part you'll have your own copy of CB-Essay, published on the web.

### Make your copy of the template
{: app="web"}

1. Sign in to GitHub and open the [CB-Essay template](https://github.com/CollectionBuilder/cb-essay).

2. Choose **Use this template**, then **Create a new repository**.

3. Name it `your-repo`. The name becomes part of your site's address, so keep it short and lowercase, with no spaces.

4. Leave it **Public**, then choose **Create repository**.

> **Done when:** your browser shows [github.com/your-username/your-repo](https://github.com/your-username/your-repo) with a list of files.

### Turn on publishing
{: app="web"}

1. In your repository, choose **Settings**, then **Pages** in the left-hand menu.

2. Under **Source**, choose **GitHub Actions**.

3. In the **Jekyll** box, choose **Configure**. A file named `jekyll.yml` opens in an editor.

4. Find the line that reads `ruby-version: '3.1'` (around line 40) and change the number so it reads:

   ```yaml
   ruby-version: '3.4'
   ```

5. Choose **Commit changes…**, then **Commit changes** again.

> **Careful:** Change only the number. Keep the quotation marks and the spaces at the start of the line.

> **Done when:** after a 2–3 minute rest, [your-username.github.io/your-repo](https://your-username.github.io/your-repo/) shows the CB-Essay demo site.

#### Something went wrong

- **No Actions tab in your repository?** Actions may be turned off for your account. Go to **Settings** → **Actions**, choose **Allow all actions**, and save.
- **A red ✕ in the Actions tab?** The build failed. Open it to read the error. The usual cause is the `ruby-version` line: check the quotation marks and the spaces.

## Write your essay

When you finish this part you'll have your own essay on the site, with a featured quotation, a margin note, and an item from the collection.

### Start your essay file
{: app="web"}

1. In your repository, open the `_essay` folder.

2. Choose **Add file** → **Create new file**, and name it `my-first-essay.md`.

3. Paste this at the very top, then change the title to your own:

   ```yaml
   ---
   title: My First Essay
   order: 10
   ---
   ```

4. Below the second `---`, paste your paragraphs. Leave a blank line between paragraphs.

> **Save point:** Add my first essay

> **Done when:** after a rest, your essay opens at [your-username.github.io/your-repo/essay/my-first-essay.html](https://your-username.github.io/your-repo/essay/my-first-essay.html).

#### Why order 10?

`order` sets where your essay sits in the site's navigation.
The demo essays use 1 to 6, so 10 puts yours after them.
Number with gaps (10, 20, 30) and you can always slot a new essay in between.

### Feature a quotation
{: app="web"}

1. Open `_essay/my-first-essay.md` and choose the pencil icon (**Edit this file**).

2. Between two paragraphs, on a line of its own, paste this and replace the quotation and the name:

   ```
   {% include essay/feature/blockquote.html quote="The words you want to feature." speaker="Who said it" %}
   ```

> **Careful:** If your quotation contains double quotation marks ("), change them to single ones (') so they don't end the quote early.

> **Save point:** Add a featured quotation

> **Done when:** your quotation appears large and set apart between your paragraphs.

#### More options

Add `source="Title of the work"` to credit where the quotation comes from, or `size="lg"` (`sm`, `md`, `lg`, `xl`, `xxl`) to change how large it appears.

### Add a note in the margin
{: app="web"}

1. Edit your essay again. Find a sentence you'd like to comment on.

2. Right after that sentence, on the same line, paste this and write your note:

   ```
   {% include essay/feature/aside.html text="Your note about this sentence." %}
   ```

> **Save point:** Add a margin note

> **Done when:** on a computer, your note sits in the margin beside the sentence. On a phone, it appears within the text instead.

### Bring in an item from the collection
{: app="web"}

1. Edit your essay again. After another sentence, paste this:

   ```
   {% include essay/feature/aside.html objectid="demo_001" text="What this item shows, and why it matters here." %}
   ```

2. `demo_001` is a photograph of the University of Idaho's Administration Building from the demo collection. Try `demo_006` or `demo_031` for other photographs.

> **Save point:** Add a collection item

> **Done when:** a thumbnail of the item appears in the margin with your note, and clicking it opens the item.

#### Can I use my own items?

Yes. That's the next part.

## Add your own collection

When you finish this part you'll have a small collection of your own (one photo, one PDF and one video) described in a spreadsheet, with all three working in your essay.
Starting with just three items keeps it quick, and covers each kind of item you're likely to use later.

> **Note:** A CB-Essay site gets its collection from a spreadsheet. Each row describes one item: what it's called, what kind of file it is, and where the file lives.
> Once your spreadsheet is in place, any item can appear in your essay by its ID.

### Gather your three items
{: app="files"}

1. Choose one photo (a JPG) and one PDF from your computer.

2. Rename both files in lowercase with no spaces, such as `garden-photo.jpg` and `field-notes.pdf`.

3. Find a YouTube video and copy its link from the **Share** button. It looks like `https://youtu.be/CVXQ3X6Q8oU`. The part after `youtu.be/` is the video's ID.

> **Careful:** Each file must be under 25 MB to upload in the browser. A photo straight from a phone camera is usually fine.

> **Done when:** you have two renamed files and a YouTube link ready.

### Upload your files
{: app="web"}

1. In your repository, open the `objects` folder.

2. Choose **Add file** → **Upload files**, and drag in your photo and your PDF.

> **Save point:** Add my photo and PDF

> **Done when:** the `objects` folder lists `garden-photo.jpg` and `field-notes.pdf` (or your own file names).

### Copy the spreadsheet template
{: app="sheets"}

1. Open the [CollectionBuilder metadata template](https://docs.google.com/spreadsheets/d/1nN_k4JQB4LJraIzns7WcM3OXK-xxGMQhW1shMssflNM/copy?usp=sharing) and choose **Make a copy**.

2. Your copy has example rows. Select rows 2 and below, right-click, and choose **Delete rows**. Keep row 1, the column names.

> **Done when:** your copy has only the column names in row 1.

#### What are all these columns?

You'll fill in only a few columns for each item and can leave the rest blank.
When you're ready for more, the [CSV Metadata documentation](https://collectionbuilder.github.io/cb-docs/docs/metadata/csv_metadata/) explains every column, including `date`, `subject` and `location`, which power the Timeline, Subjects and Map pages.

### Describe your photo
{: app="sheets"}

1. In row 2, fill in these columns. Use your own file name and words:

   | Column | What to write |
   |---|---|
   | `objectid` | `my_photo` |
   | `title` | A short title, like `Garden in June` |
   | `description` | A sentence or two about it |
   | `format` | `image/jpeg` |
   | `display_template` | `image` |
   | `object_location` | `/objects/garden-photo.jpg` |
   | `image_small` | `/objects/garden-photo.jpg` |
   | `image_thumb` | `/objects/garden-photo.jpg` |
   | `image_alt_text` | What the photo shows, for people who can't see it |

> **Careful:** File paths start with `/objects/` and must match your file name exactly, including capital letters.

> **Done when:** row 2 describes your photo.

#### About objectid

The `objectid` is how your essay finds an item.
It must be unique, lowercase, with no spaces. Underscores and dashes are fine.
You can use your own IDs instead of `my_photo`, as long as you use the same ID everywhere.

### Describe your PDF
{: app="sheets"}

1. In row 3, fill in:

   | Column | What to write |
   |---|---|
   | `objectid` | `my_pdf` |
   | `title` | A short title |
   | `description` | A sentence or two about it |
   | `format` | `application/pdf` |
   | `display_template` | `pdf` |
   | `object_location` | `/objects/field-notes.pdf` |

2. Leave `image_small` and `image_thumb` blank. Your site will show a PDF icon instead.

> **Done when:** row 3 describes your PDF.

### Describe your video
{: app="sheets"}

1. In row 4, fill in these columns, replacing `VIDEO-ID` with your video's ID (the part after `youtu.be/`):

   | Column | What to write |
   |---|---|
   | `objectid` | `my_video` |
   | `title` | The video's title |
   | `description` | Why it's in your collection |
   | `format` | `video/mp4` |
   | `display_template` | `video` |
   | `object_location` | `https://youtu.be/VIDEO-ID` |
   | `image_small` | `https://img.youtube.com/vi/VIDEO-ID/hqdefault.jpg` |
   | `image_thumb` | `https://img.youtube.com/vi/VIDEO-ID/mqdefault.jpg` |

> **Done when:** row 4 describes your video, and pasting the `image_small` link into a browser shows a still from the video.

### Add the spreadsheet to your site
{: app="sheets web"}

1. In your spreadsheet, choose **File** → **Download** → **Comma Separated Values (.csv)**.

2. Without opening it, rename the downloaded file to `my-collection.csv`.

3. In your repository, open the `_data` folder, choose **Add file** → **Upload files**, and add `my-collection.csv`. Commit.

4. Open `_config.yml` and choose the pencil icon. Find the `metadata:` line and change it to:

   ```yaml
   metadata: my-collection
   ```

> **Careful:** Don't open the CSV in Excel. If Excel saves it, special characters can display wrongly on your site.

> **Save point:** Use my own collection

> **Done when:** after a rest, your site's Browse page at [your-username.github.io/your-repo/browse.html](https://your-username.github.io/your-repo/browse.html) shows your three items.

#### Where did the demo items go?

Your site now uses your spreadsheet instead of the demo one, so the demo essays lose their example items. That's expected.
To change or add items later, edit your Google Sheet, download it again as `my-collection.csv`, and upload it to `_data` to replace the old one.

### Put your items to work
{: app="web"}

Edit your essay and try each of these. Each one shows off a different kind of item.

1. **Your photo in the margin.** In your collection-item note from Part 2, change `demo_001` to `my_photo`:

   ```
   {% include essay/feature/aside.html objectid="my_photo" text="What this photo shows, and why it matters here." %}
   ```

2. **Your PDF beside a sentence.** PDFs and videos in the margin show as a small card that opens the item:

   ```
   {% include essay/feature/aside.html objectid="my_pdf" text="The original notes." %}
   ```

3. **Your video in the flow of the essay.** On a line of its own, between paragraphs:

   ```
   {% include feature/video.html objectid="my_video" %}
   ```

4. **All three in a gallery.** On a line of its own, list the IDs separated by semicolons:

   ```
   {% include essay/feature/image-gallery.html objectid="my_photo;my_pdf;my_video" %}
   ```

> **Save point:** Use my collection in my essay

> **Done when:** your essay shows your photo in the margin, a card for your PDF, your video playing in the page, and a gallery of all three.

#### Show the whole PDF on the page

To show the PDF itself instead of a card, use `{% include feature/pdf.html objectid="my_pdf" %}` on a line of its own.

## Season to taste

When you finish this part your site will carry your name and a look you chose, and you'll have a link to share.

### Put your name on it
{: app="web"}

1. Open `_config.yml` and choose the pencil icon.

2. Find `title:` and `author:` near the top and fill them in:

   ```yaml
   title: Your Site Title
   author: Your Name
   ```

> **Save point:** Add title and author

> **Done when:** your site's homepage shows your title, with "by" and your name below it.

### Choose a look
{: app="web"}

1. Open `_data/theme.yml` and choose the pencil icon.

2. Find `color-theme:` and pick one of `default`, `idaho`, `lyre`, `nonesuch`, `aldine`, `doves`, `kelmscott`, `gregynog` or `ashendene`:

   ```yaml
   color-theme: kelmscott
   ```

> **Save point:** Change the color theme

> **Done when:** your site's colors change. Try a few until one suits your essay.

### Serve and share
{: app="browser"}

1. Open [your-username.github.io/your-repo](https://your-username.github.io/your-repo/) and read your essay from the start.

2. Copy the address and send it to someone.

> **Done when:** someone else has opened your essay on their own device.

## Variations

- **Start from a classic.** CB-Essay can import a public domain book from Project Gutenberg. In the **Actions** tab, choose **Extract Gutenberg Book** → **Run workflow**, enter a book number (`84` is *Frankenstein*), and choose **Run workflow** again. See [Extracting a Book from Project Gutenberg](https://collectionbuilder.github.io/cb-essay/essay/035-gutenberg-extraction.html).
- **Grow your collection.** Add a row to your spreadsheet for each new item, upload any new files to `objects`, and replace `_data/my-collection.csv` with the new download. Fill in `date`, `subject` and `location` to light up your site's Timeline, Subjects and Map pages.
- **Tell it by scrolling.** Pin images or a map behind your text as the reader scrolls. See [Scroll-Based Features](https://collectionbuilder.github.io/cb-essay/essay/05-scroll-features.html).
- **Print it.** Your site has a Print & PDF page at your-username.github.io/your-repo/print/ for printing an essay or making a PDF.
- **Make it all yours.** When you're ready, delete the demo essays from the `_essay` folder.

## For instructors

- Students need only a web browser and their own GitHub account. Ask them to create and verify their accounts before class, since the verification email can take a few minutes.
- Each published change takes 2–3 minutes to appear. Students can keep writing while they wait.
- Students' sites and repositories are public.
- The full [CB-Essay documentation](https://collectionbuilder.github.io/cb-essay/docs.html) covers every feature. Questions are welcome in the [CollectionBuilder Discussion Forum](https://github.com/orgs/CollectionBuilder/discussions).

{% endraw %}
