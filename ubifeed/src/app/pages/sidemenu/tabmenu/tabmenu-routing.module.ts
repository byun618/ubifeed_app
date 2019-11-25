import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TabmenuPage,
    children: [
      {
        path: 'food/:id',
        loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule) 
      },
      {
        path: 'drinks',
        loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('./basket/basket.module').then( m => m.BasketPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule {}
