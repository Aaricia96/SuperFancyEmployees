import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toasts.component';
import { AppComponent } from '../app.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ToasterService } from '../services/toaster.service';
import { EmployeeService } from '../services/employee.service';
import { HomeComponent } from '../home/home.component';

describe('ToastsComponent', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;

  beforeEach(async(() => {
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
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, ToasterService, EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
