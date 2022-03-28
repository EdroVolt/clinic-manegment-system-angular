import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from '../model/medicine';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  medicines: Medicine[] = []
  baseURL = 'http://localhost:8080/medicines/'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Medicine[]>(this.baseURL)
  }

  getOne(_id: string) {
    return this.http.get<Medicine>(this.baseURL + _id)
  }

  add(newMedicine: Medicine) {
    return this.http.post<Medicine>(this.baseURL, { 
      name:newMedicine.name,
      ingredients:newMedicine.ingredients,
      image:newMedicine.image,
      price:newMedicine.price
     })
  }

  edit(updatedMedicine: Medicine) {
    return this.http.put<Medicine>(this.baseURL + updatedMedicine._id, { ...updatedMedicine })
  }

  delete(_id: string) {
    return this.http.delete<Medicine>(this.baseURL + _id)
  }
}
