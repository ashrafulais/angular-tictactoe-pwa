import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  
  //allow properties to be input in this component
  //UI or DUMB component
  @Input() value: 'X' | 'O';

  /*
  randomNum;
  constructor() {
    setInterval(() => this.randomNum = Math.random(), 500);
  }
  */
  //randomNum = Math.random();

}
