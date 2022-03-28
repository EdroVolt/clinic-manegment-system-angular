import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistEditComponent } from './receptionist-edit.component';

describe('ReceptionistEditComponent', () => {
  let component: ReceptionistEditComponent;
  let fixture: ComponentFixture<ReceptionistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
