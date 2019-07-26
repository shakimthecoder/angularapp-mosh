import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'onlineapp';

  constructor () {
    function log(message){
    console.log('Hello' + message);
  }
  var message = 'This works';
  
  log(message);
} 
  
}
