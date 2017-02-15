import { Heroes02Page } from './app.po';

describe('heroes02 App', function() {
  let page: Heroes02Page;

  beforeEach(() => {
    page = new Heroes02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
