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

  url = 'http://localhost:8080/ubifeed/?action=get-pickup-details&venueId=';
  dbResult: any;
  venueId: any;
  stations: Array<any>;
  selectedSectorId: any;

  constructor(private storageService: StorageService,
              private http: HttpClient,
              private toastService: ToastService,
              private router: Router) { }

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

    makeOrder() {
      console.log(this.selectedSectorId);
      if (this.selectedSectorId == undefined) {
        this.toastService.showToast('Please select a sector!');
      } else {
        this.router.navigateByUrl('/sidemenu/orders');
      }
    }
}
