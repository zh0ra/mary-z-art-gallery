import { Component } from '@angular/core';
import { ArtProduct} from './artproduct.model';
import { ArtproductListComponent } from './artproduct-list/artproduct-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  artproducts: ArtProduct[];
artOne: ArtProduct;
images;
constructor(){

  //Todo move this hardcod to json propery file and use it by service --data.service.ts
this.images = [
  {"url":"assets/resources/images/DEX49_SS.jpg"},
  {"url":"assets/resources/images/DEX51_SS.jpg"},
  {"url":"assets/resources/images/DEX60_SS.jpg"},
  {"url":"assets/resources/images/DEX83_SS.jpg"},
  {"url":"assets/resources/images/img_01.jpg"},
  {"url":"assets/resources/images/img_02.jpg"}
];



//  this.artOne = new ArtProduct(
//   1,
//     'The Western Ramparts at Aigues-Mortes',
//     1876,
//      'Frederic',
//       'Bazille',
//       'French',
//       'assets/resources/images/DEX49_SS.jpg',
//       'Impressionism',
//       ['National Gallery of Art','Washington DC', 'USA'],
//       'oil on canvas',
//       'Collection of Mr. and Mrs. Paul Mellon',
//       125000,
//       'USD'
//       );

//   // this.artproducts = [

//   // ];
}


}
