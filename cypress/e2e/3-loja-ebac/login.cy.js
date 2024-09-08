/// <reference types = "cypress" />

const perfil = require ('../../fixtures/perfil.json') 
//para usar a fixtures de massa de dados precisa criar uma const

describe ('funcionalidade: login', () => {

    beforeEach (() => {
        cy.visit ('minha-conta')
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
        //cy.get('.woocommerce-error').should ('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should ('exist')
    });
    it ('Deve ixibir uma mensagem de erro ao inserir senha errada', () => {
        cy.get('#username').type('amanda2024@teste.com.br')
        cy.get('#password').type('teste@000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should ('exist')        
    });

    it ('Deve fazer login com sucesso - Usando massa de teste', () => {
        cy.get('#username').type(perfil.usuário)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, amanda2024 (não é amanda2024? Sair)')
    
    });


    it ('Deve fazer login com sucesso - Usando Fixture', () => { 
        cy.fixture ('perfil').then (dados => {
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.wait(5000)
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'amanda2024AmandaQa (não é amanda2024AmandaQa? Sair)')
            // é a mesma coisa do teste acima, porém em formato de fixture  
            // o log false faz com que o dado saia mascarado no teste)    
        
        })

    });

    it.only('Deve fazer login com sucesso - Usando comandos customizados', () => {
        cy.login ('amanda2024@teste.com', 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'amanda2024AmandaQa (não é amanda2024AmandaQa? Sair)')
        //Esse comando é colocado no Support e commands, do qual vai possibilitar diminuir a quantidade de passos deixando o código mais limpo
        
    });

        })
    