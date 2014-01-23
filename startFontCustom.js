//This file just runs a couple simple commands to get fontCustom to start listening on our svg folder

var spawn = require('child_process').spawn;
var path = require('path');


var folderWatch = spawn('fontcustom', ['watch', path.resolve(__dirname, './svg') ]);

folderWatch.stdout.on('data', function (data) {
  console.log( data.toString() );
});

folderWatch.stderr.on('data', function (data) {
  console.log('err: ' + data.toString() );
});

folderWatch.on('close', function (code) {
  console.log('fontCustom folder watcher exited with code: ' + code.toString() );
});