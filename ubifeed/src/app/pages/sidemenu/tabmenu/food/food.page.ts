import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/?action=get-all-meals&restaurantId=';
  restaurantId: any;
  meals: any;
  basket: any;

  constructor(private activatedRoute: ActivatedRoute,
              private storageService: StorageService,
              private http: HttpClient) { }

  ngOnInit() {
    this.restaurantId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.restaurantId);
    this.storageService.setKeyValue('restaurantId', this.restaurantId)
      .then(_ => {
        console.log('Restaurant id set successfully');
      });

    let urlWithParams = this.url + this.restaurantId;

    this.http.get(urlWithParams)
      .subscribe((data) => {
        console.log(data);
        this.meals = data;
      });
    
    this.storageService.getKeyValue('foodbasket')
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
    this.storageService.setObject('foodbasket', this.basket)
    .then((data) => {
      console.log(data);
    });
  }

}
