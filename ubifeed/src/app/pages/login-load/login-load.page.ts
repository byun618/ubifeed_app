import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login-load',
  templateUrl: './login-load.page.html',
  styleUrls: ['./login-load.page.scss'],
})
export class LoginLoadPage implements OnInit {

  constructor(private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.storageService.getObject('user')
      .then((result) => {
        if (result != null) {
          this.router.navigateByUrl('/sidemenu/venues');
        } else {
          this.router.navigateByUrl('/login');
        }
      }).catch((ex) => {
        console.log(ex);
      });
  }
}
