/// <reference types ="Cypress"/>

require('cypress-plugin-tab');
require('@4tw/cypress-drag-drop');

describe("Scenario 1 ", () => {

    it('Login Bitsio', () => {
        cy.visit(" https://stage.bitso.com/login ");
        cy.title().should('eq', 'Inicia sesión de manera segura | Bitso');
        cy.log("Ok la funcion la guardo bien");

        cy.get('.styles__Wrapper-bsbe12-0 > .styles__StyledButton-sc-1mfj3x4-1').click();
        cy.get('#client_id').type("marcoantonioquintero1306@gmail.com")
        .tab().type('Challenge-QA1');
        cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-1').click();

        cy.wait(2000);
        //cy.get('.goqqFO').click();

        const crypto = [];

        cy.get('.styles__Currency-go4zwh-4').each(($el,index,$list) => {
            
            crypto[index]=$el.text();
            const curr = $el.text();

            if(curr.includes ("btc")){
                cy.wait(1500);
                cy.wrap($el).click();
                cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click();
                cy.get(':nth-child(1) > [data-testid="picker-item"] > .gPcPFP').click();
                cy.get('body > div:nth-child(29) > div > div.modal.fade.show > div > div > div.Container__StyledContainer-sc-1nmtyg4-0.dfeYKB.FlexContainer__StyledFlex-sc-1thxyji-0.bBtyQA.styles__Header-sc-1yl4qxp-4.fyGpmK > div.styles__ActionButton-sc-1yl4qxp-1.fEsGTW > span.styles__icon-sc-1yl4qxp-7.gUKqnl.moon-x_cross').click({ multiple: true });
            }

            if(curr.includes ("eth")){
                cy.wait(1500);
                cy.wrap($el).click();
                cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click();
                cy.get(':nth-child(1) > [data-testid="picker-item"] > .gPcPFP').click();
                cy.get('body > div:nth-child(29) > div > div.modal.fade.show > div > div > div.Container__StyledContainer-sc-1nmtyg4-0.dfeYKB.FlexContainer__StyledFlex-sc-1thxyji-0.bBtyQA.styles__Header-sc-1yl4qxp-4.fyGpmK > div.styles__ActionButton-sc-1yl4qxp-1.fEsGTW > span.styles__icon-sc-1yl4qxp-7.gUKqnl.moon-x_cross').click({ multiple: true });
            }

            if(curr.includes ("bch")){
                cy.wait(1500);
                cy.wrap($el).click();
                cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click();
                cy.get(':nth-child(1) > [data-testid="picker-item"] > .gPcPFP').click();
                cy.get('body > div:nth-child(29) > div > div.modal.fade.show > div > div > div.Container__StyledContainer-sc-1nmtyg4-0.dfeYKB.FlexContainer__StyledFlex-sc-1thxyji-0.bBtyQA.styles__Header-sc-1yl4qxp-4.fyGpmK > div.styles__ActionButton-sc-1yl4qxp-1.fEsGTW > span.styles__icon-sc-1yl4qxp-7.gUKqnl.moon-x_cross').click({ multiple: true });
            }

            if(curr.includes ("dai")){
                cy.wait(1500);
                cy.wrap($el).click();
                cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click();
                cy.get(':nth-child(1) > [data-testid="picker-item"] > .gPcPFP').click();
                cy.get('body > div:nth-child(29) > div > div.modal.fade.show > div > div > div.Container__StyledContainer-sc-1nmtyg4-0.dfeYKB.FlexContainer__StyledFlex-sc-1thxyji-0.bBtyQA.styles__Header-sc-1yl4qxp-4.fyGpmK > div.styles__ActionButton-sc-1yl4qxp-1.fEsGTW > span.styles__icon-sc-1yl4qxp-7.gUKqnl.moon-x_cross').click({ multiple: true });
            }

            if(curr.includes ("xrp")){
                cy.wait(1500);
                cy.wrap($el).click();
                cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click();
                cy.get(':nth-child(1) > [data-testid="picker-item"] > .gPcPFP').click();
                cy.get('body > div:nth-child(29) > div > div.modal.fade.show > div > div > div.Container__StyledContainer-sc-1nmtyg4-0.dfeYKB.FlexContainer__StyledFlex-sc-1thxyji-0.bBtyQA.styles__Header-sc-1yl4qxp-4.fyGpmK > div.styles__ActionButton-sc-1yl4qxp-1.fEsGTW > span.styles__icon-sc-1yl4qxp-7.gUKqnl.moon-x_cross').click({ multiple: true });
            }

            if(curr.includes ("mana")){
                cy.wait(1500);
                cy.wrap($el).click();
                cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click();
                cy.get(':nth-child(1) > [data-testid="picker-item"] > .gPcPFP').click();
                cy.get('body > div:nth-child(29) > div > div.modal.fade.show > div > div > div.Container__StyledContainer-sc-1nmtyg4-0.dfeYKB.FlexContainer__StyledFlex-sc-1thxyji-0.bBtyQA.styles__Header-sc-1yl4qxp-4.fyGpmK > div.styles__ActionButton-sc-1yl4qxp-1.fEsGTW > span.styles__icon-sc-1yl4qxp-7.gUKqnl.moon-x_cross').click({ multiple: true });
            }

        })
        
    });


})