import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescription } from '../model/prescription';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  prescription: Prescription[] = [];
  baseURL = 'http://localhost:8080/prescriptions/';

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Prescription[]>(this.baseURL);
  }
  getOne(_id: string) {
    return this.http.get<Prescription>(this.baseURL + _id);
  }
  add(newPrescription: Prescription) {
    return this.http.post<Prescription>(this.baseURL, {
      title: newPrescription.title,
      doctorId: newPrescription.doctorId,
      clinciId: newPrescription.clinciId,
      patiantId: newPrescription.patiantId,
      medicines: newPrescription.medicines,
      description: newPrescription.description,
    });
  }
  edit(updatedPrescription: Prescription) {
    return this.http.put<Prescription>(this.baseURL + updatedPrescription._id, {
      prescription: updatedPrescription,
    });
  }
  delete(_id: string) {
    return this.http.delete<Prescription>(this.baseURL + _id);
  }
}
