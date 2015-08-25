// https://github.com/gruntjs/grunt-contrib-jshint
module.exports = {
    dist: {
        options: {
            jshintrc: true
        },
        src: [
            "Gruntfile.js",
            "build/tasks/**/*.js",
            "src/**/*.js",
            "test/**/*.js"
        ]
    }

};
