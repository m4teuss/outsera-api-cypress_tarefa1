import { EndpointsApi } from "../../support/helpers/endpoints-env.js";
const endpoint = new EndpointsApi();

import { DeletarProduto } from "../../support/steps/04_deletar_produto_DELETE.js";
const deletarProduto = new DeletarProduto();

describe("Remoção de Produto", () => {
  it("001 - delelar novo produto", () => {
    var dados = {
      endpoint: endpoint.endponitProdutos(),
      idProduto: "1",
    };
    var assert = {
      status: "200",
    };
    deletarProduto.deletarProduto(dados, assert);
  });
});
