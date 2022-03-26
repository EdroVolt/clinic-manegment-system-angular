import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/apponitment.service';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.scss'],
})
export class AppointmentEditComponent implements OnInit {
  appointment: Appointment={
    _id:"",
    doctorId: "",
    patientId: "",
    date: "",
    time: ""
  }

  constructor(private formBuilder: FormBuilder, private appointmentServe:AppointmentService, private activeRouter:ActivatedRoute,  private router:Router) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a=>{
        this.appointmentServe.getOne(a['id']).subscribe(data=>{this.appointment=data})
    })
  }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dob: ['', [Validators.required]]
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.appointmentServe.edit(this.appointment).subscribe(data => { this.router.navigate(['/appointments']) })
    }
  }
}
