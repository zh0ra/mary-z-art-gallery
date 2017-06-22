import { Component} from '@angular/core';
import {Router} from '@angular/router';
//import {AppRoutesModule} from './app-routes.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name : string;
  copyright:string = " Mary Z all right reserved.";
  
  constructor(private route: Router) {
  }
  goHome(){
    this.route.navigate(['']);
  }

}
