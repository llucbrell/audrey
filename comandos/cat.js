/******************************************************
                                 
                      |         
             _        |     _    
             _| | |  /| |/ |_\ \  / 
            |_| |_| |_| |  \__  \|
                  stem console |_| 2
                                
               utf8 configurable
       console wrapper to work locally
               with node apps
******************************************************/
/**
* audrey
* @file 'cat.js' change directory interface 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

/**export execute
* the same name for all
* commands function
*
*/

exports.execute= function (inputs){//interface method

var fs= require('fs');


fs.readFile(actual_rut+'/'+inputs[1],'utf8', function (err, data){
	if(err){console.log("I can't read it");}
	else{console.log(data);}
});

}
