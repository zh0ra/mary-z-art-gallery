import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  pageTite:string = "Marys Gallery";
  copyright:string = " Mary Z all right reserved.";
  @Input() datasource;
  selectedImage;

  constructor() {}

  setSelectedImage(img) {
    this.selectedImage = img;
  }

  ngOnInit() {
  }

}
