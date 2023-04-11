
//constructor

let allEmployees=[];



function Employee(employeeID,fullName,department,level,imageUrl,salary){

    this.employeeID=this.getUniqueId();
    this.fullName = fullName;
    this.department=department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    allEmployees.push(this)
}


  Employee.prototype.calculateSalary = function(){

    let min, max;

    switch (this.level) {
      case "Senior":
        min = 1500;
        max = 2000;
        break;
      case "Mid-Senior":
        min = 1000;
        max = 1500;
        break;
      case "Junior":
        min = 500;
        max = 1000;
        break;
      default:
       break;
    }


    this.salary = Math.floor(Math.random() * (max - min + 1) + min);
    return this.salary;
  }


  Employee.prototype.calculateNetSalary = function(salary){

    this.netSalary =this.salary - this.salary * 0.075; 

    return this.netSalary;
  
  }


  // Employee.prototype.render = function(){

  //   document.querySelector('main').innerHTML+=(`<main> employee name: ${this.fullName} salary:  ${this.calculateNetSalary(this.salary)} </main>`)
  // }



  Employee.prototype.render = function() {

    const container = document.getElementById('cards') 
    let card = document.createElement('div');
    card.classList.add('emp-card'); // give a class name
  

    card.innerHTML = `
    <img src="./assets/149071.png"><br>
      ${this.fullName} - ID:${this.employeeID}<br>
      <p>Department: ${this.department} - Level: ${this.level}<br>${this.calculateNetSalary(this.salary)}</p>
    `;
    container.appendChild(card);




    switch (this.department) {
      case "Administration":
        let administration = document.getElementById('Administration');
        administration.appendChild(card);
        
        break;
      case "Marketing": 
      let marketing = document.getElementById('Marketing');
      marketing.appendChild(card);
        
        break;
      case "Development": 
      let development = document.getElementById('Development');
      development.appendChild(card);
        break;
      case "Finance": 
      let finance = document.getElementById('Finance');
      finance.appendChild(card);
        break;
    }
   

  }
  

// const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior","./assets/149071.png");
// const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior","./assets/149071.png");
// const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/149071.png");
// const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior","./assets/149071.png");
// const employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior","./assets/149071.png");
// const employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior","./assets/149071.png");
// const employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","./assets/149071.png");


// employee1.calculateSalary();
// employee1.render();





let counter = 0;
Employee.prototype.getUniqueId = function() {

  counter++;
    let empID = counter.toString().padStart(4, "0");
    return empID;
 
  };


let form = document.getElementById("form")
form.addEventListener('submit',formHandler);



function formHandler (event){
event.preventDefault();
let fullName = event.target.fullname.value;

let department = event.target.department.value; 
let level = event.target.level.value;
let imageUrl = event.target.imageurl.value;

// console.log(fullName,department,level,imageUrl)
let employee = new Employee("", fullName, department, level, imageUrl, "");

employee.calculateSalary();
employee.getUniqueId();
employee.render();

}



// for (let employee of allEmployees) {
//   employee.getUniqueId();
//    employee.calculateSalary();
//   employee.render();
// }

