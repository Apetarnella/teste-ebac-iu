/// <reference types = "cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        
        cy.visit ('minha-conta/edit-account/')
        cy.fixture ('perfil').then (login => {
            cy.login (login.usuario, login.senha)
            //é citado o "login" pois nesse projeto que foi criado a "const"
        })
        
    });

    it ('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta ('Amanda', 'Coelho', 'AmandaQa')
        cy.get('.woocommerce-message'). should ('contain', 'Detalhes da conta modificados com sucesso.')
    })

})