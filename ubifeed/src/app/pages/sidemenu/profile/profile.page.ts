import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  url = 'http://localhost:8080/ubifeed/';
  action: any;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  passwordRepeat: string;

  constructor(private storageService: StorageService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    this.storageService.getObject('user')
      .then((res) => {
        this.user = res;
        this.firstname = res.firstName;
        this.lastname = res.lastName;
        this.phone = res.phone;
        this.email = res.email;
      }).catch((ex) => {
        console.log(ex);
      });
  }

  logout() {
    this.storageService.removeObject('user');
    this.router.navigateByUrl('/login');
  }

  saveUser() {
    const params = new HttpParams()
          .set('action', 'change-user')
          .set('userId', this.user.userId)
          .set('firstName', this.firstname)
          .set('lastName', this.lastname)
          .set('phone', this.phone)
          .set('email', this.email)
          .set('password', this.password);


        const headers = {
          headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http.post(this.url, params, headers)
          .subscribe((data) => {
            console.log(data);
          });
  }
}
