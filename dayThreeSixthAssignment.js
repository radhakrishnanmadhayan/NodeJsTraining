
function getEmpDetails(empArr,empId){
    var emp;
    for(let i=0;i<empArr.length;i++)
    {
        if(empArr[i]["empId"]==empId)
        {
           emp=empArr[i]; 
        }
    }
    return emp;
}
var empArr=[{empId:101,empName:"Asha",salary:100100,deptId:"D1"},
            {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
            {empId:103,empName:"Karan",salary:2000,deptId:"D2"},
            {empId:104,empName:"Kishan",salary:100100,deptId:"D1"},
            {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
            {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
            {empId:107,empName:"Saurav",salary:3800,deptId:"D3"}];
        

var empId=105;
var emp= getEmpDetails(empArr,empId);
if(emp==undefined)
{
    console.log(`Employee Id:${empId} is not precent`);
}else{
    console.log(emp);
}
