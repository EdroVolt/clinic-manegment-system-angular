import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  profileForm = this.formBuilder.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    address:['',[Validators.required]],
    dob:['',[Validators.required]],
    gender:['',[Validators.required]]
  });
 
  saveForm(){
    if(this.profileForm.valid){
      console.log('Profile form data :: ', this.profileForm.value);
    }
  }

}
