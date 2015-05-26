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
* @file 'consoletest.js' sample of audrey console object factory 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

var audrey= require('./audrey.js');
/**
* easy 
* @require audrey.js
*/

/**
* global variables for 
* Change Directory (cd) command 
*/

 var last_rut=[];
 var actual_rut;
 var rut_counter=-1;

/**
*creates the audrey console 
*/
var consola= audrey();
/**
* add console basic commands
*/
consola.basics();


/**
* how to attach personal commands
* attach a command from this file
*/
consola.feed('mamasaid', function (){console.log("You'll be a deeeentist!");});
/**
* attach a command using parameters
* inputs [array of user inputs]
* each input[] is a word matched by audrey
*/

/**
* works usin feed <name>
*/
consola.feed('feed', function (inputs){
    if(inputs[1]){
	console.log('feeeeed meeee.... '+inputs[1]); 
     }
     else{
    console.log('feeeeed meeee.... Seymour');	
     }
});

/**
*start the console
*/
consola.start();



/**you can delete this file
* it's only a sample
*/