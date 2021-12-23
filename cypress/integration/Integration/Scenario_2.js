/// <reference types ="Cypress"/>

require('cypress-plugin-tab');
require('@4tw/cypress-drag-drop');

    describe("Scenario 2 ", () => {

            it('Login Bitsio', () => {
                cy.visit(" https://stage.bitso.com/login ");
                cy.title().should('eq', 'Inicia sesión de manera segura | Bitso');

                cy.get('.styles__Wrapper-bsbe12-0 > .styles__StyledButton-sc-1mfj3x4-1').click();
                cy.get('#client_id').type("marcoantonioquintero1306@gmail.com")
                .tab().type('Challenge-QA1');
                cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-1').click();

                cy.wait(2000);

                cy.visit("https://stage.bitso.com/r/user/beneficiaries/add");
            

                cy.wait(2000);

                cy.get('[data-testid="add-beneficiary-button"]').click({force:true});

                cy.wait(1500);

                cy.get('#first_name').type("Pepito")
                .tab().type("Perez")
                .tab().type("Garcia")
                .tab().type("13").type("{enter}")
                .tab().type("Jun").type("{enter}")
                .tab().type("1996").type("{enter}");

                cy.get(':nth-child(5) > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5 > .css-tdzd0p').contains("Español MX").click();
                cy.wait(1500);

                cy.get('.gLhA-DK > .css-m0do4z > .css-16ljna5 > .css-tdzd0p').click();
                cy.get('div.css-a6evln').contains("Conocido").click();
                cy.get('#percentage').type("9");
                cy.get('[data-testid="add-beneficiary-button"]').click();

                cy.wait(1000);

                cy.get('#pin').type('HOLAPIN123');
                cy.get('.RYPaC').click();
            
            })


    })


