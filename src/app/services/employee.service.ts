import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Employee';
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
    return this.http.post<Employee>(this.apiUrl + "users", employee, httpOptions).pipe(
      tap(heroes => this.toasterService.add("alert alert-success", "Werknemer toegevoegd!")),
      catchError( this.toasterService.addError("alert alert-danger", "Er is iets foutgegaan tijdens het toevoegen van deze werknemer!") )
    );
  }

  getNextPage(page: number) : Observable<any> {
    let result = this.http.get<any>(this.apiUrl + "users?page=" + page);
    return result;
  }

  getEmployee(id: number) : Observable<any> {
    return this.http.get<any>(this.apiUrl + "users/" + id).pipe(
      tap(heroes => this.toasterService.add("alert alert-success", "Werknemergegevens opgehaald!")),
      catchError( this.toasterService.addError("alert alert-danger", "Er is iets foutgegaan tijdens het ophalen van gegevens van deze werknemer!") )
    );
  } 

  editEmployee(employee: any) : Observable<any> {
    return this.http.put<any>(this.apiUrl + "users/" + employee.id, employee, httpOptions).pipe(
      tap(heroes => this.toasterService.add("alert alert-success", "Wijzigen van werknemer succesvol!")),
      catchError( this.toasterService.addError("alert alert-danger", "Er is iets foutgegaan tijdens het wijzigen van deze werknemer!") )
    );
  }

  deleteEmployee(id : number) : Observable<any> {
    return this.http.delete<any>(this.apiUrl + "users/" + id).pipe(
      tap(heroes => this.toasterService.add("alert alert-success", "Gebruiker verwijderd!")),
      catchError( this.toasterService.addError("alert alert-danger", "Er is iets foutgegaan tijdens het verwijderen van deze werknemer!") )
    );
  }

}
