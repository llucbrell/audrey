/******************************************************
                                 
                      |         
             _        |     _    
             _| | |  /| |/ |_\ \  / 
            |_| |_| |_| |  \__  \|
                   stem console|_|
                                
               utf8 configurable
       console wrapper to work locally
               with node apps
******************************************************/
/**
* audrey
* @file 'rm.js' change directory interface 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/


/**export execute
* the same name for all
* commands function
* remove file
*/

exports.execute= function (inputs){//interface method
   
/*
* @require fs
*/
   var fs= require('fs');

/*use unlik to delete files */
    fs.unlink(actual_rut+'/'+ inputs[1], function(err){
          if(err){
          	console.log(err);
          	console.log('>problem deleting a file');
          	console.log('maybe audrey eat it before');
          	console.log("maybe it's a directory");
          	console.log('feed me...<')
          }
          else{
          	console.log('audrey eat it and love it');
          	console.log('..ñam..');
          }
    })

    



}
