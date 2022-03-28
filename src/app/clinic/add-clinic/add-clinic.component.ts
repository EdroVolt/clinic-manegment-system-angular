import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinic } from 'src/app/model/clinic';
import { ClinicService } from 'src/app/service/clinic.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.scss']
})
export class AddClinicComponent implements OnInit {
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
      this.clinicServe.add(this.clinic).subscribe(() => { this.router.navigate(['/clinics']) })
    }
  }

}
