// // let data = []

// let database = {
//     id:0,
//     name:"",
//     job:"",
//     salary:""
// }

// let count = 1
// function add(name,job,salary){
//     count++;
//     let temp ={
//         id: count,
//         name: name,
//         job: job,
//         salary: salary
//     };
//     database.push(temp);
//     console.log(database)
// }

// // add("Ankit","SDE",25);

// // function update(name,job,salary){  
// // }
// // let name=document.getElementById("fname");
// // let jD=document.getElementById("job");
// // // let sal=document.getElementById("salary");

// const apps = [
//     {id:1, name:'Ankit'}, 
//     {id:2, name:'Naman'},
//     {id:3, name:'Anshu'}
//   ]

//   const itemToBeRemoved = {id:2, name:'Naman'}

//   apps.splice(apps.findIndex(a => a.id === itemToBeRemoved.id) , 1)

//   console.log(apps)


var count = 1;
let database = [
    {
        id: count,
        name: "name",
        job: "job",
        salary: "salary"
    }
]

count++;
let add = (count, name, job, salary) => {
    database.push(this.id = count, this.name = name, this.job = job, this.salary = salary);
    display();
}

add(2, "ankit", "trainee", 25000);
console.log(database);

let remove = (val) => {
    for (let i = 0; i < database.length; i++) {
        if (i === val - 1) {
            database.splice(i, 1);
            break;
        }
    }
}

let update = (val, namejob, salary) => {
    for (let i = 0; i < database.length; i++) {
        if (i === val - 1) {
            this.name = name;
            this.job = job;
            this.salary = salary;
        }
    }
}

function display() {
    document.getElementById('output').innerHTML = database;
}

remove(1);
console.log(database);