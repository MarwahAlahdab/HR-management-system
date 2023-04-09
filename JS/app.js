
//constructor

let allEmployees=[];


function Employee(employeeID,fullName,department,level,imageUrl,salary){

    this.employeeID=employeeID;
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


  Employee.prototype.render = function(){

    document.querySelector('main').innerHTML+=(`<main> employee name: ${this.fullName} salary:  ${this.calculateNetSalary(this.salary)} </main>`)
  }


const employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
const employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
const employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
const employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
const employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
const employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
const employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");


// employee1.calculateSalary();
// employee1.render();
for (let employee of allEmployees) {
   employee.calculateSalary();
  employee.render();
}
