import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
//import {Image} from "../model/image.model";
import { IImage } from "../model/iimage";
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  constructor(private _http:Http){}

  getImages():Observable<IImage[]>{
    return this._http
    .get('api/images/images.json')
    .map((response: Response) => <IImage[]>response.json());
  }
}
 