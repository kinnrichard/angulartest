import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';

const routes: Routes = [
  {
    path: 'admin/employee',
    component: EmployeeComponent
  },
  {
    path: 'admin/employee/add',
    component: AddEmployeeComponent
  },
  {
    path: 'admin/employee/:id',
    component: ViewEmployeeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
