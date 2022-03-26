import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';
import { Patient } from './../../model/patient';


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

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

  }

  profileForm = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    medicalHistory:['',[Validators.required]],
    image:['',[Validators.required]],
    prescriptions:['',[Validators.required]],
    appointmentIds:['',[Validators.required]],
    address: {
      city: "",
      street: "",
      government: ""
    },
    paymentDetails:['',[Validators.required]],
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.patientServe.add(this.patient).subscribe(data => { console.log(data) })
      this.router.navigate(['/patients'])
    }
  }

}
