import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    RegisterModule,
    RouterModule.forRoot([
        {
            path:'',
            redirectTo:'/home',
            pathMatch:'full'
        },
        {
            path:'home',
            redirectTo:'/home',
            pathMatch:'full'
        },
        {
            path:'register',
            redirectTo:'/register',
            pathMatch:'full'
        }    
    ])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }