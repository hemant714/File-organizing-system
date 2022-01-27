const fs=require("fs");
let path=require("path");

let types = {
    media: ["mp4", "mkv", "mp3","jpg","png"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
     documents: ["docx","zip","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
   app: ["exe", "dmg", "pkg", "deb"],
   };

function organizefn(dirPath){
    let destPath;
      if(dirPath==undefined){
          console.log("Plz enter path");
          return;
      }
      else{
          let doesExist=fs.existsSync(dirPath)
          //console.log(doesExist);
          if(doesExist==true){
             destPath=path.join(dirPath , "organized_files");
               if(fs.existsSync(destPath)==false)
               {
                fs.mkdirSync(destPath);
               }
               else{
                   console.log("This folder already exists");
               }
               
          }
          else{
              console.log("PLz enter valid path");
          }
          organizeHelper(dirPath,destPath);
      }

}


function organizeHelper(src,dest)
{
    let childNames=fs.readdirSync(src);
    //console.log(childNames);

    for(let i=0;i<childNames.length;i++)
    {
        let childAddress = path.join(src , childNames[i]);

        let isFile=fs.lstatSync(childAddress).isFile();
        //console.log(childAddress + " " + isFile);

        if(isFile==true){
            let fileCategory=getCategory(childNames[i]);
            //console.log(childNames[i] + " belongs to " + fileCategory);
            sendFiles(childAddress,dest,fileCategory);
        }
    }
}
function getCategory(name){
    let ext=path.extname(name);
    ext=ext.slice(1);

    for(let type in types){
        let cTypeArr=types[type];
        for(let i=0;i<cTypeArr.length;i++){
            if(ext==cTypeArr[i])
              return type;
        }
    }
    return "others";
}

function sendFiles(srcFilePath,dest,fileCategory){
    let catPath=path.join(dest , fileCategory);
    if(fs.existsSync(catPath)==false)
    {
        fs.mkdirSync(catPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(catPath , fileName)

    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log( fileName + " is copied to " + fileCategory);
}

module.exports={
    organizekey : organizefn
}