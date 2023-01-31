const fs = require('fs');


function doesFileExist(path)
{
    
  // return fs.existsSync(path);
  fs.stat(path,(err,data)=>{
    if(err)
    {
        console.log("FileExist "+data.isFile());
    }else{
        return data.isFile();
    }
  });
}

var rs=doesFileExist("text8.txt");
if(rs==true)
{
    console.log("File is Exist.........");
}else{
    console.log("file is not exist.........");
}
 
