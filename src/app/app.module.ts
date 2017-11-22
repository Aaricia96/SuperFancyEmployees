import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule }    from '@angular/common/http';
import { ToasterService } from './services/toaster.service';
import { ToastsComponent } from './toasts/toasts.component'; 
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; 
import { FormsModule } from '@angular/forms';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    ToastsComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
