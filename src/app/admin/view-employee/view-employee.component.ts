import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateEmployee } from 'src/app/models/employee-update.model';
import { Employee } from 'src/app/models/employee.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService) { }

  employee: Employee | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if(id){
          this.apiService.getEmployeeById(id)
          .subscribe(
            response => {
              this.employee = response;
            }
          );
        }
      }  
    );
  }

  onSubmit(): void {  
    
    const updateEmployee: UpdateEmployee = {
      fullname: this.employee?.fullname,
      position: this.employee?.position
    }

    this.apiService.updateEmployeeById(this.employee?.id, updateEmployee)
    .subscribe(
      response => {
        alert('Success');
      }
    );
  }

  deleteEmployee(): void{
    this.apiService.deleteEmployeeById(this.employee?.id)
    .subscribe(
      response => {
        alert('Deleted Successfully');
      }
    );

  }

}
