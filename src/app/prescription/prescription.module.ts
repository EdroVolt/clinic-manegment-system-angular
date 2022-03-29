import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PrescriptionAddComponent, PrescriptionEditComponent],
  imports: [CommonModule,SharedModule],
})
export class PrescriptionModule {}
