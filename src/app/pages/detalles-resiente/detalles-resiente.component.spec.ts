import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesResienteComponent } from './detalles-resiente.component';

describe('DetallesResienteComponent', () => {
  let component: DetallesResienteComponent;
  let fixture: ComponentFixture<DetallesResienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesResienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesResienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
