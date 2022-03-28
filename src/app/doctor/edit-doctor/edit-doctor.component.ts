import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  doctor: Doctor = {
    _id: "",
    name: "",
    email: "",
    password: "",
    clincId: "",
    image: "",
    address: {
      city: "",
      street: "",
      government: ""
    },
    appoinmentIds: [],
    avaliableAppointments: [],
    paymentDetails: { name: "", cardNum: "", VCC: "" },
    specialization: "",
    veseeta: 0,
  }

  constructor(private formBuilder: FormBuilder, private doctorServe: DoctorService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a => {
      this.doctorServe.getOne(a['id']).subscribe(data => { this.doctor = data })
    })
  }

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    clincId: ['', [Validators.required]],
    address: {
      city: "",
      street: "",
      government: ""
    },
    image: ['', [Validators.required]],
    specialization: ['', [Validators.required]],
    veseeta: ['', [Validators.required]]
  });

  saveForm() {
    if (this.profileForm.valid) {

      this.doctorServe.edit(this.doctor).subscribe(data => {
        this.router.navigate(['/doctors'])
      })
    }
  }
}
