import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './Employee';
import { catchError, map, tap } from 'rxjs/operators';
import { ToasterService } from './toaster.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  private apiUrl: string = "https://reqres.in/api/";

  constructor(private http: HttpClient, private toasterService: ToasterService) { }

  addEmployee (employee: any): Observable<any> {
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
    return this.http.put<any>(this.apiUrl + "users/" + employee.id, employee, httpOptions).pipe(
      tap(heroes => this.toasterService.add("toast-succes", "Wijzigen van werknemer succesvol!")),
      catchError(this.toasterService.add("toast-danger", "Er is iets foutgegaan tijdens het wijzigen van deze werknemer!"))
    );
  }

  deleteEmployee(id : number) : Observable<any> {
    let result = this.http.delete<any>(this.apiUrl + "users/" + id);
    return result;
  }

}
