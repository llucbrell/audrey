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
* @file 'directory.js' creates, rename or delete directories
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/





/**
* closure // object factory
* @function
* @name directory
* creates, rename or delete directories
* @param comandos [string array with input console commands]
* @returns create{function()} rename{function()} delete{function()}
*
*/


module.exports= function (){

/**require fs
*/
var _filer= require('fs');

var _list;



return{
	nuevo: function(comandos) {nuevico(comandos);}, 
	erase: function(comandos) {erase(comandos);},
	 read: function(path) { leedir(path);}
  
  }

/**
* @function nuevico
* create a new directory
* uses mkdir and callback for error
* @param array [commandos] from user console input
*/

function nuevico(comandos){

	_filer.mkdir('./rut/'+comandos[1], function (err){
      if(err) {
      	console.log("problem creating project");
      	console.log(err);
      	console.log("feed me..<");
      }
	});
}

/**
* @function erase
* create a new directory
* uses mkdir and callback for error
* @param array [commandos] from user console input
*/

function erase(comandos){

	_filer.rmdir('./rut/'+comandos[1], function (err){
      if(err) {
      	console.log("problem deleting project");
      	console.log(err);
      	console.log("feed me..<");
      }
	});
 }

function leedir(path){
  _filer.readdir(path,  function (err, files){
      if(err) {
        console.log("problem reading files at directory");
        console.log(err);
        console.log('may be Audrey eat them..');
        console.log('feed me..<');
      }    
      files.forEach(function (element){
        console.log(" "+element);
      
        });
   });
 }

  





} 