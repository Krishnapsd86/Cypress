/// <reference types="Cypress" />

describe("My first login Test",()=>{

    it("Login with valid credentials",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        //cy.viewport()
        cy.title().should("contain","HRM")
        cy.title().should("eq","OrangeHRM")
        cy.url().should("contain","demo")

        cy.get("input[placeholder='Username']").type("Admin").should("have.value","Admin")
        cy.get("input[placeholder='Password']").type("admin123").should("have.value","admin123")
        cy.get("button[type='submit']").should("be.enabled")
        cy.get("button[type='submit']").click()
        cy.title().should("contain","OrangeHRM")


    })
    it("Login with valid credentials",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        //cy.viewport()
       cy.contains("Forgot your password?").click()
       cy.get('.oxd-input').type("Admin")
       cy.get('.oxd-button--secondary').click()
       cy.get('.oxd-text--h6').should("contain","Reset Password link sent successfully")


    })
})