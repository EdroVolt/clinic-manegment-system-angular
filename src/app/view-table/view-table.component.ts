import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from '../model/prescription';
import { ClinicService } from '../service/clinic.service';
import { DoctorService } from '../service/doctor.service';
import { PrescriptionService } from '../service/prescription.service';
import { PatientService } from '../service/patient.service';
import { AppointmentService } from '../service/apponitment.service';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss'],
})
export class ViewTableComponent implements OnInit {
  ELEMENT_DATA: {}[] = [{}];
  _service: any;

  constructor(private doctorServ: DoctorService, private clincServ: ClinicService,
    private medicineServ: MedicineService, private router: Router,
    private appointmentServ: AppointmentService,
    private patientServ: PatientService,
    private prescriptionServ: PrescriptionService) { }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/doctors':
        this._service = this.doctorServ;
        break;
      case '/clinics':
        this._service = this.clincServ;
        break;
      case '/appointments':
        this._service = this.appointmentServ;
        break;
      case '/patients':
        this._service = this.patientServ;
        break;
      case '/medicines':
        this._service = this.medicineServ;
        break;
      case '/prescriptions':
        this._service = this.prescriptionServ;
        break;
      case '/receptionists':
        // call service
        break;
      default:
        break;
    }

    this._service.getAll().subscribe(((data: {}[]) => {
      console.log(data);
      this.ELEMENT_DATA = data;
    }));
  }

  delete(_id: string) {
    if (confirm('are you sure'))
      this._service.delete(_id).subscribe(() => {
        this._service.getAll().subscribe(((data: {}[]) => {
          // console.log(data);
          this.ELEMENT_DATA = data;
        }));
      })
  }

  edit(_id: string) {
    // TODO: send id to the edit component
    this.router.navigateByUrl(this.router.url + `/edit/${_id}`)
  }
}