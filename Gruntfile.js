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

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : 'assets/_sass/style.sass'
        }
      }
    }, // sass

    requirejs: { app: { options: { findNestedDependencies: true, mainConfigFile: 'assets/js/config.js', baseUrl : 'assets/js', name : 'app', out : 'build.js', optimize : 'none', } } },
    
    watch: {
    css: {
    files: '**/*.sass',
    tasks: ['sass'],
    options: {
      livereload: true,
    },
    },
    },
    modernizr: {


    "devFile" : "lib/modernizr-dev.js",
    "outputFile" : "build/modernizr-custom.js",
    "extra" : {
        "shiv" : true,
        "printshiv" : false,
        "load" : true,
        "mq" : false,
        "cssclasses" : true
    },
    "extensibility" : {
        "addtest" : false,
        "prefixed" : false,
        "teststyles" : false,
        "testprops" : false,
        "testallprops" : false,
        "hasevents" : false,
        "prefixes" : false,
        "domprefixes" : false
    },

  
    "uglify" : true,
    "tests" : [],
    "parseFiles" : true,
    "matchCommunityTests" : false,
    "customTests" : []
    
    } 

 
  });

  // Plugins do Grunt
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks( 'grunt-contrib-uglify' );
 grunt.loadNpmTasks( 'grunt-contrib-sass' );
 grunt.loadNpmTasks("grunt-modernizr");
 grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'sass','modernizr','requirejs','watch'] );

}