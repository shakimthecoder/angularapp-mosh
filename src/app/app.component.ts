import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'onlineapp';

  constructor () {
  class Point {
    x: number;
    y: number;

    draw() {
     console.log('X:' + this.x + ', Y:', + this.y);
      }

     getDistance(another: Point) {
       //...
       }
    }
  
    let point: new Point();
    point.draw();
  }
}