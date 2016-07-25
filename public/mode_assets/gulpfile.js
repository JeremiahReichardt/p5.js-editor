'use strict';

var config;
var Path = require('path');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var bs = require('browser-sync').create();

process.on('message', function(_config) {

  config = _config;

  bundle();

  bs.init({
    port: 8080,
    open: false,
    notify: false, // TODO: make this an option in the settings panel
    server: {
      baseDir: config.base
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  }, function(a){
    process.send( 'Server is starting' );
  });

  bs.emitter.on( 'init', function () {
    process.send( 'Server has initialized' );
  });

  bs.emitter.on( 'service:running', function ( obj ) {
    process.send( 'P5_EVENT_URL' + obj.url );
  });

  var pathGood = Path.join( config.base, '**/*.*' );
  var pathBad = Path.join( '!' + config.base, 'build/**/*' );

  var watcher = gulp.watch( [pathGood, pathBad], ['scripts-app'] );
  watcher.on( 'change', function( event ) {
    process.send( 'File ' + event.path + ' was ' + event.type + ', running tasks...' );
  });
});

function bundle() {
  var bundler = browserify( config.entry, {
    debug: true,
    cache: {}
  });
  var rebundle = function() {
    return bundler.bundle()
      .pipe( source('sketch.build.js') )
      .pipe( buffer() )
      .pipe( sourcemaps.init({loadMaps: true}) )
      .pipe( sourcemaps.write( Path.join(config.base, 'build/') ) )
      .pipe( gulp.dest( Path.join(config.base, 'build') ) )
      .pipe( bs.stream() );
  };
  bundler.on( 'update', rebundle );
  return rebundle();
}

gulp.task( 'scripts-app', bundle );
