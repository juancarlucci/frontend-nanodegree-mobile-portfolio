module.exports = function(grunt) {

// configure task(s)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/js/*.js',
        dest: 'dist/js/script.min.js'
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
          src: 'src/js/*.js',
          dest: 'dist/js/script.min.js'
        }
      },
    watch : {
      js: {
        files: 'scr/js/*.js',
        tasks: ['uglify:dev']
      }
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/images'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    // uncss: {
    //   dist: {
    //     files: {
    //       '/css/tidy.css': ['src/portfolio_4.html']
    //     }
    //   }
    // },
    htmlmin: {
       dist: {
          options: {
             removeComments: true,
             collapseWhitespace: true
          },
          files: [{
             expand: true,
             cwd: 'src',
            //  this is not working to skip all files of node_modules
             src: ['**/*.html'],
             dest: 'dist/'
          }]
       }
    }
});
// load the plugins
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch'); //no registy for watch
grunt.loadNpmTasks('grunt-uncss');
// The newer task doesn't require any special configuration.
// To use it, just add newer as the first argument when running other tasks.
grunt.loadNpmTasks('grunt-newer');
// We recommend using grunt-newer to only process changed files as minifying images can be quite slow.
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

// register task(s)-- Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['uglify:dev', 'imagemin']);
// grunt.registerTask('default', ['uglify:dev']);

grunt.registerTask('build', ['uglify:build','cssmin', 'htmlmin' ]);
};
