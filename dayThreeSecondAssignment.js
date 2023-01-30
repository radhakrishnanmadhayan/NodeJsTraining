var fs= require("fs");

fs.readFile("file4",(err,filefour)=>{
    var f4=filefour.toString();
    var res="";
    if(err)
    {
        console.log("Error"+err);
    }
    else
    {
        fs.readFile("file1",(err,fileone)=>{
        var f1=fileone.toString();
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            fs.readFile("file2",(err,filetwo)=>{
                var f2=filetwo.toString();
                if(err)
                {
                    console.log("Error"+err);
                }
                else
                {
                    fs.readFile("file3",(err,filethree)=>{
                        var f3=filethree.toString();
                        if(err)
                        {
                            console.log("Error"+err);
                        }
                        else
                        {
                            fs.writeFile("file4",f4+f1+"\n"+f2+"\n"+f3+"\n",(err)=>{
                                if(err)
                                {
                                    console.log("Error"+err);
                                }
                                else
                                {                       
                                    console.log("Successfully file 1 written on file 4");                
                                }
                                })
                            
                        }
                        })
                }
                })
        }
        })

    }
});


