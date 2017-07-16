import { InSCloud01Page } from './app.po';

describe('in-scloud01 App', function() {
  let page: InSCloud01Page;

  beforeEach(() => {
    page = new InSCloud01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
