var fs= require("fs");
console.log("...............................................");
fs.readFile("file1",(err,fileone)=>{
    var f1=fileone.toString();
    if(err)
    {
        console.log("Error"+err);
    }
    else
    {
        fs.readFile("file4",(err,filefour)=>{
        var f4=filefour.toString();
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            fs.writeFile("file4",f4+f1,(err)=>{
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
});

//file 2
fs.readFile("file2",(err,filetwo)=>{
    var f2=filetwo.toString();
    if(err)
    {
        console.log("Error"+err);
    }
    else
    {
        fs.readFile("file4",(err,file4)=>{
        var f4=file4.toString();
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            fs.writeFile("file4",f4+f2,(err)=>{
            if(err)
            {
                console.log("Error"+err);
            }
            else
            {                       
                console.log("Successfully file 2 written on file 4");                
            }
            })
        
        }
        })

    }
});

//file3
fs.readFile("file3",(err,filethree)=>{
    var f3=filethree.toString();
    if(err)
    {
        console.log("Error"+err);
    }
    else
    {
        fs.readFile("file4",(err,file4)=>{
        var f4=file4.toString();
        if(err)
        {
            console.log("Error"+err);
        }
        else
        {
            fs.writeFile("file4",f4+f3,(err)=>{
            if(err)
            {
                console.log("Error"+err);
            }
            else
            {                       
                console.log("Successfully file 3 written on file 4");                
            }
            })
        
        }
        })

    }
});