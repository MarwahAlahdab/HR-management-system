
'use strict';


let jsonArr = localStorage.getItem('allEmployees');
let data = JSON.parse(jsonArr);
let allEmployees = data;



function render(){



    if (allEmployees == null) {
        allEmployees = [];
      }



let tableEl = document.getElementById('table');


let thEl = document.createElement('tr');
tableEl.appendChild(thEl);

let tdEl1 = document.createElement('th');
tdEl1.textContent = "Department Name";
thEl.appendChild(tdEl1);

let tdEl2 = document.createElement('th');
tdEl2.textContent = "Number of employees";
thEl.appendChild(tdEl2);

let tdEl3 = document.createElement('th');
tdEl3.textContent = "Average Salary";
thEl.appendChild(tdEl3);

let tdEl4 = document.createElement('th');
tdEl4.textContent = "Total salary";
thEl.appendChild(tdEl4);


let departments =["Administration","Marketing","Development","Finance"];

for (let i = 0; i < departments.length; i++) {
    let trEl1 = document.createElement('tr');
    tableEl.appendChild(trEl1);

    let tdEl1 = document.createElement('td');
    tdEl1.textContent = departments[i];
    trEl1.appendChild(tdEl1);

    
      let tdEl2 = document.createElement('td');
      tdEl2.textContent = calNumOfEmps(departments[i]);
      trEl1.appendChild(tdEl2);

      let tdEl3 = document.createElement('td');
      tdEl3.textContent = calAvgSalary(departments[i]);
      trEl1.appendChild(tdEl3);

      let tdEl4 = document.createElement('td');
      tdEl4.textContent = calTotal(departments[i]);
      trEl1.appendChild(tdEl4);

    
  
  }
    //  footer row

    let footerR1 = document.createElement('tr');

    let td1 = document.createElement('td');
   
    footerR1.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = "Total employees";
    footerR1.appendChild(td2);


    let td3 = document.createElement('td');
    td3.textContent =" Avg salary for all departments";
    footerR1.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = "Total salary for all departments";
    footerR1.appendChild(td4);

    tableEl.appendChild(footerR1);
    footerR1.classList = 'footerRow';
    // 
    let footerRow = document.createElement('tr');

    let t1 = document.createElement('td');
   
    footerRow.appendChild(t1);

    let totalEmployees = document.createElement('td');
    totalEmployees.textContent = allEmployees.length;
    footerRow.appendChild(totalEmployees);


    let avgSalary = document.createElement('td');
    avgSalary.textContent = allDepAvg();
    footerRow.appendChild(avgSalary);

    let totalSalary = document.createElement('td');
    totalSalary.textContent = allDepTotal();
    footerRow.appendChild(totalSalary);

    tableEl.appendChild(footerRow);
  
}




function calTotal(department) {
  let departmentTotalSalary = {
    "Administration": 0,
    "Marketing": 0,
    "Development": 0,
    "Finance": 0
  };

  for (let i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].department === department) {
      // Update the total salary for the employee's department

        // if (isNaN(departmentTotalSalary[department])) {
        //   return 0;
        // } else 
      departmentTotalSalary[department] += allEmployees[i].netSalary;
    }
  }

  return Math.round(departmentTotalSalary[department]);
}



function calNumOfEmps(department) {
  let numOfEmps = 0;

  for (let i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].department === department) {
      numOfEmps++;
    }
  }

  return numOfEmps;
}

function calAvgSalary(department) {
  
  let totalSalary = 0;
  let numOfEmps = 0;

  for (let i = 0; i < allEmployees.length; i++) {
    if (allEmployees[i].department === department) {
      totalSalary += allEmployees[i].salary;
      numOfEmps++;
    }
  }

  let avgSalary = totalSalary / numOfEmps;

  if (isNaN(avgSalary)) {
    return 0;
  } else 
  return avgSalary;
}


function allDepAvg() {
  let totalSalary = 0;
  

  for (let i = 0; i < allEmployees.length; i++) {
   
      totalSalary += allEmployees[i].salary;
    
    
  }

  let avgSalary = totalSalary / allEmployees.length;
  return avgSalary;
}

function allDepTotal() {
  let totalSalary = 0;
  

  for (let i = 0; i < allEmployees.length; i++) {
   
      totalSalary += allEmployees[i].salary;
    
    
  }

  return totalSalary;
}

render();

