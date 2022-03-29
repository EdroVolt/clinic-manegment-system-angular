import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine/medicine-edit/medicine-edit.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { AppointmentEditComponent} from './appointment/appointment-edit/appointment-edit.component'
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
import { PrescriptionAddComponent } from './prescription/prescription-add/prescription-add.component';
import { PrescriptionEditComponent } from './prescription/prescription-edit/prescription-edit.component';

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
  { path: 'medicines/add', component: MedicineAddComponent},
  { path: 'medicines/edit/:id', component: MedicineEditComponent },
  // { path: 'mediciens' },
  { path: 'appointments', component: ViewTableComponent },
  {path: 'appointments/edit/:id' ,component:AppointmentEditComponent},
  {path: 'appointments/add' ,component:AppointmentAddComponent},
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
