
import fs from "fs";
import { console } from "inspector";
import path, { dirname } from "path";
import { fileURLToPath } from "url";



//fileURLToPath- eithu oure funtion in-build moduals 
const __filename=fileURLToPath(import.meta.url);
//  console.log(__filename);


//dirname-eithu oure funtion in-build moduals 

 const __dirname=dirname(__filename);
 // console.log(__dirname);
  
  const folderpath=path.join(__dirname,"details");

  const filepath=path.join(folderpath,"LEO.txt");


  //console.log(folderpath,filepath);

 // folder create pannum
  fs.mkdir("details",()=>{
    console.log("Folder create completed");
    
  });

  // folder kula irukura  file create pani aprom file kuda data or value store pannum

  fs.writeFile(filepath,"MY best move Greenman",((err)=>{

    if(err) return err;

    console.log("File create completed");
    
  }))
