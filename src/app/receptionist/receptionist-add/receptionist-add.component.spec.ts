import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistAddComponent } from './receptionist-add.component';

describe('ReceptionistAddComponent', () => {
  let component: ReceptionistAddComponent;
  let fixture: ComponentFixture<ReceptionistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
