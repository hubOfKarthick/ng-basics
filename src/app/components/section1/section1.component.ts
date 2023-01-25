import { Component } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
})
export class Section1Component {

  title = 'ng-basics';
  studentData: any[] = [];


  constructor(private service: DemoService) { }

  inputText(event: any, type: string) {
    console.log(event.target.value, this.title, type);
  }

  triggerServiceCall() {
    this.service.getData().subscribe((data: any) => {
      this.studentData = data;
    });
  }

}
