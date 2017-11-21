import { Component, OnInit } from '@angular/core';

import { Employee } from "../Employee";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  display = "none";
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

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

  getEmployees() : void {
    //console.log(this.employees);
    this.employeeService.getEmployees()
    .subscribe( e => this.employees = e.data);
    console.log(this.employees);
  }

  addEmployee(id : number,
              first_name: string,
              last_name: string,
              avatar: string) : void {

    this.employees.push({id: id, first_name: first_name, last_name: last_name, avatar: avatar});
  }

}
