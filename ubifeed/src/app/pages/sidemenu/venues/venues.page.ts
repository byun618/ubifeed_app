import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/';
  venues: any;

  constructor(private storageService: StorageService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {

    const params = new HttpParams()
      .set('action', 'get-all-venues');

    const headers = {
      headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
    };

    this.http.post(this.url, params, headers)
      .subscribe((data) => {
        console.log(data);
        this.venues = data;
      });
  }

}
