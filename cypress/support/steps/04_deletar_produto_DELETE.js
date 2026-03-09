export class DeletarProduto {
  deletarProduto(dados, assert) {
    cy.request({
      method: "DELETE",
      failOnStatusCode: false,
      url: `${Cypress.config("baseUrl")}${dados.endpoint}/${dados.idProduto}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).as("response");
    cy.get("@response").then((res) => {
      console.log(res.body);
      expect(res.status).to.eq(200);
    });
  }
}
