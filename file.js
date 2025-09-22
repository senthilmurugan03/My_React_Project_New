import fs from "fs";

fs.writeFile("file.txt","Hello node_js",((err)=>{
    if(err) throw err;

  //  console.log("file created");
}));

fs.readFile("file.txt","utf-8",((err,dtas)=>{

    if(err) throw err;

   // console.log(dtas);
    
}));
fs.appendFile("file.txt","Hello my dear friends",((err)=>{
    if(err) throw err;
   // console.log("my file is update");
    
}));

// fs.mkdir("MY_vales",((err)=>{
//     if(err) throw err;

//     // console.log("folder created");
    
// }));

// fs.writeFile("MY_vales/My_datas.txt","My wallet balance 0",(err)=>{
   
//    if(err) throw err;
//     console.log("filder was created"); 
    
// });



fs.mkdir("MY_vales", { recursive: true }, (err) => {
  if (err) throw err;
});

// Safe even if folder exists
fs.writeFile("MY_vales/My_datas.txt", "My wallet balance 0", (err) => {
  if (err) throw err;
//  console.log("File was created");
});

fs.writeFile("MY_vales/My_cildern.txt","This my next page",(err)=>{
     if (err) throw err;
  console.log("my cildern File created");
})
