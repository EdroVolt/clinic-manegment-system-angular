import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    MedicineAddComponent,
    MedicineEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MedicineModule { }
