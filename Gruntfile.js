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
        sassDir: 'assets/sass',
        cssDir: 'assets/css',
      }
    }
    }, 


    requirejs: { app: { options: { findNestedDependencies: true, mainConfigFile: 'assets/js/config.js', baseUrl : 'assets/js', name : 'app', out : 'build.js', optimize : 'none', } } },
    
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
 grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'compass','requirejs','watch'] );

}
