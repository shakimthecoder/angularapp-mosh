import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class PointComponent {
  title = 'onlineapp';
  private x: 0;
  private y: 0;

  constructor (private x?: number, private y?: number) {
    this.x = x;
    this.y =y;

  }
  
  Point: number {
    x: 0;
    y:0; 
  }
  draw() {
    console.log('X:' + this.x + ', Y:', + this.y);
     }
  }
   point = 0;
   let point = new point();
   point.draw();
