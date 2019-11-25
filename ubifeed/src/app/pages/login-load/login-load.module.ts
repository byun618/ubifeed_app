import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginLoadPageRoutingModule } from './login-load-routing.module';

import { LoginLoadPage } from './login-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginLoadPageRoutingModule
  ],
  declarations: [LoginLoadPage]
})
export class LoginLoadPageModule {}
