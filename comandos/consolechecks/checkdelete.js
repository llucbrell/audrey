/******************************************************
                |     _|__
            __  |  __  |  __   __
           /  | | /  \ | /  \ |  \
           \__| | \__/ | \__/ |  |
              |  
            |_|                              
             
                   gloton
          HTML5 writer and CSS integrator 
                using frameworks     

******************************************************/
/**
* gloton
* @file 'checkdelete.js' test the console inputs for new command 
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

/**comand new syntax <delete> <file_name>*/

exports.checkcommands= function(comandos){
	
	/**length of commands test we need 3*/
if(comandos.length !==2){
  console.log("syntax error, remember <delete> <project_name or path>");
  console.log("you type.. "+comandos);
  return false;
}
else if(comandos[1]==='comandos'){
  console.log("can't delete comandos");
  console.log("it's gloton system");
}
else{
    console.log('deleting project '  + comandos[1]);
   return true;
}
/**returns true or false*/

};