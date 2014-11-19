'use strict';

var fs = require('fs');
var gulp = require('gulp');

// TODO ここから下はnpmに切り離し リファクター
fs.readdirSync(__dirname + '/gulp/').forEach(function(filename) {
  require('./gulp/' + filename);
});
