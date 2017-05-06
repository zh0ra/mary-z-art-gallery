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
constructor(){
 this.artOne = new ArtProduct(
  1,
    'The Western Ramparts at Aigues-Mortes',
    1876,
     'Frederic',
      'Bazille',
      'French',
      'assets/resources/images/DEX49_SS.jpg',
      'Impressionism',
      ['National Gallery of Art','Washington DC', 'USA'],
      'oil on canvas',
      'Collection of Mr. and Mrs. Paul Mellon',
      125000,
      'USD'
      );

  // this.artproducts = [

  // ];
}


}
