import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

import { delay } from 'q';


describe('super-fancy-employees add page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Werknemer toevoegen as title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Werknemer toevoegen');
  });

  it('should allow user to add an employee', () => {
    element(by.id('firstName')).sendKeys('Aydin');
    element(by.id('lastName')).sendKeys('Erdas');

    element(by.id('btnAddEmployee')).click();

    expect(element(by.id('toast-succes')).getText()).toEqual("Werknemer toegevoegd!");    
  });

});

describe('super-fancy-employees add page', () => {

  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });

  it('should allow user to add an employee with different role', () => {

    element(by.id('firstName')).sendKeys('Aaricia');
    element(by.id('lastName')).sendKeys('van Oostrom');

    element(by.cssContainingText('option', 'Schoonmaker')).click();

    element(by.id('startDate')).sendKeys('11112011');

    delay(5000).then(()=> {
      element(by.id('btnAddEmployee')).click();
      expect(element(by.id('toast-succes')).getText()).toEqual("Werknemer toegevoegd!");  
    });
    
  });

});
