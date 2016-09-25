import { browser, element, by } from 'protractor/globals';

export class SpaceClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spcc-root h1')).getText();
  }
}
