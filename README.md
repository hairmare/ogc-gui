# Online GLSA Checker GUI

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
