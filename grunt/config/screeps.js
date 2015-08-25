// https://github.com/screeps/grunt-screeps
module.exports = function(grunt) {
    'use strict';

    var config = grunt.file.readJSON('config/screeps.json');

    return {
        options: config,
        dist: {
            src: 'dist/*.js'
        }
    };
};
