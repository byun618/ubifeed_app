import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/?action=get-pickup-details&venueId=';
  dbResult: any;
  venueId: any;
  stations: Array<any>;

  constructor(private storageService: StorageService,
              private http: HttpClient) { }

  ngOnInit() {
    this.storageService.getKeyValue('venueId')
      .then((data) => {
        console.log(data);
        this.venueId = data;

        let urlWithParams = this.url + this.venueId;
        this.http.get(urlWithParams)
          .subscribe((data) => {
            console.log(data);
            this.dbResult = data;
          });
      });
  }
}
