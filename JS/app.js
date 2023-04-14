//constructor

let allEmployees=[];



function Employee(employeeID,fullName,department,level,imageUrl,salary){

  this.employeeID = getUniqueId();
  this.fullName = fullName;
    this.department=department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    allEmployees.push(this)
}




  function calculateSalary(level){

    let min, max;
  
    switch (level) {
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
  
    const salary = Math.floor(Math.random() * (max - min + 1) + min);
    return salary;
  }
  





  function calculateNetSalary(salary){
    return salary - salary * 0.075;
  }
  



  // Employee.prototype.render = function(){

  //   document.querySelector('main').innerHTML+=(`<main> employee name: ${this.fullName} salary:  ${this.calculateNetSalary(this.salary)} </main>`)
  // }



    function render() {

   


    getEmployees();

    if (allEmployees == null) {
      allEmployees = [];
    }

   

    for (let i = 0; i < allEmployees.length; i++) {
      const container = document.getElementById('cards') 
      let card = document.createElement('div');
      card.classList.add('emp-card'); // give a class name
    
      let imageSrc = allEmployees[i].imageUrl ? allEmployees[i].imageUrl : './assets/149071.png';
console.log(allEmployees[i].salary)
      card.innerHTML = `
      <img src=${imageSrc}><br>
        ${allEmployees[i].fullName} <br>
        <p>Department: ${allEmployees[i].department} - Level: ${allEmployees[i].level}<br>${calculateNetSalary(allEmployees[i].salary)}</p>
      `;
      container.appendChild(card);
      // ${allEmployees[i].calculateNetSalary(allEmployees[i].salary)}
//- ID:${allEmployees[i].employeeID}
      switch (allEmployees[i].department) {
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
  

  }
  






  let counter = 0;

// Employee.prototype.getUniqueId = function() {

//   counter++;
//     let empID = counter.toString().padStart(4, "0");
//     return empID;
 
//   };



function getUniqueId() {
  counter++;
  let empID = counter.toString().padStart(4, "0");
  return empID;
}


let form = document.getElementById("form")
form.addEventListener('submit',formHandler);



function formHandler (event){
// event.preventDefault();
let fullName = event.target.fullname.value;

let department = event.target.department.value; 
let level = event.target.level.value;
let imageUrl = event.target.imageurl.value;

// console.log(fullName,department,level,imageUrl)
let employee = new Employee("", fullName, department, level, imageUrl, "");

employee.salary = calculateSalary(level);




let jsonArr = JSON.stringify(allEmployees);
localStorage.setItem('allEmployees',jsonArr)

// employee.calculateSalary();
employee.getUniqueId();

}



function getEmployees() {
  
  let jsonArr = localStorage.getItem('allEmployees');
  let dataFromStorage = JSON.parse(jsonArr);
  // console.log(dataFromStorage)
  allEmployees = dataFromStorage;

}

getEmployees();
render();

//.
// for (let employee of allEmployees) {
//   employee.getUniqueId();
//    employee.calculateSalary();
//   employee.render();
// }

