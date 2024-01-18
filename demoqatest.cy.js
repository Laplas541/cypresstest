describe('demoqa text box', () => {
  it('submit a form', () => {
    cy.visit('https://demoqa.com')
    cy.contains('Elements').click();
    cy.get('#item-0').first().click();
    cy.get('#userName').type('John Doe');
    cy.get('#userEmail').type('Test@example.com');
    cy.get('#currentAddress').type('8013 East Windfall Street Crystal Lake, IL 60014');
    cy.get('#permanentAddress').type('251 Park Rd. North Kingstown, RI 02852');
    cy.contains('Submit').click();
  })
})