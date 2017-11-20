import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from "./material.module";
// import { RegisterComponent } from './register/register.component';
 import { HttpModule } from "@angular/http";
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    // component: RegisterComponent
    loadChildren: 'app/register/register.module#RegisterModule',
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
