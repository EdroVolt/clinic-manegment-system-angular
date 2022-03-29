import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/model/prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-prescription-edit',
  templateUrl: './prescription-edit.component.html',
  styleUrls: ['./prescription-edit.component.scss'],
})
export class PrescriptionEditComponent implements OnInit {
  prescription: Prescription = {
    _id: '',
    title: '',
    doctorId: '',
    clinciId: '',
    patiantId: '',
    medicines: '',
    description: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private prescriptionServe: PrescriptionService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((a) => {
      this.prescriptionServe
        .getOne(a['id'])
        .subscribe((data) => (this.prescription = data));
    });
  }
  profileForm = this.formBuilder.group({
    doctorId: ['', [Validators.required]],
    clinciId: ['', [Validators.required]],
    patiantId: ['', [Validators.required]],
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.prescriptionServe.edit(this.prescription).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/prescriptions']);
      }); 
    }
  }
}
