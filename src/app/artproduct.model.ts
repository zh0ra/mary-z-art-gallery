/**
 * Art product class provedes art object...
 */
export class ArtProduct{
    constructor(
        public id: number,
        public name: string,
        public imageURL: string,
        public art_category: string[],
        public price: number
        
    ){}
}