module.exports = function( grunt ) {

  grunt.initConfig({
 
    uglify : {
      options : {
        mangle : false
      },
 
      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/scripts.js' ]
        }
      }
    }, // uglify


    compass: { 
      dist: {
        options: {
          sassDir: 'assets/_sass',
          cssDir: 'assets/css',
          environment: 'production'
        }
    },
    dev: {                    // Another target
      options: {
        sassDir: 'assets/_sass',
        cssDir: 'assets/css',
        imagesDir: 'assets/img/',
        outputStyle: 'expanded',
        environment: 'development',
        noLineComments: false
      }
    }
    }, 

    watch: {
      compass: {
       files: ['**/*.{scss,sass}'],
       tasks: ['compass:dev']
      },
      js: {
        files: 'assets/_js/**/*',
        tasks: [ 'uglify' ]
      }
    }
 
  });

  // Plugins do Grunt
 grunt.loadNpmTasks('grunt-contrib-compass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks( 'grunt-contrib-uglify' );

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'compass','watch','uglify']);

}
