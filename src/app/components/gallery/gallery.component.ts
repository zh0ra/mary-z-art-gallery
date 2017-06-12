import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  @Input() datasource;
  selectedImage;

  setSelectedImage(img) {
    this.selectedImage = img;
  }
  ngOnInit() {
  }

}
