import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-registration',
  templateUrl: './auth-registration.component.html',
  styleUrls: ['./auth-registration.component.css']
})
export class AuthRegistrationComponent implements OnInit {
  
  title:string = "Authorization or Registration Form";

  constructor() { }

  ngOnInit() {
  }
}
