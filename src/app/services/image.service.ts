import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IImage } from "../model/iimage";
import {Image} from "../model/image.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService {
private imagesUrl: string = 'assets/images.json';
  constructor(private _http:Http){}

  getImages():Observable<Image[]>{
    return this._http
    .get(this.imagesUrl)
    .map((response: Response) => <Image[]> response.json())
    .catch(this.errorHendler);
  }

  // private extractImagesData(res: Response){
  //   let body = res.json();
  //   return body.data || { };
  // }

  private errorHendler(error: Response | any){
    let errMsg:string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || '' } ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString(); 
    }
    console.log(errMsg);
    return errMsg;
  }
}
 