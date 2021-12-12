import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitudesMascotasComponent } from './list-solicitudes-mascotas.component';

describe('ListSolicitudesMascotasComponent', () => {
  let component: ListSolicitudesMascotasComponent;
  let fixture: ComponentFixture<ListSolicitudesMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSolicitudesMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitudesMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
