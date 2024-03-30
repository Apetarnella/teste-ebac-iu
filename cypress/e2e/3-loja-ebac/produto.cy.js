/// <reference types = "cypress" />

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    
    it('Deve selecionar um produto', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            .eq(2)
            .contains ('Aether Gym Pant')
            .click()

            cy.get('#tab-title-description > a').should ('contain','Descrição')

    });

});