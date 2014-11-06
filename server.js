#!/usr/bin/env node
"use strict";

var program = require('commander');
var express = require('express');
var fs      = require('fs');

var running = false;

program.version(require('./package.json').version)
       .usage("<Command> - run the ogc gui\n\n    Please refer to each commands --help for details now how to run each service.");

program.command('serve')
       .description('host the ogc GUI or other static web content')
       .option('--listen-port <GUI_PORT>', "port to listen on,  default: 80\n", process.env.GUI_PORT || 80)
       .option('--source-dir  <GUI_DIR>',  "dir the gui is stored in, default: 80", process.env.GUI_DIR || '/srv/www/')
       .action(function (options) {
         var app = express();

         app.use(express.static(options.sourceDir));

         var server = app.listen(options.listenPort, function() {
           console.log('server hosting %s on http://%s:%s', options.sourceDir, server.address().address, server.address().port);
         });
         running = true;
       });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
if (!running) {
  program.help();
}
