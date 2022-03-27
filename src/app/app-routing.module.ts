import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionAddComponent } from './prescription/prescription-add/prescription-add.component';
import { PrescriptionEditComponent } from './prescription/prescription-edit/prescription-edit.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  // { path: 'home' },
  // { path: 'register' },
  // { path: 'login' },
  // { path: 'about' },
  { path: 'doctors', component: ViewTableComponent },
  { path: 'patients', component: ViewTableComponent },
  // { path: 'reciptionists' },
  { path: 'medicines', component: ViewTableComponent },
  // { path: 'mediciens' },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'prescriptions', component: ViewTableComponent },
  {path:'prescriptions/add', component: PrescriptionAddComponent},
  {path:'prescriptions/edit/:id', component: PrescriptionEditComponent},
  { path: 'appointments', component: ViewTableComponent },
  { path: 'clinics', component: ViewTableComponent },
  // { path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
