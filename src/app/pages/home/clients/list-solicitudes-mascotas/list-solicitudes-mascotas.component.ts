import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IMascotas } from 'src/app/interfaces/mascotas.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MascotasService } from 'src/app/services/mascotas.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-solicitudes-mascotas',
  templateUrl: './list-solicitudes-mascotas.component.html',
  styleUrls: ['./list-solicitudes-mascotas.component.css']
})
export class ListSolicitudesMascotasComponent implements OnInit {

  p: number = 1;
  mascotas: IMascotas[] = [];
  user: IUser;


  constructor(
    private _serviceMascota: MascotasService,
    private _serviceAuth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.user = this._serviceAuth.getUser();
  }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas() {
    this.spinner.show();
    this._serviceMascota.getMascotasUser(this.user.id).subscribe(mascotas => {
      this.spinner.hide();
      this.mascotas = mascotas;
    });
  }


  agregar() {
    this.router.navigate(['home/clients/crearSolicitudes']);
  }

  delete(item: IMascotas) {
    const confirm = Swal.fire({
      title: 'Confirmación!',
      text: `Desea eliminar la mascota ${item.name}`,
      icon: 'warning',
      confirmButtonText: 'Eliminar',
      confirmButtonColor: 'red',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._serviceMascota.deleteMascotas(item.id).subscribe(() => {
          this.getMascotas();
        })
      }
    })
  }

}
