import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { Patient } from './../../model/patient';


@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  patient: Patient = {
    _id: "",
    name: "",
    email: "",
    password: "",
    image: "",
    address: {
      city: "",
      street: "",
      government: ""
    },
    appointmentIds: [],
    paymentDetails: { name: "", cardNum: "", VCC: "" },
    medicalHistory: "",
    prescriptions: [],
  }

  constructor(private formBuilder: FormBuilder, private patientServe: PatientService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a => {
      this.patientServe.getOne(a['id']).subscribe(data => { this.patient = data })
    })
  }

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    medicalHistory: ['', [Validators.required]],
    image: ['', [Validators.required]],
    // prescriptions:['',[Validators.required]],
    // appointmentIds:['',[Validators.required]],
    // address: {
    //   city: "",
    //   street: "",
    //   government: ""
    // },
    // paymentDetails:['',[Validators.required]],
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.patientServe.edit(this.patient).subscribe(data => {
        this.router.navigate(['/patients'])
      });
    }
  }
}
