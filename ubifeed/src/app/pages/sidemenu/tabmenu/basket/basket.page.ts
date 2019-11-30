import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  foodbasket: any;
  drinksbasket: any;
  totalAmount = 0.0;

  constructor(private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.storageService.getObject('foodbasket')
      .then((data) => {
        this.foodbasket = data;
        if (data != null) {
          data.forEach((item) => {
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

  ngOnDestroy() {
    this.storageService.removeObject('foodbasket');
    this.storageService.removeObject('drinksbasket');
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
    if (this.foodbasket != null) {
      this.foodbasket.forEach(item => {
        this.totalAmount += item.price;
      });
    } 
    if (this.drinksbasket != null) {
      this.drinksbasket.forEach(item => {
        this.totalAmount += item.price;
      });
    }
  }
  orderItems() {
    this.router.navigateByUrl('/order-details');
  }

}
