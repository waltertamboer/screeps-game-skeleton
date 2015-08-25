// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
    grunt: {
        options: {
            reload: true
        },
        files: ['Gruntfile.js', 'grunt/**/*.js']
    },
    src: {
        files: ['src/**/*.js'],
        tasks: ['lint-js', 'build', 'screeps'],
    }
};
