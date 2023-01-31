var fs = require('fs');
var sourcePath="text1.txt";
var destPath="text2.txt";

fs.copyFile(sourcePath, destPath, (err) => {
  if (err) {
    console.log("Failed to copy :", err);
  }
  else {    
    console.log("\nSuccessfully copied file");
       
  }
});