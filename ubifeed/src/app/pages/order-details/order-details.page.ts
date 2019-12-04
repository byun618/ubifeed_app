import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/';
  dbResult: any;
  venueId: any;
  stations: Array<any>;
  selectedSectorId: any;
  foodbasket: any;
  drinksbasket: any;
  userId: any;
  restaurantId: any;

  constructor(private storageService: StorageService,
              private http: HttpClient,
              private toastService: ToastService,
              private router: Router) { }

  ngOnInit() {
    this.storageService.getKeyValue('venueId')
      .then((data) => {
        console.log(data);
        this.venueId = data;

        const params = new HttpParams()
          .set('action', 'get-pickup-details')
          .set('venueId', data);
        
        const headers = {
          headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http.post(this.url, params, headers)
          .subscribe((data) => {
            console.log(data);
            if (data != null) {
              console.log(data);
              this.dbResult = data;
            }
          });
      });

    this.storageService.getObject('foodbasket')
      .then((data) => {
        console.log(data);
        this.foodbasket = data;
      });
    this.storageService.getObject('drinksbasket')
      .then((data) => {
        console.log(data);
        this.drinksbasket = data;
      });
    this.storageService.getObject('user')
      .then((data) => {
        console.log(data.userId);
        this.userId = data.userId;
      });
    this.storageService.getKeyValue('restaurantId')
      .then((data) => {
        console.log(data);
        this.restaurantId = data;
      });
    }

    makeOrder() {
      const params = new HttpParams()
        .set('action', 'add-order')
        .set('foodbasket', JSON.stringify(this.foodbasket))
        .set('drinksbasket', JSON.stringify(this.drinksbasket))
        .set('restaurantId', this.restaurantId)
        .set('userId', this.userId)
        .set('seatCatId', this.selectedSectorId);


      const headers = {
        headers: new HttpHeaders()
                  .set('Content-Type', 'application/x-www-form-urlencoded')
      };

      this.http.post(this.url, params, headers)
        .subscribe((data) => {
          console.log(data);
        });
    }

    makeOrder2() {
      // console.log(this.selectedSectorId);
      // if (this.selectedSectorId == undefined) {
      //   this.toastService.showToast('Please select a sector!');
      // } else {
      //   this.router.navigateByUrl('/sidemenu/orders');
      // }

      this.storageService.setKeyValue('seatCatId', this.selectedSectorId)
        .then((data) => {
          console.log('seatCatId set');
        });

      var foodbasket = null;
      this.storageService.getObject('foodbasket')
        .then((data) => {
          if (data != null) {
            foodbasket = data;
          }
        });

      var drinksbasket = null;
      this.storageService.getObject('drinksbasket')
        .then((data) => {
          if (data != null) {
            drinksbasket = data;
          }
        });

      var userId = null;
      this.storageService.getObject('user')
        .then((data) => {
          if (data != null) {
            userId = data.userId;
          }
        });

      var restaurantId = null;
      this.storageService.getKeyValue('restaurantId')
        .then((data) => {
          if (data != null) {
            restaurantId = data;
          }
        });
    }
}
