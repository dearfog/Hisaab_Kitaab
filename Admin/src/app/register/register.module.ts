import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from "../material.module"
const registerRoutes: Routes = [
    {
      path: '',
      component: RegisterComponent
    }
  ];

  @NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(registerRoutes),
        MaterialModule
    ],
    exports: [],
    declarations: [RegisterComponent],
    providers: [],
})
export class RegisterModule { }
