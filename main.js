//#!/usr/bin/env node

// to make it global and use it on cmd + link it to npm 


//to take input from cmd via node js 
//user input starts from 2nd ind 0th pos has node 1st pos has file name so input starts from 2nd position

let inputarr=process.argv.slice(2);
//console.log(inputarr);

let fs=require("fs");
let path=require("path");//to join path and make it platform independent 

let organizeobj=require("./commands/organize");
let helpobj=require("./commands/help");//link of help file
let treeobj=require("./commands/tree");//link for tree file




//node main.js tree "directorypath"
//node main.js organize "directorypath"
//node main.js help

let command=inputarr[0]; //above commands 
switch(command){
    case "tree":
        console.log("hello world");
        treeobj.treekey(inputarr[1]);
        break;
    case "organize":
        organizeobj.organizekey(inputarr[1]);
        break;
    case "help":
        helpobj.helpkey();
        break;
    default:
        console.log("please enter right command");
        break;
} 



 