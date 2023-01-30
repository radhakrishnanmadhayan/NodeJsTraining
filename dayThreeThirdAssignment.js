function searchPosOfParticularSalary(arr,searchSalary)
{
    for(let i=0;i<arr.length;i++){
        if(arr[i]["salary"]==searchSalary)
        {
            return i+1;
        }
    }
}

var empArr=[{empId:101,empName:"Asha",salary:100100,deptId:"D1"},
            {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
            {empId:103,empName:"Karan",salary:2000,deptId:"D2"},
            {empId:104,empName:"Kishan",salary:100100,deptId:"D1"},
            {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
            {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
            {empId:107,empName:"Saurav",salary:3800,deptId:"D3"}]

var searchSalary=3500;
var posOfSalary=searchPosOfParticularSalary(empArr,searchSalary);
if(posOfSalary!=undefined){
    console.log(`Salary:${searchSalary} is precent on ${posOfSalary}th position`);
}else{
    console.log(`${searchSalary} - No one getting this Salary`);
}