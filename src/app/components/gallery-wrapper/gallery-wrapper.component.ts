import { Component, OnInit } from '@angular/core';
import { Image } from "../../model/image.model";
import { ImageService} from "../../services/image.service";
import { Subscriber } from "rxjs";

@Component({
  selector: 'app-gallery-wrapper',
  templateUrl: './gallery-wrapper.component.html',
  styleUrls: ['./gallery-wrapper.component.css']
})
export class GalleryWrapperComponent implements OnInit {
images:Image[] = [];
errorMessage: string;

  constructor(private imageService:ImageService) {
    this.getAllImages;
  }

  ngOnInit() {
    this.getAllImages();
  }
 getImages():Image[]{
   return this.images;
 }
  getAllImages(){
    this.imageService.getImages()
    .subscribe(
      img => this.images=img,
      error => this.errorMessage = <any>error
    );
  }
}
