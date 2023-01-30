
function removeEmp(empArr,pos){
    var status=false;
    var newEmpArr=[];
    var k=0;
    for(let i=0,k=0;i<empArr.length;i++)
    {
        if(i==pos)
        {
            status=true;
        }else
        {
            newEmpArr[k]=empArr[i];
            k++;         
        }
    }
    // for(let i=0;i<newEmpArr.length;i++)
    // {
    //     console.log(newEmpArr[i]);
    // }
    return status;

}
var empArr=[{empId:101,empName:"Asha",salary:100100,deptId:"D1"},
            {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
            {empId:103,empName:"Karan",salary:2000,deptId:"D2"},
            {empId:104,empName:"Kishan",salary:100100,deptId:"D1"},
            {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
            {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
            {empId:107,empName:"Saurav",salary:3800,deptId:"D3"}];
        
var pos=3;
var statusOf= removeEmp(empArr,pos);
if(statusOf==true)
{
    console.log("Successfully removed Employee from an array");
}else{
    console.log("Failed to remove Employee from an array");
}