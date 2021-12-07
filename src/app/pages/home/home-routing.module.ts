import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/authGuard.guard';
import { CrearSolicitudesMascotasComponent } from './clients/crear-solicitudes-mascotas/crear-solicitudes-mascotas.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
