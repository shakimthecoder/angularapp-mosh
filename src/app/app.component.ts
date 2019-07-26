import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class PointComponent {
  title = 'onlineapp';

  constructor (private x?: number, private y?: number) {
  }


  draw() {
    console.log('X:' + this.x + ', Y:', + this.y);
     }

  getX() {
    return this.x;
     }
  }

   let point = new point(1, 2);
   let x = point.getX();
   point.draw();
