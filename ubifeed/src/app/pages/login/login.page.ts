import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/';
  email: string;
  password: string;

  constructor(private toastService: ToastService,
              private http: HttpClient,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    const params = new HttpParams()
      .set('action', 'login-user')
      .set('email', this.email)
      .set('password', this.password);

    const headers = {
      headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
    }

    this.http.post(this.url, params, headers)
      .subscribe((data) => {
        console.log('Begin subscribe login', data);
        if (data != null) {
          this.storageService.setObject('user', data)
            .then(_ => {
              this.router.navigateByUrl('/sidemenu/venues');
            })
        } else {
          this.toastService.showToast('Credentials wrong!')
        }
      });
  }

}
