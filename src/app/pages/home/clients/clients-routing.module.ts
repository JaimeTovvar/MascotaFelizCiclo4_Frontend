import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudesMascotasComponent } from './crear-solicitudes-mascotas/crear-solicitudes-mascotas.component';
import { ListSolicitudesMascotasComponent } from './list-solicitudes-mascotas/list-solicitudes-mascotas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crearSolicitudes', component: CrearSolicitudesMascotasComponent },
      { path: 'listSolicitudes', component: ListSolicitudesMascotasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
