import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crear-solicitudes-mascotas',
  templateUrl: './crear-solicitudes-mascotas.component.html',
  styleUrls: ['./crear-solicitudes-mascotas.component.css']
})
export class CrearSolicitudesMascotasComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService,
    private _serviceAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
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
      this._serviceAuth.registerUser(this.formGroup.value).subscribe(() => {
        this.toastr.success('Cliente guardado correctamente', 'Porfavor revice su correo donde se le enviaran sus credenciales');
      });
    }
  }

}
