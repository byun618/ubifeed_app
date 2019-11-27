import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  user: any;
  orders: any;
  url = 'http://localhost:8080/ubifeed/?action=get-all-orders&userId=';

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.getObject('user')
      .then((data) => {
        console.log(data);
        this.user = data;

        let urlWithParams = this.url + this.user.userId;
        this.http.get(urlWithParams)
          .subscribe((data) => {
            console.log(data);
            this.orders = data;
          })
      });
  }

}
