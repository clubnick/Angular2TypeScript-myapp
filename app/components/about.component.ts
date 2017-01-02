import { Component } from '@angular/core';
import { CommentsService} from '../services/comments.service';

// declaration
@Component({
  selector: 'about',
  template: `
  <h3> component: {{name}} </h3>
  <h2> About This App </h2>

  <h2> Angular2TypeScript-myapp </h2>
  <div> https://github.com/clubnick/Angular2TypeScript-myapp, v1.5.0</div>
  <h4> Angular 2, TypeScript </h4>

  <li> conditions *ngFor *ngIf </li>
  <li> events (click) (submit) </li>
  <li> ngModel binding Services-JsonPlaceHolder </li>
  <li> html templates </li>
  <li> routers </li>
  
  <p><strong> based on </strong></p>
  <li> Youtube: {{basedon_youtube}} </li>
  <li> GitHub: {{basedon_github}}  </li>
  <li> JsonPlaceHolder: {{basedon_jsonplaceholder}}  </li>

  <p>Comments from commentsService</p>
  <li>{{comment1}}</li>
  <li>{{comment2}}</li>
  `
  ,
  // service registration to be available in component
  providers: [CommentsService]
})

export class AboutComponent  { 
    name: string;
    basedon_github: string;
    basedon_youtube: string;
    basedon_jsonplaceholder: string;
    comment1: string = "";
    comment2: string = "";

    // injection of CommentsService
    constructor(private commentsService: CommentsService) {
        this.name = 'AboutComponent';
        this.basedon_github =  'https://github.com/angular/quickstart/releases/tag/2.4.0';
        this.basedon_youtube = 'https://www.youtube.com/watch?v=-zW1zHqsdyc';
        this.basedon_jsonplaceholder = 'https://jsonplaceholder.typicode.com';

        // run internal function 
        this.getComments();

        console.log('constructor ran: ' + this.name );

    }

    getComments() {
        this.comment1 = this.commentsService.getComment1();
        this.comment1 = this.commentsService.getComment2();
    }
  }
