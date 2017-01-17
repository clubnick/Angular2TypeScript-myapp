import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests - locator by.css', function () {

  let expectedMsgH1 = 'Hello Angular';
  let expectedStrH2 = 'Angular2TypeScript-myapp';
  let expectedStrH3 = 'component: AppComponent';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsgH1, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsgH1);
  });

  it('should display: ' + expectedStrH2, function () {
    expect(element(by.css('h2')).getText()).toEqual(expectedStrH2);
  });

});


describe('QuickStart E2E Tests - locator by.xpath', function () {

  let expectedStrH3 = 'component: AppComponent';

  beforeEach(function () {
    browser.get('');
  });


  it('should display: ' + expectedStrH3, function () {
    expect(element(by.xpath('/html/body/my-app/h3')).getText()).toEqual(expectedStrH3);
  });

});
