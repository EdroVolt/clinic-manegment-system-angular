import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients: Patient[] = []
  baseURL = 'http://localhost:8080/patients/'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Patient[]>(this.baseURL)
  }

  getOne(_id: string) {
    return this.http.get<Patient>(this.baseURL + _id)
  }

  add(newPatient: Patient) {
    return this.http.post<Patient>(this.baseURL, {
      name: newPatient.name,
      email: newPatient.email,
      password: newPatient.password,
      image: newPatient.image,
      address: newPatient.address,
      appointmentIds: newPatient.appointmentIds,
      paymentDetails: newPatient.paymentDetails,
      medicalHistory: newPatient.medicalHistory,
      prescriptions: newPatient.prescriptions,
    })
  }

  edit(updatedPatient: Patient) {
    return this.http.put<Patient>(this.baseURL + updatedPatient._id, { ...updatedPatient })
  }

  delete(_id: string) {
    return this.http.delete<Patient>(this.baseURL + _id)
  }
}
