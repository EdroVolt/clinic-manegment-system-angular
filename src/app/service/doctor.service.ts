import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors: Doctor[] = []
  baseURL = 'http://localhost:8080/doctors/'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Doctor[]>(this.baseURL)
  }

  getOne(_id: string){
    return this.http.get<Doctor>(this.baseURL + _id)
  }

  add(newDoctor: Doctor){
    return this.http.post<Doctor>(this.baseURL, { doctor: newDoctor })
  }

  edit(updatedDoctor: Doctor){
    return this.http.put<Doctor>(this.baseURL + updatedDoctor._id, { doctor: updatedDoctor })
  }

  delete(_id: string){
    return this.http.delete<Doctor>(this.baseURL + _id)
  }
}
