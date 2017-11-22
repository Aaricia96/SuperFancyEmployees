import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from "../Employee";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee.data);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    let obj = { name: this.employee.first_name, job: this.employee.last_name }
    this.employeeService.editEmployee(obj).subscribe(() => this.goBack());
  }

}
