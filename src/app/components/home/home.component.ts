import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
       <div class="card">
          <div class="card-body">
            <a class="card-link" [routerLink]="'dashboard'" routerLinkActive="text-bg-primary">Dashboard</a>
            <a class="card-link" (click)="routeTo('profile')" routerLinkActive="text-bg-primary">Profile</a>
          </div>
        </div>
  `,
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  routeTo(path: string) {
    this.router.navigate([path], {
      queryParams: {
        usertype: 'admin'
      },
      relativeTo: this.route
    });
  }
}
