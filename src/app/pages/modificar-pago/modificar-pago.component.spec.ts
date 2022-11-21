import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPagoComponent } from './modificar-pago.component';

describe('ModificarPagoComponent', () => {
  let component: ModificarPagoComponent;
  let fixture: ComponentFixture<ModificarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
