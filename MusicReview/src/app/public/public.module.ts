import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginRegisterComponent } from './login-register/login-register.component';



@NgModule({
  declarations: [HomepageComponent, LoginRegisterComponent],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
