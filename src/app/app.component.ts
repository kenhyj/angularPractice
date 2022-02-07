import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  unLists = ['unknownUsername1'];

  addUsername(userNameValue: string){
    this.unLists.push(userNameValue)
  }

  title = 'my-app';
}
