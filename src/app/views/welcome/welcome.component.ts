import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent {
  constructor(public router: Router) {

  }
  goToData() {
    this.router.navigateByUrl('/charts')
  }

}
