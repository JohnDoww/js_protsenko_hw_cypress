beforeEach(() => {
  cy.visit('https://auto.ria.com/uk/');
});

describe('Search form', () =>{

describe('Old cars', () => {
  const oldCarParameters = [
    {
      testData: {
        maker:'lex',
        model:'i',
        yearFrom:'1990',
        yearTo:'1999'
      },
      expectedResult: {
        maker:'Lexus',
        model:'IS'
      }
    },
    {
      testData: {
        maker:'toyo',
        model:'cel',
        yearFrom:'1980',
        yearTo:'1995'
      },
      expectedResult: {
        maker:'Toyota',
        model:'Celica'
      }
    },
    {
      testData: {
        maker:'hond',
        model:'pr',
        yearFrom:'1979',
        yearTo:'1995'
      },
      expectedResult: {
        maker:'Honda',
        model:'Prelude'
      }
    }
  ]
  oldCarParameters.forEach(carParameters=> {

    it(`Find an old car ${carParameters.expectedResult.maker} produced from ${carParameters.testData.yearFrom} to ${carParameters.testData.yearTo}`, () => {
      cy.get('[data-text="Марка"]').type(carParameters.testData.maker);
      cy.get('#brandTooltipBrandAutocomplete-brand ul').first().should("contain", carParameters.expectedResult.maker).click();

      cy.get('[data-text="Модель"]').type(carParameters.testData.model);
      cy.get('#brandTooltipBrandAutocomplete-model ul').first().should("contain", carParameters.expectedResult.model).click();

      cy.get('[class="m-rows e-year"]').click();
      cy.get(`#yearFrom`).select(carParameters.testData.yearFrom);
      cy.get(`#yearFrom`).should("contain",carParameters.testData.yearFrom);
      cy.get(`#yearTo`).select(carParameters.testData.yearTo);
      cy.get(`#yearTo`).should("contain",carParameters.testData.yearTo);
    })
  })
});

describe('New cars', () => {
  const newCarParameters = [
    {
      testData: {
        maker:'lex',
        model:'nx',
        yearFrom:'2020',
        yearTo:'2023'
      },
      expectedResult: {
        maker:'Lexus',
        model:'NX'
      }
    },
    {
      testData: {
        maker:'toyo',
        model:'prad',
        yearFrom:'2022',
        yearTo:'2023'
      },
      expectedResult: {
        maker:'Toyota',
        model:'Land Cruiser Prado'
      }
    },
    {
      testData: {
        maker:'hond',
        model:'cla',
        yearFrom:'2020',
        yearTo:'2023'
      },
      expectedResult: {
        maker:'Honda',
        model:'Clarity'
      }
    }
  ]
  newCarParameters.forEach(carParameters=> {

    it(`Find a new car ${carParameters.expectedResult.maker} produced from ${carParameters.testData.yearFrom} to ${carParameters.testData.yearTo} `, () => {
      cy.get('[data-text="Марка"]').type(carParameters.testData.maker);
      cy.get('#brandTooltipBrandAutocomplete-brand ul').first().should("contain", carParameters.expectedResult.maker).click();

      cy.get('[data-text="Модель"]').type(carParameters.testData.model);
      cy.get('#brandTooltipBrandAutocomplete-model ul').first().should("contain", carParameters.expectedResult.model).click();

      cy.get('[class="m-rows e-year"]').click();
      cy.get(`#yearFrom`).select(carParameters.testData.yearFrom);
      cy.get(`#yearFrom`).should("contain",carParameters.testData.yearFrom);
      cy.get(`#yearTo`).select(carParameters.testData.yearTo);
      cy.get(`#yearTo`).should("contain",carParameters.testData.yearTo);
    })
  })
});

});

afterEach( () => {
  cy.get('.footer-form button.full').click({force:true});
});

after(() => {
  cy.visit('https://www.google.com/search?q=%D1%84%D0%B8%D0%BD%D0%B8%D1%88&sca_esv=573232648&rlz=1C1IXYC_ruUA934UA934&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjItr6sy_OBAxVJEBAIHYwoCQoQ_AUoAXoECAQQAw&biw=1920&bih=931#imgrc=OW-F4NEPkz3_vM');
});