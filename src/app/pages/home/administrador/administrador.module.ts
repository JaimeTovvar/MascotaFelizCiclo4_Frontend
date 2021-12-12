import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AprobarSolicitudesMascotasComponent } from './aprobar-solicitudes-mascotas/aprobar-solicitudes-mascotas.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AprobarSolicitudesMascotasComponent,
    ParametrosComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    NgxPaginationModule,
    PipesModule,
    NgxSpinnerModule
  ]
})
export class AdministradorModule { }
