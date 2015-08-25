module.exports = function(grunt) {
    'use strict';

    var project = {
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            get config() {
                return this.grunt + 'config/';
            },
            dist: 'dist/',
            grunt: 'grunt/',
            src: 'src/'
        },
        files: {
            get config() {
                return project.paths.config + '*.js';
            },
            grunt: 'Gruntfile.js',
            src: ['src/*.js']
        }
    };

    require('load-grunt-config')(grunt, {
        configPath: require('path').join(process.cwd(), project.paths.config),
        data: project
    });

    grunt.loadNpmTasks('grunt-screeps');
    //grunt.loadTasks('grunt/tasks');
    grunt.registerTask('lint-js', ['jshint', 'jscs']);
    grunt.registerTask('lint', ['jsonlint', 'lint-js']);
    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('default', ['lint', 'build']);
};
