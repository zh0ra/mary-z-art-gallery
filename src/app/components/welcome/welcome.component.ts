import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public greeting = (name: string):string => 'Welcome to ' + name + 'Z Gallery';;
  constructor() { }

  ngOnInit() {
  }

}
