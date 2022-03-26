import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  // { path: 'home' },
  // { path: 'register' },
  // { path: 'login' },
  // { path: 'about' },
  { path: 'doctors', component: ViewTableComponent },
  { path: 'doctors/add', component: AddDoctorComponent },
  { path: 'doctors/edit/:id', component: EditDoctorComponent },
  { path: 'edit', component: AddDoctorComponent },
  { path: 'patients', component: ViewTableComponent },
  // { path: 'reciptionists' },
  { path: 'medicines', component: ViewTableComponent },
  // { path: 'mediciens' },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'prescriptions', component: ViewTableComponent },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'clinics', component: ViewTableComponent },
  // { path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
