import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { CrearSolicitudesMascotasComponent } from './crear-solicitudes-mascotas/crear-solicitudes-mascotas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrearSolicitudesMascotasComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
