import { Component } from '@angular/core';

// declaration
@Component({
  selector: 'my-app',
  template: `
  <h3> component: {{name}} </h3>
  <h2> Angular 2 QuickStart - myapp </h2>
  <h4> (Angular 2, TypeScript-*ngFor *ngIf (click) (submit) ngModel binding...</h4>
  

  <p><strong> based on </strong></p>
  <li> Youtube: {{basedon_youtube}} </li>
  <li> GitHub: {{basedon_github}}  </li>

  <br/><hr/>
  <user></user>
  <br/><hr/>
  `
  ,
})

export class AppComponent  { 
  name = 'AppComponent';
  basedon_github = 'https://github.com/angular/quickstart/releases/tag/2.4.0';
  basedon_youtube = 'https://www.youtube.com/watch?v=-zW1zHqsdyc';

  constructor(){
      console.log('constructor ran: ' + this.name);
  }
}
