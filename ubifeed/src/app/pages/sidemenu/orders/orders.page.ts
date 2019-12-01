import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  user: any;
  orders: any;
  seatCatId: any;
  url = 'http://localhost:8080/ubifeed/';

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.getKeyValue('seatCatId')
      .then((data) => {
        console.log(data);
        this.seatCatId = data;
      });

    this.storageService.getObject('user')
      .then((data) => {
        console.log(data);
        this.user = data;

        const params = new HttpParams()
          .set('action', 'get-all-orders')
          .set('userId', this.user.userId)
          .set('seatCatId', this.seatCatId);

        const headers = {
          headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http.post(this.url, params, headers)
          .subscribe((data) => {
            console.log(data);
            this.orders = data;
          });
      });
  }

}
