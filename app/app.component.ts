import { Component } from '@angular/core';

// declaration
@Component({
  selector: 'my-app',
  template: `
  <h3> component: {{name}} </h3>
  <h2> Angular2TypeScript-myapp </h2>
  <div> https://github.com/clubnick/Angular2TypeScript-myapp, v1.3.0</div>

  <br/><hr/>
    <!--<user></user>-->
    <ul>
      <li><a routerLink="/"> Home (user) </a></li>
      <li><a routerLink="/user"> User </a></li>
      <li><a routerLink="/about"> About </a></li>
    </ul>
  <br/><hr/>
  <router-outlet></router-outlet>
  
  `
  ,
})

export class AppComponent  { 
  name = 'AppComponent';
  
  constructor(){
      console.log('constructor ran: ' + this.name);
  }
}
