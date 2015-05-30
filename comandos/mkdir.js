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
* @file 'mkdir.js' creates a new directory with path 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/


          
exports.execute= function(inputs){
/**directory import subcomand or action*/
/**@require directory.js 
* require checknew.js
*/
var directory =require('./subcomandos/directory.js');
var check =require('./consolechecks/checknew.js');



/**accions order*/
/**check the commandos array for better user experience*/

var checking= check.checkcommands(inputs);
if(checking=== true){
/**create a new project */
  /**create a mew directory*/

var dir= directory();
dir.nuevo(inputs);

  /**end of project creation*/
  console.log("directory created successfully");
  console.log("..ñam.. <");
  }
else{
/**ask for more data*/	
  console.log("feed me...<");
  }

 }






