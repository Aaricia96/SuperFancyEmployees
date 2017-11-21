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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.nextPage(1);
  }

  nextPage(page: number) : void {
    this.employeeService.getNextPage(page).subscribe( e => this.employees = e.data);
    this.employeeService.getNextPage(page).subscribe( e => this.page = e.page);
    this.employeeService.getNextPage(page).subscribe( e => this.nrPages = e.total_pages);
  }

  delete(employee: Employee) : void {
    this.employees = this.employees.filter(e => e!== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }

}
