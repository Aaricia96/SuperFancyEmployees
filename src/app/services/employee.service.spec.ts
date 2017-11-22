import { TestBed, inject } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { ToastsComponent } from '../toasts/toasts.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ToasterService } from './toaster.service';

describe('EmployeeService', () => {
  beforeEach(() => {
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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, ToasterService, EmployeeService]
    });
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
