import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './Employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  private apiUrl: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  getEmployees (): Observable<any> {
    console.log("getEmployees called");
    let result = this.http.get<any>(this.apiUrl + "users");
    return result;
  }

  addEmployee (employee: any): Observable<any> {
    console.log("addEmployees called");
    let result = this.http.post<Employee>(this.apiUrl + "users", employee, httpOptions);
    return result;
  }

}
