import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class PointComponent {
  title = 'onlineapp';

  constructor (x?: number, y?: number) {
    this.x = x;
    this.y =y;

  }
  

  draw() {
    console.log('X:' + this.x + ', Y:', + this.y);
     }
  }
 
   let point = new Point();
   point.draw();
