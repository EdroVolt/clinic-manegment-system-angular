import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.scss'],
})
export class MedicineEditComponent implements OnInit {
  medicine: Medicine = {
    _id: '',
    name: '',
    ingredients: [],
    image: '',
    price: 0,
  };

  constructor(
    private formBuilder: FormBuilder,
    private medicineServ: MedicineService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((a) => {
      this.medicineServ.getOne(a['id']).subscribe(data=> {
        this.medicine = data;
        console.log("old", this.medicine)
      });
    });
  }

  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    ingredients: ['', [Validators.required]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]]
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.medicineServ.edit(this.medicine).subscribe(data => {this.router.navigate(['/medicines'])
      })
    }
  }
}
