import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../services/storage.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/?action=get-all-meals&restaurantId=';
  restaurantId: any;
  meals: any;
  basket: any;

  constructor(private storageService: StorageService,
              private http: HttpClient) { }

  ngOnInit() {
    this.storageService.getKeyValue('restaurantId')
      .then((data) => {
        console.log('Result getKeyValue', data);
        this.restaurantId = data;

        let urlWithParams = this.url + this.restaurantId;
        this.http.get(urlWithParams)
        .subscribe((data) => {
          console.log(data);
          this.meals = data;
        });
      });
    this.storageService.getKeyValue('drinksbasket')
      .then((data) => {
        if (data != null) {
          this.basket = data;
        }
      });
  }

  ionViewDidLeave() {

  }

  addToBasket(mealId: any) {
    if (this.basket == null) {
      this.basket = [];
    }
    let mealItem = null;
    this.meals.forEach(meal => {
      if (meal.mealId == mealId) {
        mealItem = meal;
      }
    });
    this.basket.push(mealItem);
    console.log(this.basket);

    this.storageService.setObject('drinksbasket', this.basket)
    .then((data) => {
      console.log(data);
    });
  }

}
