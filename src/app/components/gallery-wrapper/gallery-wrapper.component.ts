import { Component, OnInit } from '@angular/core';
import { IImage } from "../../model/iimage";
import { ImageService} from "../../services/image.service";

@Component({
  selector: 'app-gallery-wrapper',
  templateUrl: './gallery-wrapper.component.html',
  styleUrls: ['./gallery-wrapper.component.css']
})
export class GalleryWrapperComponent implements OnInit {
images: IImage[];
errorMessage: string;
  constructor(private imageService:ImageService) {}

  ngOnInit() {
    this.getAllImages();
  }
  
  getAllImages(){
    this.imageService.getImages()
    .subscribe(
      images => this.images=images,
      error => this.errorMessage = <any>error
    );
  }
}
