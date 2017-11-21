import { Component, OnInit } from '@angular/core';

import { Employee } from "../Employee";
import { ERole } from '../ERole';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  display = "none";
  employees: Employee[] = [];

  constructor() { }

  ngOnInit() {
    this.getEmployees();
  }

  showForm() : void {
    let x = document.getElementById("formAddEmployee");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  getEmployees() {
    console.log(this.employees);
  }

  add(firstName: string, lastName: string, role: ERole, startDate: Date) : void {
    this.employees.push({firstName: firstName, lastName: lastName, role: role, startDate: startDate});
  }

}
