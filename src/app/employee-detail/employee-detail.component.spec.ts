import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailComponent } from './employee-detail.component';
import { AppComponent } from '../app.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ToastsComponent } from '../toasts/toasts.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ToasterService } from '../services/toaster.service';
import { EmployeeService } from '../services/employee.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Employee } from '../Employee';

describe('EmployeeDetailComponent', () => {
  let component: EmployeeDetailComponent;
  let fixture: ComponentFixture<EmployeeDetailComponent>;
  let employeeServiceStub;
  let employeeService;

  beforeEach(async(() => {
    employeeServiceStub = {
      getEmployee(id: number) : Observable<any> {
        let employeeSubject = new Subject();
        employeeSubject.next({id: 1, first_name: "Aaricia", last_name: "van Oostrom", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"});
        return employeeSubject;
      } 
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmployeeComponent,
        EmployeeDetailComponent,
        ToastsComponent,
        EmployeeAddComponent
      ],
      imports: [
        AppRoutingModule, 
        FormsModule,
        HttpClientModule,
        BrowserModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, {provide: EmployeeService, useValue: employeeServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailComponent);
    component = fixture.componentInstance;
    component.employee = {id: 1, first_name: "Aaricia", last_name: "van Oostrom", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"};
    fixture.detectChanges();
    employeeService = TestBed.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an employer with id 1', () => { 
    let content = document.getElementById("id");
    expect(component.employee.id).toEqual(Number(content.innerHTML));
  });

  it('should show an employer with first name Aaricia', () => { 
    let content = document.getElementById("firstName");
    expect(component.employee.first_name).toEqual(content.innerHTML);
  });

  it('should show an employer with last name Van Oostrom', () => { 
    let content = document.getElementById("lastName");
    expect(component.employee.last_name).toEqual(content.innerHTML);
  });

  it('should show an employer with last name Van Oostrom', () => { 
    let content = document.getElementById("avatar").getAttribute('src');
    expect(component.employee.avatar).toEqual(content);
  });
});
