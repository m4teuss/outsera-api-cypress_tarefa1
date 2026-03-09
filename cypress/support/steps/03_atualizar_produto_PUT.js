export class AtualizarProduto {
  atualizarProduto(dados, assert) {
    cy.request({
      method: "PUT",
      failOnStatusCode: false,
      url: `${Cypress.config("baseUrl")}${dados.endpoint}/${dados.idProduto}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        category: dados.category,
        description: dados.description,
        title: dados.title,
        price: dados.price,
        id: dados.id,
      },
    }).as("response");
    cy.get("@response").then((res) => {
      console.log(res.body);
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id", assert.id);
      expect(res.body).to.have.property("title", assert.title);
      expect(res.body).to.have.property("price", assert.price);
      expect(res.body).to.have.property("category", assert.category);
    });
  }
}
