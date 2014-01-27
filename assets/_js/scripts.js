jQuery(document).ready(function(e)
 {
  var Solution =  
  { 
    // FUNÇÃO QUE INICIA TODA MANIPULAÇÃO DO DOM 
    init_: function(ret)
    { 
      jQuery('nav ul li a').click(function() 
      {
        var pagina = jQuery(this).attr('href');
        

      });
    },

     About: function()
     {
      
     },

     Contact: function()
     {
      
     },

     Test: function(debug)
     {  
      try
      { 
        if(debug==undefined)    throw "VALOR INVÁLIDO !!!";
        if(debug.search("erro")!=-1) { throw "VALOR INVÁLIDO !!!"; }
        if(debug.search("error")!=-1) { throw "VALOR INVÁLIDO !!!"; }
      }

      catch(err)
      { 
        console.log(err);
        alert(err);
      }

     }

  }

  Solution.init_('Renato');

 });