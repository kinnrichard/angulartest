import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.apiService.getAllEmployees()
    .subscribe(
      response =>{
        this.employees = response;
      }
    );
  }

}
