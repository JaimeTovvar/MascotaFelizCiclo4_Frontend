import { Component, DebugElement, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
  img: any = "";
  imagePath: any;
  formGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService,
    private _serviceMascotas: MascotasService,
    private _serviceAuth: AuthService,
    private _sanitizer: DomSanitizer
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
      mascota.estado = 'pendiente';
      mascota.imagen = this.img;
      this._serviceMascotas.registerMascotas(mascota).subscribe(() => {
        this.toastr.success('Mascota guardada correctamente');
      });
      this.formGroup.reset();
    }
  }

  cancel() {
    this.router.navigate(['home/clients/listSolicitudes']);
  }

  encodeImageFileAsURL($event: any) {
    var file = $event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      this.img = reader.result;
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(this.img);
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
  }

}
