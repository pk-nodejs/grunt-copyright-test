module.exports = function GruntConfig(grunt) {
  grunt.initConfig({
    mkdir: {
      all: {
        options: {
          create: ['dist']
        }
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            src: ['**/*.js', '!node_modules/**', '!coverage/**'],
            dest: 'dist/'
          }
        ]
      }
    },

    clean: {
      dist: {
        src: ['dist/']
      }
    },

    checkcopyright: {
      taskName: {
        options: {
          position: 'top',
          banner: '// banner text',
          linebreak: true,
          replace: true
        },
        files: {
          src: [ 'dist/**/*.js' ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-oe-copyright');

  //grunt.registerTask('copyright', ['clean:dist', 'mkdir', 'copy', 'usebanner']);
  grunt.registerTask('oe-checkcopyright', ['clean:dist', 'mkdir', 'copy', 'checkcopyright']);
};