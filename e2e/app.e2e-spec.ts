import { TourOfHeroes2Page } from './app.po';

describe('tour-of-heroes2 App', function() {
  let page: TourOfHeroes2Page;

  beforeEach(() => {
    page = new TourOfHeroes2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes with Angular CLI');
  });
});
