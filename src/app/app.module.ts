import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeService } from './employee.service';
import { HttpClientModule }    from '@angular/common/http';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ToasterService } from './toaster.service';
import { ToastsComponent } from './toasts/toasts.component'; 


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
