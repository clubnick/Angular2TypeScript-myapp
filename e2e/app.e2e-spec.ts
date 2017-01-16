import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsgH1 = 'Hello Angular';
  let expectedMsgH2 = 'Angular2TypeScript-myapp';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsgH1, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsgH1);
  });

  it('should display: ' + expectedMsgH2, function () {
    expect(element(by.css('h2')).getText()).toEqual(expectedMsgH2);
  });

});
