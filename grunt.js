module.exports = function(grunt) {

  grunt.loadTasks('tasks');

  grunt.initConfig({
    coffeelint : {
      all : { 
        files : [
          'coffee/*.coffee'
        ]
      }
    }
  });
}
