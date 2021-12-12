import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprobarSolicitudesMascotasComponent } from './aprobar-solicitudes-mascotas/aprobar-solicitudes-mascotas.component';
import { ParametrosComponent } from './parametros/parametros.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'aprobarSolicitudes', component: AprobarSolicitudesMascotasComponent },
      { path: 'parametros', component: ParametrosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
