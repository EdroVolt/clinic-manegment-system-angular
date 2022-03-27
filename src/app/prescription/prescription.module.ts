import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionAddComponent } from './prescription-add/prescription-add.component';
import { PrescriptionEditComponent } from './prescription-edit/prescription-edit.component';

@NgModule({
  declarations: [PrescriptionAddComponent, PrescriptionEditComponent],
  imports: [CommonModule],
})
export class PrescriptionModule {}
