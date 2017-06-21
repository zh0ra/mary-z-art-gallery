import { IImage } from "app/model/iimage";

export class Image implements IImage {
    id: number;
    url: string;
    title: string;
    caption: string;
    constructor(){}
}
