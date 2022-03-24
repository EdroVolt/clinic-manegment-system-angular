import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinic } from '../model/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  clinics: Clinic[] = []
  baseURL = 'http://localhost:8080/clinics/'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Clinic[]>(this.baseURL)
  }

  getOne(_id: string) {
    return this.http.get<Clinic>(this.baseURL + _id)
  }

  add(newClinic: Clinic) {
    return this.http.post<Clinic>(this.baseURL, { newClinic })
  }

  edit(updatedClinic: Clinic) {
    return this.http.put<Clinic>(this.baseURL + updatedClinic._id, { updatedClinic })
  }

  delete(_id: string) {
    return this.http.delete<Clinic>(this.baseURL + _id)
  }
}
