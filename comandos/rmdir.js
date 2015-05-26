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
* @file 'rmdir.js' console directory deleting 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

/**remove a directory project*/


/*---------------// gloton subcommands (imports) //----------------*/


exports.execute= function(comandos){
/**directory import subcomand or action
* @require checkdelete
* @require directory 
*/

var directory =require('./subcomandos/directory.js');
var check =require('./consolechecks/checkdelete.js');




/**accions order*/
/**check the commandos array for better user experience*/

var checking= check.checkcommands(comandos);
if(checking=== true){
/**delete project*/
  /**create a mew directory object*/
  
var dir= directory();
dir.erase(comandos);


  /**end of project deletion*/
  console.log("project deleted successfully");
  console.log("..ñam..");
  }
else{
/**ask for more data*/	
  console.log("feed me...");
 // console.log("checktfalse");
  }

 }




