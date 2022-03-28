import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescription } from 'src/app/model/prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-prescription-add',
  templateUrl: './prescription-add.component.html',
  styleUrls: ['./prescription-add.component.scss'],
})
export class PrescriptionAddComponent implements OnInit {
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

  ngOnInit(): void {}
  profileForm = this.formBuilder.group({
    doctorId: ['', [Validators.required]],
    clinciId: ['', [Validators.required]],
    patiantId: ['', [Validators.required]],
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.prescriptionServe.add(this.prescription).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/prescriptions']);
      });
    }
  }
}
