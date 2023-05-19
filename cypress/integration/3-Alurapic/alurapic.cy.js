//const { it } = require("mocha");

//const { it } = require("mocha");

//const { expect } = require("chai");
//const { it } = require("mocha");

describe('Funcionalidades da tela inicial alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
    })

it('verifica mensagem tela inicial', ()=> {
  cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
  cy.contains('ap-vmessage', 'Password is required').should('be.visible')
  cy.get('button[type="submit"]').should('be.disabled');

})

it('verifica botao habilitado na tela inicial', ()=> {
  cy.get('input[formcontrolname="userName"]').type('Jaqueline')
  cy.get('input[formcontrolname="password"]').type('123')
  cy.get('button[type="submit"]').should('be.enabled');

})

it('verificar nome da aplicacao na tela inicial', ()=> {
  cy.contains('a', 'ALURAPIC').should('be.visible');

})

it('verifica menu clicavel tela inicial', ()=>  {
  cy.get('.navbar-brand > .fa').click();
  cy.get('.menu-bar > .fa').should('be.visible');
})

})


