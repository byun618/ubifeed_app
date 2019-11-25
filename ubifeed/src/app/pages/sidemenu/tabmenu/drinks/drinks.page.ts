import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {

  restaurantId: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.getKeyValue('restaurantId')
      .then((data) => {
        console.log('Result getKeyValue', data);
        this.restaurantId = data;
      });

    
  }

}
