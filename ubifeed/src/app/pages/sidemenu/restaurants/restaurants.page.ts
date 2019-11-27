import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/?action=get-all-restaurants&venueId=';
  venueId: any;
  restaurants: any;

  constructor(private activatedRoute: ActivatedRoute,
              private storageService: StorageService,
              private http: HttpClient) { }

  ngOnInit() {
    this.venueId = this.activatedRoute.snapshot.paramMap.get('id');
    let urlWithParams = this.url + this.venueId;
    this.http.get(urlWithParams)
      .subscribe((data) => {
        console.log(data);
        this.restaurants = data;
      });

    this.storageService.setKeyValue('venueId', this.venueId)
      .then((data) => {
        console.log('venueId set');
     });
  }

}
