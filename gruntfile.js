module.exports = function(grunt) {
    grunt.initConfig({
      concat: {
        dist: {
          src: ['src/file1.js', 'src/file2.js'],
          dest: 'dist/bundle.js',
        },
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
  
    grunt.registerTask('default', ['concat']);
  };
  