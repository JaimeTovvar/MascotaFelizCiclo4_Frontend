import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {

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
        comments: ['', [Validators.required]],
        cel: ['', [Validators.required, Validators.maxLength(10)]],
        email: ['', [Validators.required, Validators.pattern(this.isEmail)]]
      }
    )
  }

  isValidField(field: string): string {
    const validatedField = this.formGroup.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : ''
  }

  contact() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
    } else {
      this._serviceAuth.registerContact(this.formGroup.value).subscribe(() => {
        this.router.navigate(['user/login']);
        this.toastr.success('Se le notificara la respuesta por parte del administrador', 'Comentario registrado correctamente');
      });
    }
  }

}
