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
* @module comandos/ls
* @file 'ls.js' 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

/**lists elemnts i the directory*/


exports.execute= function(comandos){

/**
* @require directory.js
*/

var directory =require('./subcomandos/directory.js');



 

var dir=directory();
var list=dir.read(actual_rut);
//console.log(projects.read());
//var lista= leedir();
  
/*
* use a time event listener to have time to read the 
* directory-- will be changed
*/
//setTimeout(wait_for_directory, 1000);


/**
* @function
* wait_for_directory
* wait one second to give time for reading the
* directory
*/
/*
function wait_for_directory(){	
    console.log();  
	console.log('..ñam..<');
}
*/

}