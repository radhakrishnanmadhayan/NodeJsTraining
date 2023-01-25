
function squareOfAnArray(arr)
{
    var rsarr=[];
    for(let i=0;i<arr.length;i++)
    {
        rsarr[i]=arr[i]*arr[i];
    }
    return rsarr;
}

function getHighestSalaryEmp(arrOfObj)
{
    var pos=0;
    for(let i=0;i<(arrOfObj.length-1);i++)
    {
        if (arrOfObj[i]["salary"] > arrOfObj[pos]["salary"] )
        {
            pos=i;
        }
    }    
    return arrOfObj[pos];;
}

function createMaskOnPhoneNumber(phoneNumber)
{
    var maskedphNo="";
    var strPhNo=phoneNumber.toString();
    for(let i=0;i<strPhNo.length;i++)
    {
        if(i>2 && i<(strPhNo.length-3))
        {
            maskedphNo=maskedphNo+"*";
        }else{
            maskedphNo=maskedphNo+strPhNo[i];
        }
    }
    return maskedphNo;
}



var arr=[10,20,30,40,50];
var empArr=[{empId:101,empName:"Asha",salary:100100,deptId:"D1"},
            {empId:102,empName:"Gaurav",salary:2000,deptId:"D1"},
            {empId:103,empName:"Karan",salary:2000,deptId:"D2"},
            {empId:104,empName:"Kishan",salary:100100,deptId:"D1"},
            {empId:105,empName:"Keshav",salary:3500,deptId:"D2"},
            {empId:106,empName:"Pran",salary:4000,deptId:"D3"},
            {empId:107,empName:"Saurav",salary:3800,deptId:"D3"}]

//first quastion
console.log("-------------------------------------------------------------");

console.log("Square of an array is -> "+squareOfAnArray(arr));
console.log("-------------------------------------------------------------");
//second question
var res=createMaskOnPhoneNumber(1234567890);
console.log("Masked Phone Number is: "+res);
console.log("-------------------------------------------------------------");

//third question
var obj=getHighestSalaryEmp(empArr);
console.log("Highest Salary Employee is: ")
console.log("Employee Id : "+obj.empId);
console.log("Employee Name : "+obj.empName);
console.log("Employee Salary : "+obj.salary);
console.log("Employee Department Id : "+obj.deptId);
console.log("-------------------------------------------------------------");
