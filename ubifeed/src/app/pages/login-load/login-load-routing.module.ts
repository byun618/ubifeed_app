import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLoadPage } from './login-load.page';

const routes: Routes = [
  {
    path: '',
    component: LoginLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginLoadPageRoutingModule {}
