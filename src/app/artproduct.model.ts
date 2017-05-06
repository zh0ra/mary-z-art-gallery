/**
 * Art product class provedes art object...
 */
export class ArtProduct{
    constructor(
        public id: number,
        public nameArtProduct: string,
        public yearPublication: number,
        public authorFirstName: string,
        public authorLastName: string,
        public authorCountry: string,
        public imageURL: string,
        //public artCateory: string[],
        public artStyle: string,
        public addressLocation: string[],

        public description: string, //TODO: leter it should be class...
        
        public donor: string,
        public price: number,
        public currency: string
        
    ){}
}