import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { SharedModule } from './../shared/shared.module';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';



@NgModule({
  declarations: [

    AppointmentEditComponent,
     AppointmentAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AppointmentModule { }
