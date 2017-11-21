import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeService } from './employee.service';
import { HttpClientModule }    from '@angular/common/http';
<<<<<<< HEAD
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ToasterService } from './toaster.service';
import { ToastsComponent } from './toasts/toasts.component'; 
=======
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; 
import { FormsModule } from '@angular/forms';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
>>>>>>> 45abfecd3ffe1cc3425390f0d396d55c9be75643


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
<<<<<<< HEAD
    ToastsComponent
=======
    EmployeeAddComponent
>>>>>>> 45abfecd3ffe1cc3425390f0d396d55c9be75643
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
