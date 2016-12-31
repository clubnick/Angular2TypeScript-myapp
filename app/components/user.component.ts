import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

// declaration
@Component({
    selector: 'user',
    template: `
  <h3> component: {{name}} </h3>
  <p><strong> Idname: <span class="green"> {{username}} </span></strong></p>
  <div><strong> Email: <span class="green"> {{useremail}} </span></strong></div>
  <p><strong> Adressa: <span class="green"> {{address.street}}, {{address.city}}, {{address.state}} </span></strong></p>

  <h3>Edit User</h3>
  <form>
    <label> UserName: </label>
    <input type="text" name="username" [(ngModel)]="username"/><br/>
    <label> UserEmail: </label>
    <input type="text" name="useremail" [(ngModel)]="useremail"/><br/>
    <label> Street: </label>
    <input type="text" name="address.street" [(ngModel)]="address.street"/><br/>
    <label> City: </label>
    <input type="text" name="address.city" [(ngModel)]="address.city"/><br/>
    <label> State: </label>
    <input type="text" name="address.state" [(ngModel)]="address.state"/><br/>
  </form>

  <!--(click)-->
  <br />
  <button (click)="toggleHobbies()"> {{showHobbies ? "Hide Hobbies" : "Show Hobbies"}} </button>

  <br/>
  <!--*ngIf-->
  <div *ngIf = "showHobbies">
    <h4> Hobbies (showhobbies is true) </h4>
    <!--{{hobbies}}-->
    <ul>
        <!--*ngFor-->
        <li *ngFor="let hobby of hobbies; let i = index">
            <button title="delete" (click)="deleteHobby(i)"> X </button> {{hobby}}
        </li>
    </ul>
    <form (submit)="addHobby(hobby.value)">
        <label> Add Hobby: </label>
        <input type="text" #hobby /> Press Enter to add...<br/>
    </form>
  </div>

  <!--(click)-->
  <br />
  <button (click)="togglePosts()"> {{showPosts ? "Hide Posts" : "Show Posts"}} </button>

  <!--{{posts}} observables -->
  <hr/>
  <div *ngIf = "showPosts">
    <h3>Posts observables from service</h3>
    <div *ngFor="let post of posts">
        <h3> {{post.id}}.{{post.title}} </h3>
        <p> {{post.body}} </p>
    </div>
  </div>
  `
    ,
    providers: [PostsService]
})

export class UserComponent {
    name: string;
    username: string;
    useremail: string;
    address: i_address;
    hobbies: string[];
    showHobbies: boolean;
    posts: i_Post[];
    showPosts: boolean;

    // injection of postsService
    constructor(private postsService: PostsService) {
        this.name = 'UserComponent';
        this.username = 'Frodo';
        this.useremail = 'flubnick@gmail.com ';
        this.address = {
            street: 'Hlavná 111',
            city: 'Bratislava',
            state: 'Slovensko'
        }
        this.hobbies = ['Music', 'Movies', 'Sports', 'Books'];
        this.showHobbies = false;
        this.posts = [];
        this.showPosts = false;

        // run injected method and subscribe observables results objects resturned from the servis
        // (into console and) into list property
        this.postsService.getPosts().subscribe(posts => {
            //console.log(posts);
            this.posts = posts;
            console.log('returned posts count: ' + this.posts.length);
        });

        console.log('constructor ran: ' + this.name +' length: ' +this.posts.length);
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
        console.log("toggleHobbies ran: " + this.showHobbies);
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
        console.log("addHoby ran: " + hobby);
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1);
        console.log("deleteHobby ran: " + this.hobbies[i]);
    }

    togglePosts() {
        this.showPosts = !this.showPosts;
        console.log("togglePosts ran: " + this.showPosts);
    }
}

interface i_address {
    street: string;
    city: string;
    state: string;
}

interface i_Post {
    id: number;
    title: string;
    body: string;
}