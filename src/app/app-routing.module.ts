import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine/medicine-edit/medicine-edit.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { AppointmentEditComponent } from './appointment/appointment-edit/appointment-edit.component';
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
import { ReceptionistAddComponent } from './receptionist/receptionist-add/receptionist-add.component';
import { ReceptionistEditComponent } from './receptionist/receptionist-edit/receptionist-edit.component';
const routes: Routes = [
  // { path: 'home' },
  // { path: 'register' },
  // { path: 'login' },
  // { path: 'about' },
  { path: 'doctors', component: ViewTableComponent },
  { path: 'doctors/add', component: AddDoctorComponent },
  { path: 'doctors/edit/:id', component: EditDoctorComponent },
  { path: 'patients', component: ViewTableComponent },
  // { path: 'reciptionists' },
  { path: 'receptionists', component: ViewTableComponent },
  { path: 'receptionists/add', component: ReceptionistAddComponent },
  { path: 'receptionists/edit/:id', component: ReceptionistEditComponent },
  // {path: medicines}
  { path: 'medicines', component: ViewTableComponent },
  { path: 'medicines/add', component: MedicineAddComponent },
  { path: 'medicines/edit/:id', component: MedicineEditComponent },
  // { path: 'mediciens' },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'appointments/edit/:id', component: AppointmentEditComponent },
  { path: 'appointments/add', component: AppointmentAddComponent },
  { path: 'prescriptions', component: ViewTableComponent },
  { path: 'appointments', component: ViewTableComponent },
  { path: 'clinics', component: ViewTableComponent },
  // { path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
