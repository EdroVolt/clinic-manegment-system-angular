import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/apponitment.service';


@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.scss']
})
export class AppointmentAddComponent implements OnInit {
  appointment: Appointment={
    _id:"",
    doctorId: "",
    patientId: "",
    date: "",
    time: ""
  }

  constructor(private formBuilder: FormBuilder, private appointmentServe:AppointmentService, private activeRouter:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
  }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dob: ['', [Validators.required]]
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.appointmentServe.add(this.appointment).subscribe(data => {console.log(data)})
      this.router.navigate(['/appointments'])
    }
  }


}
