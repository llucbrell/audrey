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
* @file 'audrey.js' console command loop interface 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/

          
/**
* audrey console requires this modules
* @bcommands
* @setcommand
* @require fs
*
*/

module.exports =function(){
  /**require fs*/
  var fs=require('fs');
  /**the start header of the console*/
  var _header;
  /**commands that will be loaded*/
  var _arraycommands=[];
  /**root directory*/
  var _global_rut;

  /**
  * audrey methods
  */

  /**
  * @function setcommand
  * push a new command o the commands store
  * Does it from a module
  * module needs to start with
  * exports.execute= function(inputs){}
  * to be valid
  */

  /**
  * @function setheader
  * sets a new initial header to the console
  */
  
  /**
  * @function feed
  * push a new command adding it directly
  * the function code
  */

return{
  setcommand: function(name, module_path){_arraycommands.push({command_name:name, path:path});},
  setheader: function (path_text_file){ _header= path_text;},
  start: function() { start();},
  basics: function(){ loadbcommands();},
  feed: function(name, func){ _arraycommands.push({command_name:name,run:func});},
  sustitute: function(name, func){sustitute(name, func);},
  setrootdir: function(path){_global_rut= path;}
}

/**
* @function start()
* iniciate audrey's loop
*/

function start(){
  showheader();
  runloop();
}

/**
* @function runloop()
* who really is in charge 
* of audrey's loop
*/
function runloop(){

/**stop linux console and stablish the encoding*/
process.stdin.resume();
process.stdin.setEncoding('utf8');

/**loop init*/

/*-------------// console loop //------------------*/

process.stdin.on('data', function (text) {
      
     

  /**
  * array used to store the data 
  * console introduction
  */ 

   var inputs=text.match(/[a-zñáéíóú\-0-9]+/ig);


   commands(inputs);

 });

}

/**
* @function showheader()
* show the initial header 
*/
function showheader(){
_header= (_header||'comandos/text/audrey.txt');

   fs.readFile('./'+_header, 'utf8', function (err, data){
      if(err){  
      console.log(_header);    
        console.log('>something happens with the header');
        console.log('please feed me with other path..');
        console.log("I don't have legs<");
        console.log(err);
        }
      console.log(data);
    
   });
 }


/**
* @function commands
* match for commands coincidences
* @params inputs -array-
* input line console string from user  
* every element of the array corresponds with
* one user word input
*/

function commands(inputs){
//console.log(_arraycommands);
/**
* console try function
* to ensure the data introduced doesn't generate an error
*/
try{   


for (var i=0; i<_arraycommands.length; i++){ 
  if(inputs[0]===_arraycommands[i].command_name){
    //console.log(_arraycommands[i].run);
    if(_arraycommands[i].path){
    var comandox= require(_arraycommands[i].path);
    comandox.execute(inputs);
      }
    else{
        _arraycommands[i].run(inputs); //ejecutamos la funcion usando ()
      }
   }
}

}catch (err){
/**
* error capture and advise
*/
  if(err){
  process.stdout.write(">");
  console.log("error.." +err);  
  console.log("Type some or -help for watching a list of commands");
  console.log("feed me...<");    
    }
  }

}


/**
* @function loadbcommands
* loads the basic command kit
* commands stored in the directory ./comandos/
*/
function loadbcommands(){
  var _quit={command_name:'quit', path:'./comandos/quit.js'};
  var _mkdir={command_name:'mkdir', path:'./comandos/mkdir.js'};
  var _rmdir= {command_name:'rmdir', path:'./comandos/rmdir.js'};
  var _help= {command_name:'-help' , path:'./comandos/help.js'};
  var _pwd= {command_name:'pwd', path:'./comandos/pwd.js'};
  var _cd= {command_name:'cd', path:'./comandos/cd.js'};
  var _ls= {command_name:'ls', path:'./comandos/ls.js'};
  var _rm= {command_name:'rm', path:'./comandos/rm.js'};
  
  /**
  * add them to the _arraycommands who is
  * mathcing store
  */
  _arraycommands.push(_quit);
  _arraycommands.push(_mkdir);
  _arraycommands.push(_rmdir);
  _arraycommands.push(_help);
  _arraycommands.push(_pwd);
  _arraycommands.push(_cd);
  _arraycommands.push(_ls);
  _arraycommands.push(_rm);

/**
*set the default location
*/
_global_rut= (_global_rut|| './rut');
  actual_rut=_global_rut;
  rut=_global_rut;
  
};

/**
* @function sustitute
* susbstitute commands
* @params name
* command name
* @params func
* function for the command
*/


function sustitute(name, func){
  for(var j=0; j<_arraycommands.length; j++){
    if(_arraycommands[i].command_name=== name){
      /*
      *first delete the functionality
      */
      if(_arraycommands[i].func){delete _arraycommands[i].func;}
      if(_arraycommands[i].path){delete _arraycommands[i].path;}
       /*innsert the new functionality*/
       if(func instanceof Function.prototype) {
         _arraycommands[func]= func;
         }
        else{
        _arraycommands[path]= func;
         }
   }
 }
  
}



}



