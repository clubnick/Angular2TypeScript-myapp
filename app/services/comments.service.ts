//import { Injectable } from '@angular/core'; // inject service as dependency
import 'rxjs/add/operator/map'; // identifies it as a service

export class CommentsService {
    name = 'CommentService';


    constructor(){
        console.log('constructor ran: ' + this.name);
    }

    getComment1() {
        return 'this is comment1 from CommentService';
    }

    getComment2() {
        return 'this is comment2 from CommentService';
    }
}