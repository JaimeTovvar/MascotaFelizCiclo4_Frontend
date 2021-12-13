import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IMascotas } from 'src/app/interfaces/mascotas.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MascotasService } from 'src/app/services/mascotas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aprobar-solicitudes-mascotas',
  templateUrl: './aprobar-solicitudes-mascotas.component.html',
  styleUrls: ['./aprobar-solicitudes-mascotas.component.css']
})
export class AprobarSolicitudesMascotasComponent implements OnInit {

  p: number = 1;
  mascotas: IMascotas[] = [];


  constructor(
    private _serviceMascota: MascotasService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas() {
    this.spinner.show();
    this._serviceMascota.getMascotas().subscribe(mascotas => {
      this.spinner.hide();
      this.mascotas = mascotas;
    });
  }


  agregar() {
    this.router.navigate(['home/clients/crearSolicitudes']);
  }

  aprobar(item: IMascotas) {
    Swal.fire({
      title: 'Confirmación!',
      text: `Desea aprobar la mascota ${item.name}`,
      icon: 'warning',
      confirmButtonText: 'Aprobar',
      confirmButtonColor: 'green',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        item.estado = 'aceptado';
        this._serviceMascota.updateMascotas(item).subscribe(() => {
          this.getMascotas();
        })
      }
    })
  }

  rechazar(item: IMascotas) {
    Swal.fire({
      title: 'Confirmación!',
      text: `Desea rechazar la mascota ${item.name}`,
      icon: 'warning',
      confirmButtonText: 'Rechazar',
      confirmButtonColor: 'red',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        item.estado = 'rechazado';
        this._serviceMascota.updateMascotas(item).subscribe(() => {
          this.getMascotas();
        })
      }
    })
  }
}
