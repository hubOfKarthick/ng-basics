import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    .<div class="card">
      <div class="card-body">
        <h4 class="card-title">Dashboard works!</h4>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
