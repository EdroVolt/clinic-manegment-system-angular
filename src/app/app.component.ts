import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'clinic-manegment-system-angular';
  ELEMENT_DATA: {}[] = [];

  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  constructor() {}
  ngOnInit(): void {
    this.ELEMENT_DATA = [
      {
        id: 5,
        name: 'sad',
        email: 'asdasd',
      },
      {
        id: 5,
        name: 'sad',
        email: 'asdasd',
      },
      {
        id: 5,
        name: 'sad',
        email: 'asdasd',
      },
    ];
  }
}
