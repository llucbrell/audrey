/******************************************************
                                 
                      |         
             _        |     _    
             _| | |  /| |/ |_\ \  / 
            |_| |_| |_| |  \__  \|
                   stem console|_| 2
                                
               utf8 configurable
       console wrapper to work locally
               with node apps
******************************************************/
/**
* audrey
* @module comandos/merge
* @file 'ls.js' 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

/*append multiple files into the first one*/
/* PROGRAMA DE MERGE DE VARIOS ARCHIVOS reuse it from course */

//uso del modulo process de fs y argv

//empezamos importando los módulos

exports.execute= function (inputs){//interface method

var filer=require("fs");

//comprobamos que el usuario introduce una sintaxis correcta
if(inputs.length < 3){//no podemos trabajar con menos de 2 archivos
   console.log("   --- syntax: node merge <dest> <fn1> <fn2> ... <fn> ---");
}





for(var i=2; i<inputs.length; i++){
  //leemos cada archivo
  filer.readFile(actual_rut+'/'+inputs[i], "utf8", function (err, data){
  	if (err) throw err;
    console.log("merged files.. " + "\n");
    
//añadimos cada archivo
  filer.appendFile(actual_rut+'/'+inputs[1], "\n"+ data, function (err){
  	//if (err) throw err;  una opción
   	//si hay algún error, lo gestiona
      if(err){ console.log("THERE WAS A PROBLEM --> \n" +err); }
    
  });
  });

   
   	
 
}

}
