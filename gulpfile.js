var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var babel = require('gulp-babel'); 
var autoprefixer = require('gulp-autoprefixer');

var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var cat = require('gulp-cat');  
var browserify = require('browserify');
var addsrc = require('gulp-add-src');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css'); 
var base64 = require('gulp-base64');
var exec  =require('child_process').exec;
var gulpSequence = require('gulp-sequence');
var streamify = require('gulp-streamify')
var fs = require('fs');
var md5File = require('md5-file');


gulp.task('vendor',function(){
	// place the files
	gulp.src([  
	    "public/assets/vendor/jquery-2.2.3.min.js",
	    "public/assets/vendor/underscore.min.js",
	    "public/assets/vendor/react.js",
	    "public/assets/vendor/react-dom.js",
	    "public/assets/vendor/backbone-min.js",
	    "public/assets/bs3/js/bootstrap.min.js"  
  	]) 
  .pipe(uglify())
  .pipe(concat('vendor.min.js')) 
  .pipe(gulp.dest('public/assets/js/'));


  gulp.src([ 
    "public/assets/jsx/components.jsx",
  ])
  .pipe(babel({
            presets: ['react']
  })) 
  .pipe(uglify())
  .pipe(concat('app.min.js'))  
  .pipe(gulp.dest('public/assets/js/')); 


   gulp.src([
      "public/assets/bs3/css/bootstrap.min.css",
      "public/assets/css/font-awesome.css",
    ])
  .pipe(minifyCss())
  .pipe(concat('vendor.min.css'))
  .pipe(gulp.dest('public/assets/css/'));
})
