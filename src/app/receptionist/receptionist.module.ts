import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ReceptionistAddComponent } from './receptionist-add/receptionist-add.component';
import { ReceptionistEditComponent } from './receptionist-edit/receptionist-edit.component';
@NgModule({
  declarations: [ReceptionistAddComponent, ReceptionistEditComponent],
  imports: [CommonModule, SharedModule],
  exports: [ReceptionistAddComponent, ReceptionistEditComponent],
})
export class ReceptionistModule {}
