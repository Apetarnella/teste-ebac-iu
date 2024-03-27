/// <reference types = "cypress" />

describe ('funcionalidade: login', () => {

    beforeEach (() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach (() => {
        cy.screenshot()
    });

    it ('Deve fazer login com sucesso', () => { 
        cy.get('#username').type('amanda2024@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, amanda2024 (não é amanda2024? Sair)')
    });

    it ('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('amanda20@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
       // cy.get('.woocommerce-error').should ('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should ('exist')
    });
    it ('Deve ixibir uma mensagem de erro ao inserir senha errada', () => {
        cy.get('#username').type('amanda2024@teste.com.br')
        cy.get('#password').type('teste@000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should ('exist')        
    })
});