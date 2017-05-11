import { Angular2HeroDemoPage } from './app.po';

describe('angular2-hero-demo App', () => {
  let page: Angular2HeroDemoPage;

  beforeEach(() => {
    page = new Angular2HeroDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
