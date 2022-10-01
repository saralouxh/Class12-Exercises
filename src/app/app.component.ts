import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  width: number = 250;
  height: number = 200;
  isDisabled: boolean = true;
  title: string = 'header';
  isShow = true;
  isShowContent = true;
  secondTitle = 'header';
  myColor: string = 'green';
  changeColor: string = 'green';
  foods: string[] = ['food1', 'food2', 'food3'];

  onClick() {
    console.log('It works!');
  }

  onUpdateName(event: Event) {
    this.secondTitle = (<HTMLInputElement>event.target).value;
  }

}
