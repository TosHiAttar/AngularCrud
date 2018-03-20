import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss'],
  providers: [EmployeeService]

})
export class EmployesComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

}
