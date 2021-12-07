import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService
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
        rol: ['']
      }
    )
  }

  register() {
    console.log(this.formGroup.value)
    this.toastr.success('Hello world!', 'Toastr fun!');

  }

}
