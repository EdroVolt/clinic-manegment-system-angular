import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  appointment: Appointment[] = [];
  baseURL = 'http://localhost:8080/appointments/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Appointment[]>(this.baseURL);
  }

  getOne(_id: string) {
    return this.http.get<Appointment>(this.baseURL + _id);
  }

  add(newAppointment: Appointment) {
    return this.http.post<Appointment>(this.baseURL, {
      ...newAppointment,
    });
  }

  edit(updatedAppointment: Appointment) {
    return this.http.put<Appointment>(this.baseURL + updatedAppointment._id, {
      ...updatedAppointment,
    });
  }

  delete(_id: string) {
    return this.http.delete<Appointment>(this.baseURL + _id);
  }
}
