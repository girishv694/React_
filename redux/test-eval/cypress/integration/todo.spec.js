///<reference types="Cypress"/>

describe("todo tests",function(){
    it("goto todos app",function(){
        cy.visit("http://localhost:3000");

        cy.get("input");

    })


    
    it("input box typing",function(){
        cy.get("input").type("change").should("have.value","Learn React");

        cy.get("button").click();
    })
})