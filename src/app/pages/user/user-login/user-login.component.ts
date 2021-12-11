import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';
import { ICredentials } from 'src/app/interfaces/credentials.interface';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private _serviceAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      }
    )
  }

  login(): void {
    let credentials: ICredentials = {
      email: this.formGroup.get('email').value,
      password: CryptoJS.MD5(this.formGroup.get('password').value).toString()
    }
    this._serviceAuth.login(credentials).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  redirectRegister(): void {
    this.router.navigate(['/user/register']);
  }

  redirectContact(): void {
    this.router.navigate(['/user/contact']);
  }


}
