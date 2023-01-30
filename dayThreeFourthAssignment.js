
function addNewEmp(empArr,newEmp,newPos){
    var status=false;
    var newEmpArr=[];
    var k=0;
    for(let i=0,k=0;i<=empArr.length;i++,k++)
    {
        if(i==newPos)
        {
            newEmpArr[i]=newEmp;
            i++;
            newEmpArr[i]=empArr[k];
            status=true;
        }else
        {
            newEmpArr[i]=empArr[k];
                      
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
        
var newEmp={empId:109,empName:"Raju",salary:6000,depId:"D4"};
var newPos=3;
var statusOf= addNewEmp(empArr,newEmp,newPos);
if(statusOf==true)
{
    console.log("successfully added new Employee to an array");
}else{
    console.log("failed to add new Employee to an array");
}