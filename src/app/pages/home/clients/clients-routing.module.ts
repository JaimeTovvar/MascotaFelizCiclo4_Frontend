import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudesMascotasComponent } from './crear-solicitudes-mascotas/crear-solicitudes-mascotas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crearSolicitudes', component: CrearSolicitudesMascotasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
