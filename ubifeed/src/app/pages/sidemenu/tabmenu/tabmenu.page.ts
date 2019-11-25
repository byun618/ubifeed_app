import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.page.html',
  styleUrls: ['./tabmenu.page.scss'],
})
export class TabmenuPage implements OnInit {

  restaurantId: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
