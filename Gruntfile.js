var configRepos = require('./.repos').map(function(repo) {
    return { path: ['repos'], repo: repo }
});

module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-gitpull');

    grunt.initConfig({
        gitPull: {
            all: {
                repos: configRepos
            },
        },
    });

    grunt.registerTask('default', 'gitPull');

};
