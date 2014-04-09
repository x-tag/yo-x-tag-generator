module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      demo: {
        options:{
          port: 3001,
          base: '',
          keepalive: true
        }
      }
    },
    jshint:{
      options:{
        jshintrc: true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    'smush-components': {
      options: {
        fileMap: {
          js: 'demo/x-tag-components.js',
          css: 'demo/x-tag-components.css'
        }
      }
    },
    bumpup: ['bower.json', 'package.json', 'xtag.json'],
    tagrelease: {
      file: 'package.json',
      prefix: '',
      commit: true
    },<% if(stylus) { %>
    stylus:{
      dist: {
        options:{
          compress: true,
          paths:['bower_components/brick-common/styles']
        },
        files: {
          'src/<%= fileName %>.css': 'src/<%= fileName %>.styl'
        }
      }
    },<% } %>
    exec: {<% if(componentType == 'Element'){ %>
      'update_gh_pages':{
        cmd: 'git stash && git checkout gh-pages && git rebase master && git push origin gh-pages && git checkout master && git stash pop'
      },<% } %>
      'update_master':{
        cmd: 'git push origin master --tags'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');<% if(stylus) { %>
  grunt.loadNpmTasks('grunt-contrib-stylus');<% } %>
  grunt.loadNpmTasks('grunt-smush-components');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build', ['jshint','smush-components'<% if(stylus) { %>,'stylus:dist'<% } %>]);
  grunt.registerTask('bump:patch', ['bumpup:patch', 'tagrelease']);

  grunt.registerTask('push', ['exec:update_master'<% if(componentType == 'Element'){ %>,'exec:update_gh_pages'<% } %>]);
  grunt.registerTask('bump-push', ['bump:patch','push']);

};
