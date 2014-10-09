(function( window, document, undefined ){
  var obj = function() {
    return {
 
      init : function() {
        console.log( this.soma_valor( 3, 5 ) );
        alert('test');
      }, // init
 
 
      soma_valor : function( num1, num2 ) {
        return num1 + num2+5;
      } 
 
    }; 
  }; 
 
  obj().init();
})( window, document );