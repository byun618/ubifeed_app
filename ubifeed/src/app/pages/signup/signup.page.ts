import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  url = 'http://localhost:8080/ubifeed/';

  action = 'register-user';
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  passwordRepeat: string;

  constructor(private toastService: ToastService,
              private http: HttpClient,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    const params = new HttpParams()
      .set('action', 'register-user')
      .set('firstName', this.firstname)
      .set('lastName', this.lastname)
      .set('email', this.email)
      .set('phone', this.phone)
      .set('password', this.password);

    const headers = {
      headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
    }

    this.http.post(this.url, params, headers)
      .subscribe((data) => {
        if (data != null) {
          this.storageService.setObject('user', data)
            .then(_ => {
              this.router.navigateByUrl('/menu/venues');
            }).catch((ex) => {
              console.log(ex);
            });
        } else {
          this.toastService.showToast('Signup failed, please try again');
        }
      }, error => {
        console.log(error);
      });
  }

}
