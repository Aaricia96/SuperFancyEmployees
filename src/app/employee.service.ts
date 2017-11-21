import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  private apiUrl: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  getEmployees (): Observable<any> {
    console.log("getEmployees called");
    let result = this.http.get<any>(this.apiUrl + "users");
    return result;
  }

}
