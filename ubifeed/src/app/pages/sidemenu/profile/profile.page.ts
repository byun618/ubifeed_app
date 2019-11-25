import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;

  action: any;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  passwordRepeat: string;

  constructor(private storageService: StorageService,
              private router: Router) { }

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
}
