import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarSolicitudesMascotasComponent } from './aprobar-solicitudes-mascotas.component';

describe('AprobarSolicitudesMascotasComponent', () => {
  let component: AprobarSolicitudesMascotasComponent;
  let fixture: ComponentFixture<AprobarSolicitudesMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarSolicitudesMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarSolicitudesMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
