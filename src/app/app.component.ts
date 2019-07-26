import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'onlineapp';

  constructor () {
  let a: number;
  let b: string;
  let c: boolean;
  let d: any;
  let e: number[] = [1, 2, 3];
  let f: any[] = [1, false, 'shakim'];

  const ColorRed= 0;
  const ColorBlue = 1;
  const ColorGreen = 2;

  enum Color { Red = 0, Green = 2, Blue = 1 };
  let backgroundColor = Color.Red

  let message;
  message='abc';
  let endsWithC =  (<string>message).endsWith('c');
  let alternativeWay = (message as string).endsWith('c');

  let log = function(message){
    console.log(message);
  }

  let DoLog = () =>
    console.log('message');
  
  DoLog();

  class Point {
    x: number;
    y: number;

    draw() {
     console.log('X:' + this.x + ', Y:', + this.y);
     }
     getDistance(another: Point){
       //...
       }
    }
  }
    let point: Point;
    point.draw();

