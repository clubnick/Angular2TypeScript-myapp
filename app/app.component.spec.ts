import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
      });
  }));

  it('should be true = true ', () => expect(true).toBe(true));

  it('should be false = false ', () => expect(false).toBe(false));

  it('should create component simple syntax', () =>
    expect(comp).toBeDefined()
  );

  it('should create component comples syntax', () => {
    expect(comp).toBeDefined();
  });


  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angu/i,
      '<h1> should say something about "Angular"');
  });

});
