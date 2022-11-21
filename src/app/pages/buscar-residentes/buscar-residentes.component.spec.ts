import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarResidentesComponent } from './buscar-residentes.component';

describe('BuscarResidentesComponent', () => {
  let component: BuscarResidentesComponent;
  let fixture: ComponentFixture<BuscarResidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarResidentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
