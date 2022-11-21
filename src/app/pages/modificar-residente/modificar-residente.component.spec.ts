import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarResidenteComponent } from './modificar-residente.component';

describe('ModificarResidenteComponent', () => {
  let component: ModificarResidenteComponent;
  let fixture: ComponentFixture<ModificarResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarResidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
