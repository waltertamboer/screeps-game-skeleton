// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= paths.src %>',
            src: '**/*.js',
            dest: '<%= paths.dist %>'
        }],
        options: {
            preserveComments: false,
            sourceMap: false,
            report: "min",
            beautify: {
                "ascii_only": true
            },
            banner: "/*! Walter Tamboer's Screeps Game Logic v<%= pkg.version %> */\n",
            compress: {
                "hoist_funs": false,
                loops: false,
                unused: false
            }
        }
    }
};
