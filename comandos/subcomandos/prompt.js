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
* @module comandos/subcomandos/prompt
* @file 'prompt.js' 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

/**
* @function prompt
*print the prompt on the console
*/

exports.prompt= function(prompt){
  prompt=(prompt || "\\oJo/");
  process.stdout.write(prompt);
  } 
