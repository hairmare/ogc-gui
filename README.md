# Online GLSA Checker GUI

[![Docker badge](http://img.shields.io/badge/Docker-hairmare%2Fogc--gui-008bb8.svg)](https://registry.hub.docker.com/u/hairmare/ogc-gui/) [![HuBoard badge](http://img.shields.io/badge/Hu-Board-7965cc.svg)](https://huboard.com/hairmare/ogc)

Main GUI for OGC. Built for [docker](https://docker.io).

The main GUI is a HTML5 website that gets hosted staticallty. This
repo also contains a static webserver for running it in docker.

## Install

```
docker pull hairmare/ogc-gui
```

## Usage

Call it using ``docker run hairmare/ogc-gui``.

```
  Usage: ogc-gui <Command> - run the ogc gui

    Please refer to each commands --help for details now how to run each service.

  Commands:

    serve [options]   host the ogc GUI or other static web content

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```
