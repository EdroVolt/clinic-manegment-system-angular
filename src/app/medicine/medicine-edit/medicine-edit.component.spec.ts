import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineEditComponent } from './medicine-edit.component';

describe('MedicineEditComponent', () => {
  let component: MedicineEditComponent;
  let fixture: ComponentFixture<MedicineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
