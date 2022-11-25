let employeeData = [];
let id = 0;

const addEmp = (eName,job,salary) => {
    id = id + 1;
    let employeeDetails = {
        Name: eName,
        Id: id,
        Job: job,
        Salary: salary,
    };
    employeeData.push(employeeDetails);
    console.log(employeeData);
    displayEmp(employeeDetails.Name,employeeDetails.Job,employeeDetails.Salary);
}

btn.onclick = () => {
    setTimeout("addEmp(eName.value,job.value,salary.value)",2000);
}

