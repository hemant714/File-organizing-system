const { dir } = require("console");
const helpModeule=require ("./commands/help")
const organizeModeule = require("./commands/organize");
const treeModeule = require("./commands/tree");
const fs=require("fs");
let path=require("path");
let inputArr=process.argv.slice(2)

let command=inputArr[0]

switch(command){
    case "tree":
        console.log("TREE IMPLEMENTED");
        treeModeule.treeKey(inputArr[1]);
    break;
    case "organize":
        console.log("ORGANIZE OMPLEMENTED");
        organizeModeule.organizeKey(inputArr[1])
    break;
    case "help":
        console.log("HELP IMPLEMENTED");
        helpModeule.helpKey();
    break;
    default:
        console.log("PLZ ENTER VALID COMMAND");
        break;
}

