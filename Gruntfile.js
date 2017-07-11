module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
      build: {
        NODE_ENV: 'production'
      }
    },
    react: {
      jsx: {
        files: [
          {
            expand: true,
            cwd: '.',
            src: [ 'src/**/*.jsx' ],
            dest: 'node_modules',
            ext: '.js'
          }
        ]
      }
    },
    browserify: {
      dev: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          'public/build/build.js': 'src/app/app.jsx'
        }
      },
      build: {
        options: {
          debug: false,
          transform: ['reactify']
        },
        files: {
          'public/build/build.js': 'src/app/app.jsx'
        }
      }
    },

    watch: {
      react: {
        files: ['src/**/*.jsx'],
        tasks: ['react', 'browserify:dev']
      },
      options: {
        nospawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['env:build', 'react', 'browserify:build']);
};
