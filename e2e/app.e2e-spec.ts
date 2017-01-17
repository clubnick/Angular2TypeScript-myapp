import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests - locator by.css', function () {

  let expectedMsgH1 = 'Hello Angular';
  let expectedStrH2 = 'Angular2TypeScript-myapp';

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

/*
describe('http://sme.sk - locator by.xpath', function () {
//
// [14:05:29] E/protractor - Could not find Angular on page http://sme.sk/ : retries looking for angular exceeded
// [1] A Jasmine spec timed out. Resetting the WebDriver Control Flow.
//
  let expectedStr = 'DOMOV';

  beforeEach(function () {
    browser.get('http://sme.sk');
  });

  it('should contains display: ' + expectedStr, function () {
    expect(element(by.xpath('/html/body/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/h4/a')).getText()).toContain(expectedStr);
  });
});
*/

