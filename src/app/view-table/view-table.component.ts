import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../model/appointment';
import { Clinic } from '../model/clinic';
import { Doctor } from '../model/doctor';
import { Patient } from '../model/patient';
import { ClinicService } from '../service/clinic.service';
import { DoctorService } from '../service/doctor.service';
import { PatientService } from '../service/patient.service';
import { Medicine } from '../model/medicine';
import { AppointmentService } from '../service/apponitment.service';
import { ClinicService } from '../service/clinic.service';
import { DoctorService } from '../service/doctor.service';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {
  ELEMENT_DATA: {}[] = [{}];

  constructor( private doctorServ: DoctorService, private clincServ: ClinicService, 
              private medicineServ:MedicineService ,private router: Router, 
              private appointmentServ:AppointmentService, 
              private patientServ: PatientService ) {}

  ngOnInit(): void {
    switch (this.router.url) {
      case '/doctors':
        this.doctorServ.getAll().subscribe(((data: Doctor[]) => {
          console.log(data);
          this.ELEMENT_DATA = data;
        }));
        break;

      case '/clinics':
        this.clincServ.getAll().subscribe(((data: Clinic[]) => {
          console.log(data);
          this.ELEMENT_DATA = data;
        }));
        break;

      case '/appointments':
        // call service
        this.appointmentServ.getAll().subscribe(((data: Appointment[]) => {
          console.log(data);
          this.ELEMENT_DATA = data;
        }));
        break;

      case '/patients':
        this.patientServ.getAll().subscribe(((data: Patient[]) => {
          console.log(data);
          this.ELEMENT_DATA = data;
        }));
        break;

      case '/medicines':
        // call service
        this.medicineServ.getAll().subscribe(((data: Medicine[]) => {
          console.log(data);
          this.ELEMENT_DATA = data;
        }));
        break;

      case '/prescriptions':
        // call service
        break;

      case '/receptionists':
        // call service
        break;

      default:
        break;
    }
  }
}
