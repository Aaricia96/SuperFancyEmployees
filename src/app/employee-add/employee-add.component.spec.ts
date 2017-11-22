import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeAddComponent } from './employee-add.component';
import { AppComponent } from '../app.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { ToastsComponent } from '../toasts/toasts.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ToasterService } from '../services/toaster.service';
import { EmployeeService } from '../services/employee.service';

describe('EmployeeAddComponent', () => {
  let component: EmployeeAddComponent;
  let fixture: ComponentFixture<EmployeeAddComponent>;
  let employeeServiceStub;
  let employeeService;

  beforeEach(async(() => {
    employeeServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, ToasterService, {provide: EmployeeService, useValue: employeeServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = TestBed.get(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
