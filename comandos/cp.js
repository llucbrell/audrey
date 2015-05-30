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
* copy one file
*/

exports.execute= function (inputs){//interface method
if(inputs.length!=3){
	console.log("syntax error..")
}
else{
  /**
  *require fs
  */
var fs= require('fs');

fs.readFile(actual_rut+'/'+inputs[1], function (err, data){
	fs.writeFile(actual_rut+'/'+inputs[2], data, function (err){
		if (err){
			console.log(err);
		}
		else{console.log('file copied');}
	});
});



}
}