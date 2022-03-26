import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import {MedicineService } from 'src/app/service/medicine.service'

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.scss']
})
export class MedicineAddComponent implements OnInit {
  medicine:Medicine={
    _id:"",
    name:"",
    ingredients:[],
    image:"",
    price: 0,
  }

  constructor(private formBuilder: FormBuilder, private medicineServ: MedicineService, private activeRouter:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
  }


  profileForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    ingredients: ['', [Validators.required]],
    image: ['', [Validators.required]],
    price: ['', [Validators.required]]
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.medicineServ.add(this.medicine).subscribe(data => {console.log(data)})
      this.router.navigate(['/medicines'])
    }
  }

}
