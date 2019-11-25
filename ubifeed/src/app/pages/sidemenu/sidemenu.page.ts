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
      url: '/menu/venues',
      icon: 'pizza'
    },
    {
      title: 'Your Orders',
      url: '/menu/venues',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/menu/profile',
      icon: 'person'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
