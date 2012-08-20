module.exports = function(grunt) {

  grunt.registerHelper('coffeelint', function(files, done) {
    var exec = require('child_process').exec,
        command = 'coffeelint',
        args = files.join(' ');
      exec([command, args].join(' '), function(error, stdout, stderr) {
        grunt.log.write(stdout); 
        if(error !== null) {
          grunt.log.error(error);
          done(false);
        }
        else {
          done(true);
        }
      });
  });

  grunt.registerMultiTask('coffeelint', 'coffeelist files..', function() {
    var done = this.async(),
        files = this.data.files;
    console.log(files);
    grunt.helper('coffeelint', files, done);
    return true;
  });

};
