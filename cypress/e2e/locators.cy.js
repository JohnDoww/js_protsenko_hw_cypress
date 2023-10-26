describe('template spec', () => {
  it('passes', () => {
    const humburgerMenuElement ='[ng-reflect-icon="menu-2-outline"]';
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.get('[alt="Cosmic Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[ng-reflect-router-link="/pages/forms/inputs"]').click();
    // 1 to 10
    cy.get(humburgerMenuElement).click();
    cy.get('input[placeholder="Input with Info"]').type('Test - locator 2')
    cy.get('[class="status-basic nb-transition"]:not([ng-reflect-checked]):not([ng-reflect-disabled])').click();
    cy.get('div>[status="warning"]').click();
    cy.get('[fieldsize="large"]').type('Test - locator 4');
    cy.get('[selected="1"]').click();
    cy.get('[value="2"]').click();
    cy.get('[placeholder="Disabled input"]');
    cy.get('nb-checkbox[disabled]').click();
    cy.get('label>[value="Disabled Value"]');
  //
    cy.get(humburgerMenuElement).click();
    cy.get('[title="Form Layouts"]').click();
    cy.get(humburgerMenuElement).click();
    //11 to 20
    cy.get('form>[placeholder="Email"]').type('userEmail@LLLLocator11.com');
    cy.get('form>nb-checkbox').click();
    cy.get('form>[ng-reflect-status="primary"]').click();
    cy.get('div[class="offset-sm-3 col-sm-9"]>[ng-reflect-status="primary"]').click();
    cy.get('[placeholder="Message"]').type('leave the message ----- locator 15');
    cy.get('[placeholder="Recipients"]').type(' locator 16');
    cy.get('[placeholder="Subject"]').type(' locator 17');
    cy.get('form [status="success"]').click();
    cy.get('#inputEmail3').type(' locator 19');
    cy.get('#inputPassword3').type(' locator 20');
    //21 to 30
    cy.get('[class="form-group row"] [class="custom-checkbox"]').click();
    cy.get('button[status="warning"]').click();
    cy.get('#inputFirstName').type('NameLocator-23');
    cy.get('#inputLastName').type('LastNameLocator-24');
    cy.get('#inputEmail').type('emailLocator-25');
    cy.get('#inputWebsite').type('websiteLocator-26');
    cy.get('button.status-basic.nb-transition[type="submit"]').click();
    cy.get('nb-radio:nth-child(1) [class="inner-circle"]').click();
    cy.get('nb-radio:nth-child(2) [class="inner-circle"]').click();
    cy.get('nb-radio:nth-last-child(1) [class="inner-circle"]').click();
  })
})