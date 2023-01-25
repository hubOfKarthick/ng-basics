import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppSandbox } from 'src/app/sandbox/app.sandbox';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styles: [
  ]
})
export class Section3Component {

  serviceResponse: any = 'Click on call service';
  isServiceLoaded = false;

  constructor(private appSandbox: AppSandbox) { }

  triggerService() {
    this.appSandbox.callService();
    this.appSandbox.GetServiceResponse$.subscribe(data => {
      console.log(data);
      this.serviceResponse = data;

      if (data && !(data instanceof HttpErrorResponse)) {
        this.isServiceLoaded = true;
      }
    })
  }

}
