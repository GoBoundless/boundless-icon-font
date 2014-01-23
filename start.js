//This file just runs a couple simple commands to get fontCustom to start listening on our svg folder.
//We use forever to start/monitor it as a daemon.

var forever = require('forever');
var path = require('path');
var fs= require('fs');

var svgPath = path.resolve(__dirname, './svg');
fs.readdir(svgPath, function(err, files){

  var hasSvg = false;
  for (var i=0; i<files.length; i++){
    if( files[i].indexOf('.svg') != -1 ){
      hasSvg = true;
    }
  }
  if(!hasSvg){
    console.log('There are no .svg files in the ./svg directory. Please place at least one svg, then re-run this command.');
    return;
  }

  var logPath = path.resolve(__dirname, './logs');
  var fontCustom = forever.startDaemon(path.resolve(__dirname, './startFontCustom.js'), {
          'max': 20,
          'logFile': logPath+'/forever.log', // Path to log output from forever process (when daemonized)
          'outFile': logPath+'/out.log', // Path to log output from child stdout
          'errFile': logPath+'/err.log' // Path to log output from child stderr
  });
  console.log('fontCustom folder watcher daemon started by Forever.');

});