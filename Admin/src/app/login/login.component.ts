import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Http,Headers, RequestOptions } from "@angular/http";
import { environment } from "../../environments/environment";
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  // bam = { color: rgb(47, 51, 62, 0.7)};
  // passwordFormControl = new FormControl('', [Validators.required]);
  // usernameFormControl = new FormControl('', [Validators.required]);
  loginForm : FormGroup;
  hide = true;
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(public http: Http, public formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username : ['' , Validators.required],
      password : ['' , Validators.required]
    })
   }

  ngOnInit() {
  }

  login(){
    // console.log(this.loginForm.value);
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let opts = new RequestOptions();
    opts.headers = headers;
    this.http.post(environment.login, this.loginForm.value)
            .subscribe((res)=>{
              console.log(res.json());
            })
  }

}
