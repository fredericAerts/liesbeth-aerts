import { LiesbethAertsPage } from './app.po';

describe('liesbeth-aerts App', () => {
  let page: LiesbethAertsPage;

  beforeEach(() => {
    page = new LiesbethAertsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
