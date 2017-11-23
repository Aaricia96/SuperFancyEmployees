import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ToastsComponent } from './toasts/toasts.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './services/employee.service';
import { ToasterService } from './services/toaster.service';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  
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
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('Super Fancy Employees');
  }));
});
