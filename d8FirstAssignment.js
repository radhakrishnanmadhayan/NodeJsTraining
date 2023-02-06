const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDB1");
        var collName = dbName.collection("emp");
        
        // var filterObj={empId:106};
        // collName.deleteOne(filterObj)
        // .then((res)=>{
        //     console.log("Deleted Successfull",res.deletedCount);
        //     mongoClient.close();
        // })
        // .catch(err=>{
        //     console.log("Error in Deleted"+err);
        //     mongoClient.close();
        // })
        
        var filterObj={empId:202};        
        collName.deleteMany(filterObj)
        .then((res)=>{
            console.log("Deleted Successfull",res.deletedCount);
            mongoClient.close();
        })
        .catch(err=>{
            console.log("Error in Deleted"+err);
            mongoClient.close();
        })

        var empArr=[];
                 
        
    }
    catch (err) {
        
        console.log("Error", err)
    }

}
run();
