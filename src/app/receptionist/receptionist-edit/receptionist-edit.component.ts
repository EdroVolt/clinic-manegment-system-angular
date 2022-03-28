import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/service/receptionist.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from 'src/app/model/receptionist';
@Component({
  selector: 'app-receptionist-edit',
  templateUrl: './receptionist-edit.component.html',
  styleUrls: ['./receptionist-edit.component.scss'],
})
export class ReceptionistEditComponent implements OnInit {
  receptionist: Receptionist = {
    _id: '',
    name: '',
    email: '',
    password: '',
    paymentDetails: {
      name: '',
      cardNum: '',
      VCC: '',
    },
    image: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private receptionistService: ReceptionistService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((a) => {
      this.receptionistService.getOne(a['id']).subscribe((data) => {
        this.receptionist = data;
      });
    });
  }

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    paymentDetails: {
      name: ['', [Validators.required]],
      cardNum: ['', [Validators.required]],
      VCC: ['', [Validators.required]],
    },
    image: ['', [Validators.required]],
  });
  saveForm() {
    if (this.profileForm.valid) {
      this.receptionistService.add(this.receptionist).subscribe((data) => {
        console.log(data);
      });
      this.router.navigate(['/receptionists']);
    }
  }
}
