describe("happy path para web empleados", () => {
    // esto valida pag d inicio
    beforeEach(() => {
        cy.visit("https://testing1.geekqa.net/")

    })
    it("happy path rellenar datos", () => {
        cy.get('#name').type("juanito maravilla")
        cy.get('#age').type("ruiseñor")
        cy.get('#dob').type("1997-01-31")
        cy.get('button').click()
    })
})