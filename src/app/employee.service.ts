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

  addEmployee (employee: any): Observable<any> {
    console.log("addEmployees called");
    let result = this.http.post<Employee>(this.apiUrl + "users", employee, httpOptions);
    return result;
  }

  getNextPage(page: number) : Observable<any> {
    let result = this.http.get<any>(this.apiUrl + "users?page=" + page);
    return result;
  }

  getEmployee(id: number) : Observable<any> {
    let result = this.http.get<any>(this.apiUrl + "users/" + id);
    return result;
  } 

  editEmployee(employee: any) : Observable<any> {
    let result = this.http.put<any>(this.apiUrl + "users/" + employee.id, employee, httpOptions);
    return result
  }

  deleteEmployee(id : number) : Observable<any> {
    let result = this.http.delete<any>(this.apiUrl + "users/" + id);
    return result;
  }

}
