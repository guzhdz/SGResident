import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarResidenteComponent } from './agregar-residente.component';

describe('AgregarResidenteComponent', () => {
  let component: AgregarResidenteComponent;
  let fixture: ComponentFixture<AgregarResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarResidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
