import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFactComponent } from './detalles-fact.component';

describe('DetallesFactComponent', () => {
  let component: DetallesFactComponent;
  let fixture: ComponentFixture<DetallesFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
