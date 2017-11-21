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
  page: number;
  nrPages: number;
  addedEmployee: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.nextPage(1);
  }

  showForm() : void {
    let x = document.getElementById("formAddEmployee");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  addEmployee(id : number, first_name: string, last_name: string, avatar: string) : void {

    let obj = {
      name: first_name,
      job: last_name
    }

    this.employeeService.addEmployee(obj).subscribe( r => this.addedEmployee = r);
    //this.employees.push( {id: id, first_name: first_name, last_name: last_name, avatar: avatar} );

  }

  nextPage(page: number) : void {
    this.employeeService.getNextPage(page).subscribe( e => this.employees = e.data);
    this.employeeService.getNextPage(page).subscribe( e => this.page = e.page);
    this.employeeService.getNextPage(page).subscribe( e => this.nrPages = e.total_pages);
  }

}
