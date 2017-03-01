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


    concat: {
    options: {
      separator: ';',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        dest: 'dist/built.js',
      },
    },
    
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
        outputStyle: 'compressed',
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
      },
      options: {
      livereload: {
           host: 'localhost',
           port: 9000
          }
      }

    }
 
  });

  // Plugins do Grunt
 grunt.loadNpmTasks('grunt-contrib-compass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks( 'grunt-contrib-uglify' );
 grunt.loadNpmTasks('grunt-contrib-concat');

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'compass','watch','uglify']);

}
