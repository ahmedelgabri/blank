'use strict'
module.exports = (grunt) ->

  #***********************************
  # Loading Grunt Tasks Automatically
  #***********************************
  require('load-grunt-tasks')(grunt, ['grunt-contrib-*', 'grunt-*'])

  #**********************
  # Configuration
  #**********************
  blankConfig =
    build       : 'css'
    src         : 'scss'

  grunt.initConfig

    # Grunt Config
    # ================================
    blank: blankConfig
    pkg: grunt.file.readJSON('package.json')

    # Compiling Sass
    # ================================
    sass:
      build:
        options:
          style        : 'expanded'
          unixNewlines : true
          precision    : 3

        files:
          '<%= blank.build %>/main.css': '<%= blank.src %>/main.scss'
          '<%= blank.build %>/ie.css': '<%= blank.src %>/extras/ie.scss'

    # Autoprefixer
    # ================================
    autoprefixer:
      options:
        browsers: ['> 1%', 'last 1 version', 'ie 8', 'android 4', 'ios 6']
        diff: true

      files:
        expand: true
        flatten: true
        src: ['!<%= blank.build %>/*.min.css', '<%= blank.build %>/*.css']
        dest: '<%= blank.build %>/'

    # MINIFY CSS
    # ================================
    csso:
      build:
        options:
          report: 'gzip'

        files:
          '<%= blank.build %>/main.min.css': '<%= blank.build %>/main.css'
          '<%= blank.build %>/ie.min.css': '<%= blank.build %>/ie.css'

    # Clean folders
    # ================================

    clean:
      build:
        files: [
          dot: true
          src: ['<%= blank.build %>/**/*', '!<%= blank.build %>/.git/*']
        ]

    # Watch task
    # ================================
    watch:
      sass:
        files: ['<%= blank.src %>/{,**/}*.{scss,sass}']
        tasks: ['sass', 'autoprefixer', 'csso']

  # Registering Tasks
  # ================================
  grunt.registerTask 'default', (target) ->
    grunt.task.run [
      'clean'
      'sass'
      'autoprefixer'
      'csso'
      'watch'
    ]
