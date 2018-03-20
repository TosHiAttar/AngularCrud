import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {  environment } from '../environments/environment';
import { EmployesComponent } from './employes/employes.component';
import { EmployeeComponent } from './employes/employee/employee.component';
import { EmployeeListComponent } from './employes/employee-list/employee-list.component';
import { ToastrModule } from 'ngx-toastr';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
