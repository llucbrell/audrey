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
* @file 'checknew.js' test the console inputs for mkdir command 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/


/**
* @function
* @name checkcommands
* use the same method name for all console checkers
* in this way we can change or improve one and only change
+ the core test file not interface
* @param comandos [string array with input commands]
* @returns {boolean} _check
*/

/**comand new syntax <mkdir> <project_name>*/


exports.checkcommands= function(inputs){
	
	/**length of commands test we need 3*/
if(inputs.length !=2){
  console.log("syntax error, remember <mkdir> <name_dir>");
  console.log("you type.. "+inputs);
  return false;
  //console.log("checkfalse");
} 

else{
   console.log('>creating directory '  + inputs[1]);
   return true;
   //console.log("checkok");
}
/**returns true or false*/

};