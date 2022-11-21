import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPagosComponent } from './buscar-pagos.component';

describe('BuscarPagosComponent', () => {
  let component: BuscarPagosComponent;
  let fixture: ComponentFixture<BuscarPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
