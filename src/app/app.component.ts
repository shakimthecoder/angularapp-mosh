import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'onlineapp';

  constructor () {
   function doSomething(){
     for (var i=0; i < 5; i++){
       console.log(i);
     }
     console.log('Finally', + i);
   }
   doSomething();
} 
  
}
