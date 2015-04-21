gulp    = require 'gulp'
uglify  = require 'gulp-uglify'
rename  = require 'gulp-rename'

gulp.task 'default', ['build']

gulp.task 'build', ->
  gulp
    .src 'src/**/**.js'
    .pipe uglify()
    .pipe rename
      extname: '.min.js'
    .pipe gulp.dest 'dest'
