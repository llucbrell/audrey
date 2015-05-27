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
var _initparam= inputs[1];

if (inputs[1]){
  actual_rut=actual_rut+'/'+inputs[1]+'/';
}



}
/*
if(inputs[1]==='-b' && rut_counter>-1){
	actual_rut= last_rut[rut_counter-1];
}
if(inputs[1]==='-a' && rut_counter<last_loc.length){	
	actual_rut= last_rut[rut_counter+1];
}
if (_path[1]==='.'){
   if(_path[2]==='.'){
//low one step

//remember
  last_rut.push(actual_rut);
  rut_counter+=1;
    };
   if (_path[2]==='\/'){
    	 actual_rut= inputs[1];
    }
}

else {
	//comprobar que existe el directorio


   //añadimos ruta
	if(_path[-1] !='\/'){
	last_rut.push(actual_rut);	
	actual_rut= actual_rut+inputs[1]+'/';
    }
    else{
    last_rut.push(actual_rut);	
	actual_rut= actual_rut+inputs[1];	
    }
}



 
}

*/
