import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id, // mandatory if templateUrl used
//    selector: 'user',
//     template: `
//     <p> here can be some html code </p
//   `
    templateUrl: 'user.component.html',
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

        // run injected method and subscribe observables results objects resturned from the service
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