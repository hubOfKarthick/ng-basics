import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
})
export class Section2Component {

  dataArray = [
    {
      label: 'Home',
      url: 'home'
    },
    {
      label: 'About',
      url: 'about'
    }
  ];
  constructor(private router: Router) { }

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
