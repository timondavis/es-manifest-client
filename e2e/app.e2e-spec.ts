import { SpaceClientPage } from './app.po';

describe('space-client App', function() {
  let page: SpaceClientPage;

  beforeEach(() => {
    page = new SpaceClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spcc works!');
  });
});
