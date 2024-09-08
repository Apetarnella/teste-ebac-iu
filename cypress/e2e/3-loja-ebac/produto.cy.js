/// <reference types = "cypress" />

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });
    
    
    it('Deve selecionar um produto', () => {
        cy.get('.product-block') // Chama-se classe, do qual possui vários elementos
            //.first() // Quer dizer que vai pegar o primeiro da lista
            //.last() // Quer dizer que vai pegr o último da lista
            //.eq(2) // Pegará o item da lista de forma posicional começando a contar pelo zero
            .contains ('Aether Gym Pant') // Pegará um item específico colocado em (), e pata que pegue o nome, tem que pegar uma classe que emglobe tbm
            .click()
            cy.get('#tab-title-description > a').should ('contain','Descrição') // Para validar que entrou na página
    });

    it ('Deve buscar um produto com sucesso', () => {

    });
    
    it('Deve visitar a página do produo', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
    
});