import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './medicine/medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine/medicine-edit/medicine-edit.component';
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
  { path: 'medicines/add', component: MedicineAddComponent},
  { path: 'medicines/edit/:id', component: MedicineEditComponent },
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
