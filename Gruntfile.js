module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          {
          expand: true,
          cwd: 'node_modules/',
          src: '**',
          dest: 'app/build/',
          flatten: false,
          filter: 'isFile',
          },
          {
          expand: true,
          cwd: 'bower_components/',
          src: '**',
          dest: 'app/build/',
          flatten: false,
          filter: 'isFile',
          }
        ],
      },
    },
});

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy'])

};
