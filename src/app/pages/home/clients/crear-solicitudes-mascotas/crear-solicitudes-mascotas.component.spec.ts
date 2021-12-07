import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudesMascotasComponent } from './crear-solicitudes-mascotas.component';

describe('CrearSolicitudesMascotasComponent', () => {
  let component: CrearSolicitudesMascotasComponent;
  let fixture: ComponentFixture<CrearSolicitudesMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSolicitudesMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolicitudesMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
