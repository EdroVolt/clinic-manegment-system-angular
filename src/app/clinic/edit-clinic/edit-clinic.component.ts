import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinic } from 'src/app/model/clinic';
import { ClinicService } from 'src/app/service/clinic.service';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.scss']
})
export class EditClinicComponent implements OnInit {

  clinic: Clinic = {
    _id: "",
    name: "",
    description: "",
    address: {
      city: "",
      government: "",
      street: ""
    },
    doctorsId: "",
    receptionistIds: []
  }


  constructor(private formBuilder: FormBuilder, private clinicServe: ClinicService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a => {
      this.clinicServe.getOne(a['id']).subscribe(data => { this.clinic = data })
    })
  }

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    address: {
      city: "",
      street: "",
      government: ""
    },
    doctorsId: ['', [Validators.required]]
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.clinicServe.edit(this.clinic).subscribe(data => { this.router.navigate(['/clinics']) })
    }
  }
}
