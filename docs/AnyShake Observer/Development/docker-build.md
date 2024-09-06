---
sidebar_position: 2
---

# Build Docker Image

In this document, we will guide you through building a Docker image for AnyShake Observer.

## Prerequisites

 - [Docker 20.10 or later](https://docs.docker.com/get-docker/)

## Get Source Code

Clone the repository with `--depth=1` to avoid downloading the entire history.

``` bash
$ git clone --depth=1 https://github.com/anyshake/observer
```

If you don't have `git` installed, you can download the source code as a `.zip` or `.tar.gz` archive, extract it and `cd` into the directory. However, you will not be able to update the source code with `git pull`.

 - [github.com/anyshake/observer/archive/refs/heads/master.zip](https://github.com/anyshake/observer/archive/refs/heads/master.zip)
 - [github.com/anyshake/observer/archive/refs/heads/master.tar.gz](https://github.com/anyshake/observer/archive/refs/heads/master.tar.gz)

## Build Docker Image

Go to the repository root directory to build the Docker image.

``` bash
$ docker build -t anyshake/observer .
```

The Docker image will be built with the tag `anyshake/observer:latest`.

## For China Developers

If you are in China, uncomment the following lines in the `Dockerfile` to accelerate the build process:

 - Line 3: APK repository mirror
 - Line 5: NPM registry mirror
 - Line 23: Go module proxy
