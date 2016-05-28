var gulp = require('gulp');
var chalk = require('chalk');

var config = {
  destinationFolder:'',
  abcsFolder:'',
};


gulp.task('default', function() {
  // place code for your default task here
  console.log(chalk.blue('hello world'));
});
