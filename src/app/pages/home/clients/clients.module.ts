import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { CrearSolicitudesMascotasComponent } from './crear-solicitudes-mascotas/crear-solicitudes-mascotas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListSolicitudesMascotasComponent } from './list-solicitudes-mascotas/list-solicitudes-mascotas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [CrearSolicitudesMascotasComponent, ListSolicitudesMascotasComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    PipesModule
  ]
})
export class ClientsModule { }
