import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AppComponent } from '../app.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { ToastsComponent } from '../toasts/toasts.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ToasterService } from '../services/toaster.service';
import { EmployeeService } from '../services/employee.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HomeComponent } from '../home/home.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let employeeServiceStub;
  let employeeService;
  let toasterServiceStub;
  let toasterService;

  beforeEach(async(() => {
    employeeServiceStub = {
      getNextPage(page: number) : Observable<any> {
        let pageSubject = new Subject();
        pageSubject.next({ "page": 2, "per_page": 3, "total": 12, "total_pages": 4,"data": [
          {
            "id": 4,
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
          },
          {
            "id": 5,
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
          },
          {
            "id": 6,
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
          }
        ]});
        return pageSubject;
      }
    };

    toasterServiceStub = {};

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmployeeComponent,
        EmployeeDetailComponent,
        ToastsComponent,
        EmployeeAddComponent,
        HomeComponent
      ],
      imports: [
        AppRoutingModule, 
        FormsModule,
        HttpClientModule,
        BrowserModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, {provide: ToasterService, useValue: toasterServiceStub}, {provide: EmployeeService, useValue: employeeServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = TestBed.get(EmployeeService);
    toasterService = TestBed.get(ToasterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
