import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public greeting = (name: string):string => 'Welcome to ' + name + 'Z Gallery fellow viewer. This is my gallery and I am happy to greet you! Here you will find a few of my photos.';;
  constructor() { }

  ngOnInit() {
  }

}
