//@angular global
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//my-app local
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
