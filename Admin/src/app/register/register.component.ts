import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  // bam = { color: rgb(47, 51, 62, 0.7)};
  passwordFormControl = new FormControl('', [Validators.required]);
  usernameFormControl = new FormControl('', [Validators.required]);
  fnameFormControl = new FormControl('', [Validators.required]);
  lnameFormControl = new FormControl('', [Validators.required]);
  hide = true;
  model: any = {};
  loading = false;
  returnUrl: string;
  buttonHide = false;
  constructor() { }

  ngOnInit() {
    if (this.passwordFormControl.hasError || this.fnameFormControl.hasError || this.lnameFormControl.hasError || this.usernameFormControl.hasError || this.passwordFormControl.hasError) {
      this.buttonHide = true;
    }
    else{
      this.buttonHide = false;
    }
  }

}
