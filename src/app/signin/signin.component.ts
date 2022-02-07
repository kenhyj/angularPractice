import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // https://angular.io/guide/inputs-outputs
  @Output() newUsernameEvent = new EventEmitter<string>();

  enterUsername(value: string) {
    this.newUsernameEvent.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
