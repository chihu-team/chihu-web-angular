import { ChihuWebAngularPage } from './app.po';

describe('chihu-web-angular App', () => {
  let page: ChihuWebAngularPage;

  beforeEach(() => {
    page = new ChihuWebAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
