//const cypress = require("cypress");
//const { describe } = require("mocha");

//descrever os casos de testes
describe('Buscar fotos e dados', ()=>  {

    //caso de teste
it('buscar fotos do flavio', ()=>  {
        //para fazer uma requisição cy.request
    cy.request({
            method: 'GET',
            url:'https://apialurapic.herokuapp.com/flavio/photos',

            //then=quando eu fizer essa requisição quero na res as informações abaixo
}).then((res)=> {
    expect(res.status).to.be.equal(200)
    expect(res.body).is.not.empty
    expect(res.body[0]).to.have.property('description')
    expect(res.body[0].description).to.be.equal('Farol iluminado')
}
)

})

it.only('fazer login do flavio', ()=>  {
    cy.request({
            method: 'POST',
            url:'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
}).then((res)=> {
    expect(res.status).to.be.equal(200)
    expect(res.body).is.not.empty
    expect(res.body).to.have.property('id')
    expect(res.body.id).to.be.equal(1)
    expect(res.body).to.have.property('email')
    expect(res.body.email).to.be.equal("flavio@alurapic.com.br")
})

})

})
describe('Login de usuarios alura pic', () => {

it('fazer login de usuario valido', () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'));
    cy.contains('a', '(Logout)').should('be.visible');  

})
})
