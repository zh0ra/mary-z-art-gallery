import { Component } from '@angular/core';
import { ArtproductListComponent } from './artproduct-list/artproduct-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images;
  
  constructor() {

    //Todo move this hardcod to json propery file and use it by service --data.service.ts
    this.images = [
      {
        "url": "assets/resources/images/img_01.jpg",
        "title": "Flower",
        "caption": " That is a daisy...."
      },
      {
        "url": "assets/resources/images/img_02.jpg",
        "title": "Green leaves",
        "caption": "These leaves are still green..."
      },
      {
        "url": "assets/resources/images/img_03.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_04.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_05.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_06.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_07.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_08.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_09.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_10.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      },
       {
        "url": "assets/resources/images/img_11.jpg",
        "title": "Violin mistery",
        "caption": " My violin was created in USA a long, long time ago. When it was merlin age..."
      }


    ];
  }


}
