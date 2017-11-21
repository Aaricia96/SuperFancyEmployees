import { Component, OnInit } from '@angular/core';

import { Employee } from "../Employee";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  addedEmployee: any;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee(id : number, first_name: string, last_name: string, avatar: string) : void {
    let obj = { name: first_name, job: last_name }
    this.employeeService.addEmployee(obj).subscribe( r => this.addedEmployee = r);
  }

}
