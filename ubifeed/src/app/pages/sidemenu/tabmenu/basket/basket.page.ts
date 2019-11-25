import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  foodbasket: any;
  drinksbasket: any;
  totalAmount = 0.0;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.getObject('foodbasket')
      .then((data) => {
        this.foodbasket = data;
        if (data != null) {
          data.forEach(item => {
            this.totalAmount += item.price;
          });
        }
        console.log(data);
      });
    
    this.storageService.getObject('drinksbasket')
      .then((data) => {
        this.drinksbasket = data;
        if (data != null) {
          data.forEach(item => {
            this.totalAmount += item.price;
          });
          console.log(this.totalAmount);
        }
        console.log(data);
      });
  }

  removeFromBasket(index: any, identifier: any) {
    if (identifier == 1) {
      this.foodbasket.splice(index, 1);
      console.log(this.foodbasket);
    } else if (identifier == 2) {
      this.drinksbasket.splice(index, 1);
      console.log(this.drinksbasket);
    }
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    this.totalAmount = 0.0;
    this.foodbasket.forEach(item => {
      this.totalAmount += item.price;
    });
    this.drinksbasket.forEach(item => {
      this.totalAmount += item.price;
    });
  }

}
