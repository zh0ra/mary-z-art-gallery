import { IImage } from "app/model/iimage";

export class Image implements IImage {
    id: string;
    url: string;
    title: string;
    caption: string;
    constructor(){}
}
