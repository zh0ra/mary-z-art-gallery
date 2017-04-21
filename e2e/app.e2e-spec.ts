import { MaryZArtGalleryPage } from './app.po';

describe('mary-z-art-gallery App', () => {
  let page: MaryZArtGalleryPage;

  beforeEach(() => {
    page = new MaryZArtGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
