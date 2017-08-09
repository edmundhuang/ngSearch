import { NgSearchPage } from './app.po';

describe('ng-search App', () => {
  let page: NgSearchPage;

  beforeEach(() => {
    page = new NgSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
