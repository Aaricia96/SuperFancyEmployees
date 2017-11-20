import { Component, OnInit } from '@angular/core';

import { Employee } from "../Employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  display='none';

  constructor() { }

  ngOnInit() {
  }

  showForm() : void {
    let x = document.getElementById("formAddEmployee");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

  add() : void {

  }

}
