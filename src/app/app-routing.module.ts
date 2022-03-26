import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAddComponent } from './patient/patient-add/patient-add.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  // { path: 'home' },
  // { path: 'register' },
  // { path: 'login' },
  // { path: 'about' },
  { path: 'doctors', component: ViewTableComponent },
  { path: 'patients', component: ViewTableComponent},
  { path: 'patients/add', component: PatientAddComponent},
  { path: 'patients/edit/:id', component: PatientEditComponent},
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
