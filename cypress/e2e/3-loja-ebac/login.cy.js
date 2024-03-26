/// <reference types = "cypress" />

describe ('funcionalidade: login', () => {
    it ('Deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('amanda2024@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, amanda2024 (não é amanda2024?)')
    })
})