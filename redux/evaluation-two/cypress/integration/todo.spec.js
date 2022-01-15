///<reference types="Cypress"/>

describe("todo list",function(){
    it("goto todo app",function(){
        cy.visit("http://localhost:3000/")
    })
})