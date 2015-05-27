/******************************************************
                                 
                      |         
             _        |     _    
             _| | |  /| |/ |_\ \  / 
            |_| |_| |_| |  \__  \|
                  stem console |_| 2
                                
               utf8 configurable
       console wrapper to work locally
               with node apps
******************************************************/
/**
* audrey
* @file 'cd.js' change directory interface 
* @author llucbrell hobbescode@gmail.com
* @license MIT -llucbrell 2015-
*/


/**export execute
* the same name for all
* commands function
*
*/

exports.execute= function (inputs){//interface method
var filer=require('./subcomandos/directory.js')
var dir=filer();
var _arg= inputs[1];
var _initarg= _arg[0]+ _arg[1];
var _directories= actual_rut.match(/[^.\/]+/g);
//console.log(directories);
var _temp_rut='.';
console.log(_directories);
switch(_initarg){
  case '\.\.':
   _temp_rut='.';
   //console.log(_temp_rut);
    for(var i=0; i<_directories.length-1; i++){
      _temp_rut=_temp_rut+'/'+_directories[i];
      }
    //test reading the dir
    try{
      dir.testdir(_temp_rut);
     // last_rut.push(actual_rut);
      actual_rut=_temp_rut;
    }
    catch(err){
      console.log(err);
      console.log('directory does not exist');
    }
  break;
  case '\.\/':
  _temp_rut=inputs[1];
  //console.log(_temp_rut);
    //test reading the dir
    try{
      dir.testdir(_temp_rut);
    
      actual_rut=_temp_rut;
    }
    catch(err){
      console.log(err);
      console.log('directory does not exist');
    }

  break;
  case '-r':
  actual_rut='./'+_directories[0];
  break;
  //test reading the directory
 
  default:
  _temp_rut=actual_rut+'/'+inputs[1];
  try{
   // console.log(_temp_rut);
      dir.testdir(_temp_rut);
    
      actual_rut=_temp_rut;
    }
    catch(err){
      console.log(err);
      console.log('directory does not exist');
    }
}
 
}

