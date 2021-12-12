import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  private isEmail = /\S+@\S+\.\S+/;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService,
    private _serviceAuth: AuthService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        year: ['', [Validators.required]],
        address: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
        rol: ['61b67b298c35342690266e12'],
        nameRol: ['Cliente']
      }
    )
  }

  isValidField(field: string): string {
    const validatedField = this.formGroup.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : ''
  }

  register() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      this._serviceAuth.registerUser(this.formGroup.value).subscribe(() => {
        this.router.navigate(['user/login']);
        this.toastr.success('Cliente guardado correctamente', 'Porfavor revice su correo donde se le enviaran sus credenciales');
      });
    }
  }
}
