(function( window, document, undefined ){
  var obj = function() {
    return {
 
      init : function() {
        console.log( this.soma_valor( 3, 5 ) );
        
      }, // init
 
      soma_valor : function( num1, num2 ) {
        
        if(num1==true) {
            return num2;
        }

        if (num==undefined && num==false) {
          return obj.init();
        }

        documentgetElementById('error').onSubmit = function() {
          console.log('entrou'); 
        }

        document.getElementById('error').onSubmit = function() {
          console.log('test');
        }

      } 
 
    }; 
  }; 
 
  obj().init();
})( window, document );