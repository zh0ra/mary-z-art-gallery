import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pageTite:string = "Marys Gallery";
  constructor() { }
  @Input() datasource;
  selectedImage;

  setSelectedImage(img) {
    this.selectedImage = img;
  }
  ngOnInit() {
  }

  navigate(forward: boolean) {
    var index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.datasource.length) {
      this.selectedImage = this.datasource[index];
    }
  }
}
