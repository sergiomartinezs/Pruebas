describe("test suite - conjunto de pruebas", () => {
    // esto valida pag d inicio
    beforeEach(() => {
        cy.visit("http://zero.webappsecurity.com/index.html")

    })
    it("Validar pag inicio", () => {
        // get es localizar o buscar
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom > h4').contains("Online Bank")
    })


    it("transferencia fondos", () => {
        cy.get("#signin_button").click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("345")
        cy.get('#tf_description').type("Demo")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should("be.visible")
        cy.get('.alert').contains("You successfully submitted your transaction.")


    })
    // ONLY PARA CORRER SOLO UNA PRUEBA

    it("Prueba de validacion grafico 3", () => {
        cy.get("#signin_button").click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1800 > tspan').click()
    })


})