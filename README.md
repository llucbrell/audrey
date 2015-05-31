                               ____   
                            ¬¬      ¬ ¬¬
                          /              \       
                        /________         \
                         VVVVVVVV\        |
                                 /        /
                          MMMMMM/         |
                          \              / 
                            ¬¬ __    _¬¬ 
                                /  /        
                               /  /        _ 
                              |  |__    __/
                              \  \  \__/  \__
                       __/   __\  \   
                         \__/   \  \  
                                |  |         
                        ________/ _/_______
                      | _ _  _  _   _   _  _|
                       \                   /
                        \                 /
                         \               /
                          \             /
                           \ _ _ _ _ _ /
       ___________________________________________ _
      /                                           \ \__ 
     |                                             |   \_ _ 
     |                                             |        \__
     |        ____________________________         |    |||    |
     |      /             |               |        |    |||    |
     |     |     _        |     _         |        |    |||    |
     |     |     _| | |  /| |/ /_\ \ /    |        |           |
     |     |    |_| |_| |_| |  \__  V     |        |           |
     |     |                        |2    |        |    |||    |
     |     |                              |        |    |||    |
     |     |   utf8 stem console wrapper  |        |    |||    |
     |     |       for node apps          |        |    |||    |
     |     |     MIT- llucbrell- 2015     |        |           |
     |     |                              |        |      /// / 
     |     |                              |        |     /// /   
     |      \_____________________________|        |    /// / __ __ __  
     |                                             |     __/ 
     |                                       _     |    /  
     |  o                                   /o\    |   |  
      \_____________________________________\\/__ /  __/ 
                                              \_    
                ______                          \__
        _____¬¬¬      \                            \
     ¬¬¬          \_   \_                        __/
    \      \_  \_         \                     _/
    \             \_      \_                  /
     \     \_         \_    \                /
      \                      \              | 
       \       \_    \_       \_           /
        \                       \         /
         \    \_    \_     \_    \_    __/
          \                        \__/
           \    \_       \_         \_
            \        \_         \_    \
             \                         \
              \    \_                   \
               \             \_    \_    \_
                \       \_                 \
                 \                \_
                      

     Audrey2 Console Wrapper is a command line console
     I've writed it meanwhile I was playing with node 
     'fs' module and to have a bash independent and 
     quickly confugurable input-output system for nodeapps
     You can presonalize, extend it or use as an input
     output system for your node apps. It has a basic
     command kit I'm extending. You can also contribute
     with your personal commands and help me to feed 
     Audrey. 

     >If you feed me Seymour.. I can grow, big and strong!



<h2> BASIC CONSOLE COMMANDS</h2>


    mkdir <name>         -creates new directory

    ls                   -read current directory

    rmdir <name>         -delete the directory

    rm <file name>       -delete the file

    pwd                  -show current file location

    cd -r                -change directory to rootdir

    cd ./<path>          -change directory to path

    cd <name dir>        -change to directory name

    cd ..                -down one step into dir tree
 
    cat <filename>       -read file in the console

    cp <origin> <newcopy> 
                      -copy file in Nname

    merge <dest> <fn1> <fn2> ... <fn>

                      -all files append to flnme1 

    quit                 -kill Audrey   


 



<h2>How it works</h2>

Require audrey path

    var audrey= require('./audrey2');


 global for Change Directory (cd) command 

    var actual_rut;
 


creates the audrey console 

      var consola= audrey();


add console basic commands

      //consola.setrootdir('./');  //more options
      consola.basics();
      //consola.setprompt('&');   //more options


how to attach personal commands
attach a command from this file


       consola.feed('mamasaid', function (){console.log("You'll be a deeeentist!");});


attach a command using parameters
inputs [array of user inputs]
each input[] is a word matched by audrey


      consola.feed('feed', function (inputs){
       if(inputs[1]){
        console.log('feeeeed meeee.... '+inputs[1]); 
        }
        else{
       console.log('feeeeed meeee.... Seymour'); 
        }
      });


start the console

      consola.start();


