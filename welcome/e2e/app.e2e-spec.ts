import { WelcomePage } from './app.po';

describe('welcome App', () => {
  let page: WelcomePage;

  beforeEach(() => {
    page = new WelcomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
