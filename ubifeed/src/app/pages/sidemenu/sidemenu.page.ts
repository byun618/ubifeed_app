import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  public pages = [
    {
      title: 'Make Order',
      url: '/sidemenu/venues',
      icon: 'pizza'
    },
    {
      title: 'Your Orders',
      url: '/sidemenu/orders',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/sidemenu/profile',
      icon: 'person'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
