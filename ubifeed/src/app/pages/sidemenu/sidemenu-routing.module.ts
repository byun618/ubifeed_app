import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
      {
        path: 'venues',
        loadChildren: () => import('./venues/venues.module').then( m => m.VenuesPageModule)
      },
      {
        path: 'restaurants/:id',
        loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'tabmenu',
        loadChildren: () => import('./tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
