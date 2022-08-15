import { Component, OnInit } from '@angular/core';
import { AddEmployee } from 'src/app/models/employee-add.model';
import { Employee } from 'src/app/models/employee.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  employee: AddEmployee = {
    fullname: '',
    position: ''
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.apiService.addEmployee(this.employee)
    .subscribe(
      response => {
        alert('Success');
      }
    );
  }
}
