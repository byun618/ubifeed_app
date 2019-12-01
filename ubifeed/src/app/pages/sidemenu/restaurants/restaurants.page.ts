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

  url = 'http://localhost:8080/ubifeed/';
  venueId: any;
  restaurants: any;

  constructor(private activatedRoute: ActivatedRoute,
              private storageService: StorageService,
              private http: HttpClient) { }

  ngOnInit() {
    this.venueId = this.activatedRoute.snapshot.paramMap.get('id');

    const params = new HttpParams()
      .set('action', 'get-all-restaurants')
      .set('venueId', this.venueId);

    const headers = {
      headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post(this.url, params, headers)
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
