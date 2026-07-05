---
title: Codespaces
parent: Advanced
nav_order: 4
---

# GitHub Codespaces

[Codespaces](https://github.com/features/codespaces) is a free-ish service from GitHub that allows you to open a development environment directly in your web browser. 
With some configuration files and the click of a button, you will get a version of VS Code editor with a terminal connected to a container running in the cloud. 

This means you can develop a CollectionBuilder project without installing anything!
Codespaces is a good alternative if you can not get all the software installed on your local machine or want to teach the full development environment without the install steps. 

Please keep in mind that Codespaces uses metered billing. 
GitHub provides a free tier of usage, which can change at anytime. 
It is somewhat difficult to know exactly how long your free usage will last--but in our experience (2026), it seems like more than enough to set up, configure, and test a basic collection.

## Configure GitHub Codespaces

To use Codespaces you will add two files ("Dockerfile" and "devcontainer.json") in a folder ".devcontainer" in your CollectionBuilder project.

On GitHub, create a CollectionBuilder project repository as normal.
Then follow the steps below to add the configuration files (this only has to be done one time).

### devcontainer.json
 
1. Navigate to the home page of your project repository. 
2. Click "Add file" and select "Create new file"
3. Above the text editor, click in the "Name your file" form. Type in `.devcontainer/devcontainer.json` (this will create the new folder and file)
4. In the editor body paste the following JSON:

```
{
  "name": "CollectionBuilder",
  "build": {
    "dockerfile": "Dockerfile",
    "context": ".."
  },
  "postCreateCommand": "bundle install",
  "forwardPorts": [4000],
  "workspaceFolder": "/workspaces/${localWorkspaceFolderBasename}",
  "remoteUser": "vscode"
}

```

### Dockerfile

1. Navigate to the home page of your project repository. 
2. Click "Add file" and select "Create new file"
3. Above the text editor, click in the "Name your file" form. Type in `.devcontainer/Dockerfile`
4. In the editor body paste the following configuration:

```
FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

ARG RUBY_VERSION=4.0.5

# Install system dependencies and CollectionBuilder tooling.
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
    build-essential \
    autoconf \
    bison \
    libssl-dev \
    zlib1g-dev \
    libyaml-dev \
    libreadline-dev \
    libgmp-dev \
    libncurses5-dev \
    libffi-dev \
    libgdbm-dev \
    libdb-dev \
    libbz2-dev \
    liblzma-dev \
    libsqlite3-dev \
    uuid-dev \
    rustc \
    curl \
    ca-certificates \
    git \
    imagemagick \
    ghostscript \
  && rm -rf /var/lib/apt/lists/*

# Install rbenv + ruby-build and compile the requested Ruby version.
ENV RBENV_ROOT=/usr/local/rbenv
ENV PATH=${RBENV_ROOT}/bin:${RBENV_ROOT}/shims:${PATH}

RUN git clone https://github.com/rbenv/rbenv.git ${RBENV_ROOT} \
  && mkdir -p ${RBENV_ROOT}/plugins \
  && git clone https://github.com/rbenv/ruby-build.git ${RBENV_ROOT}/plugins/ruby-build \
  && ${RBENV_ROOT}/plugins/ruby-build/install.sh \
  && rbenv install ${RUBY_VERSION} \
  && rbenv global ${RUBY_VERSION} \
  && gem update --system \
  && gem install bundler \
  && rbenv rehash

RUN chown -R vscode:vscode ${RBENV_ROOT}

```

*Note:* the Ruby version is set at the top of the Dockerfile (`4.0.5` above).
This should be updated to a recent stable version if necessary.

## Start Codespace

Once the configuration files are set, you can start up your Codespace at any time. 

1. Navigate to the home page of your project repository. 
2. Click the "Code" button.
3. In the dropdown, click the "Codespaces" tab.
4. If this is your first time, click "Create codespace on main" button. If you have previously started a codespace, click on the name to restart it (the name will be random).

A new browser window will open (in the domain "github.dev"), with VS Code visible.
You may see files show up in the editor, but wait until the container finishes loading.
You will know everything is ready when the Terminal opens up to a blank prompt.

The first time building the codespace will take a long time, more than five minutes--just wait!
It is installing *EVERYTHING* from the [CB Software section]({{ '/docs/software/' | relative_url }}).
Future use of the same codespace will start much quicker.

Once loaded, this codespace is just like having a full CB environment on you local machine.

### View Dev Site

To view you site, type `bundle exec jekyll s` in the Terminal (just like you would on a local machine).

A notification will appear in the lower right saying "Your application running on port 4000 is available". 
Click the "Open in Browser" button.

### Commit Changes

Use the Source Control pane to make commits. 

Remember to "Sync Changes" / git push!

The Codespace is a separate computer and does NOT automatically sync with your GitHub repository. 
It is just like working on a local computer.

Likewise, when you restart / reopen an existing codespace it does NOT automatically get the fresh history from GitHub.
Be sure to git pull before you start working! 
Click the refresh icon in the lower left next to "main" (or the branch name). 

### Objects

To add files to your "objects" directory, you can drag & drop them from your local system's file explorer into the "objects" folder in VS Code's Explore pane.

You can then run Rake tasks, such as `rake generate_derivatives`, just as you would on your local machine.

## Stop Codespace

First, make sure you have committed and pushed any changes!

Then simply close the browser tab with VS Code. 

Closing the browser does not stop the container.
It will eventually turn off due to inactivity, however, to avoid wasting credits manually stop the codespace.

On the home page of your project repository, click the "Code" button, click the "Codespaces" tab, and look for the name of your codespace.
Near the name, click the menu icon and select "Stop codespace".

You can also visit [github.com/codespaces](https://github.com/codespaces) to manage all your codespaces in one place.
