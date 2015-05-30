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
* @file 'help.js' show the help file 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/


/**export execute
* the same name for all
* commands function
* show commands help
*/
exports.execute= function (inputs){//interface method

/**
* @require fs
*/

fs=require('fs');

fs.readFile('./comandos/text/help.txt', 'utf8', 
             function (err, data){
              if (err){
                console.log(err);
              }
              console.log(data);

               });
}