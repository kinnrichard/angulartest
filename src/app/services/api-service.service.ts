import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddEmployee } from '../models/employee-add.model';
import { UpdateEmployee } from '../models/employee-update.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiBaseUrl + '/api/employee');
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.apiBaseUrl + '/api/employee/' + id);
  }

  updateEmployeeById(id: string | undefined, updateEmployee: UpdateEmployee): Observable<Employee>{
    return this.http.put<Employee>(this.apiBaseUrl + '/api/employee/' + id, updateEmployee);
  }

  addEmployee(addEmployee: AddEmployee): Observable<Employee>{
    return this.http.post<Employee>(this.apiBaseUrl + '/api/employee', addEmployee);
  }

  deleteEmployeeById(id: string | undefined): Observable<Employee>{
    return this.http.delete<Employee>(this.apiBaseUrl + '/api/employee/' + id);
  }
}
