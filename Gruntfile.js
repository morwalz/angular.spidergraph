module.exports = function(grunt) {
    // load all grunt tasks from package.json matching the 'grunt-*' pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        distdir: 'build',
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        clean: {
            dist: ['<%= distdir %>/*']
        },

        copy: {
            assets: {
                files: [
                    { dest: '<%= distdir %>', src: '**', expand: true, cwd: 'src/' }
                ]
            }

        },
        uglify: {
            dist: {
                src:['<%= distdir %>/**/*.js'],
                dest: '<%= distdir %>/angular-spider-graph.min.js'
            }
        }
    });

    // Task registration
    grunt.registerTask('default', ['clean','copy','uglify']);
};
