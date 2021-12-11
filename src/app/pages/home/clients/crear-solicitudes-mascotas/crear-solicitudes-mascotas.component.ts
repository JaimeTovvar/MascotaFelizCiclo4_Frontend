import { Component, DebugElement, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IMascotas } from 'src/app/interfaces/mascotas.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-crear-solicitudes-mascotas',
  templateUrl: './crear-solicitudes-mascotas.component.html',
  styleUrls: ['./crear-solicitudes-mascotas.component.css']
})
export class CrearSolicitudesMascotasComponent implements OnInit {

  user: IUser = {} as IUser;

  formGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService,
    private _serviceMascotas: MascotasService,
    private _serviceAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.user = this._serviceAuth.getUser();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        year: ['', [Validators.required]],
        type: ['', [Validators.required]],
        address: ['', [Validators.required]],
        colour: ['', [Validators.required]],
        sex: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
      }
    )
  }

  isValidField(field: string): string {
    const validatedField = this.formGroup.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : ''
  }

  add() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      let mascota: IMascotas = this.formGroup.value;
      mascota.idUser = this.user.id;
      this._serviceMascotas.registerMascotas(mascota).subscribe(() => {
        this.toastr.success('Mascota guardada correctamente');
      });
      this.formGroup.reset();
    }
  }

}
