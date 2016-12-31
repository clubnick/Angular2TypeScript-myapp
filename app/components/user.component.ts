import { Component } from '@angular/core';

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
  <button (click)="toggleHobbies()"> {{showHobbies ? "Hide hobbies" : "Show hobbies"}} </button>

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

  `
    ,
})

export class UserComponent {
    name: string;
    username: string;
    useremail: string;
    //address: any;
    address: i_address;
    showHobbies: boolean;
    hobbies: string[];

    constructor() {
        this.name = 'UserComponent';
        this.username = 'Frodo';
        this.useremail = 'flubnick@gmail.com ';
        this.address = {
            street: 'Hlavná 111',
            city: 'Bratislava',
            state: 'Slovensko'
        }
        this.showHobbies = false;
        this.hobbies = ['Music', 'Movies', 'Sports', 'Books'];

        console.log('constructor ran: ' + this.name)
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
        console.log("deleteHoby ran: " + this.hobbies[i]);
    }
}

interface i_address {
    street: string;
    city: string;
    state: string;
}