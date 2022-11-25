let eName = document.getElementById("name");
let job = document.getElementById("job");
let salary = document.getElementById("salary");
let btn = document.getElementById("btn");


const displayEmp = (eName,job,salary) => {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = eName;

    let tdJob = document.createElement("td");
    tdJob.innerHTML = job;

    let tdSalary = document.createElement("td");
    tdSalary.innerHTML = salary;

    let tdAction = document.createElement("td");

    let editEmp = document.createElement("button");
    editEmp.innerHTML = "Edit";

    let deleteEmp = document.createElement("button");
    deleteEmp.innerHTML = "Delete";

    tdAction.append(editEmp,deleteEmp);
    tr.append(tdName,tdJob,tdSalary,tdAction);
    document.getElementById("empDetails").append(tr);
}
