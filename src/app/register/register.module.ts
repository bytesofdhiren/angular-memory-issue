import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
        path:"register",
        component: RegisterComponent
    }])
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }