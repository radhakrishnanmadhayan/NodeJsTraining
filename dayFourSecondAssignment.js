var fs=require("fs");
var path = require("path");
var orginalFolder="C:/Users/rmadhayan/OneDrive/NodeJs/Modules/Day4";
fs.mkdir(path.join(orginalFolder+'copy'), (err,newDir)=>{
    if(err){
        console.log("error");
    }else{
        console.log("new Dir: "+newDir)
    //     var dublicateFolder=orginalFolder+'copy';
    //     fs.copyFile(orginalFolder,dublicateFolder,(err)=>{
    //     if(err)
    //     {
    //         console.log("Failed to copy Folder : "+err);
    //     }else
    //     {
    //         console.log("successfully copied");
    //     }
    // });

    }
})





// fs.copyFile(orginalFolder,dublicateFolder,(err)=>{
//     if(err)
//     {
//         console.log("Failed to copy Folder : "+err);
//     }else
//     {
//         console.log("successfully copied");
//     }
// });

// //fs.cloneDirectory("C:\Users\rmadhayan\OneDrive\NodeJs\Modules\Day4");
