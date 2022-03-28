import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receptionist } from './../model/receptionist';
@Injectable({
  providedIn: 'root',
})
export class ReceptionistService {
  receptionist: Receptionist[] = [];
  baseURL = 'http://localhost:8080/receptionists/';

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Receptionist[]>(this.baseURL);
  }
  getOne(_id: string) {
    return this.http.get<Receptionist>(this.baseURL + _id);
  }
  add(newReceptionist: Receptionist) {
    return this.http.post<Receptionist>(this.baseURL, { ...newReceptionist });
  }
  edit(updatedReceptionist: Receptionist) {
    return this.http.put<Receptionist>(this.baseURL + updatedReceptionist._id, {
      ...updatedReceptionist,
    });
  }
  delete(_id: string) {
    return this.http.delete<Receptionist>(this.baseURL + _id);
  }
}
