import { EndpointsApi } from "../../support/helpers/endpoints-env.js";
const endpoint = new EndpointsApi();

import { ListarProduto } from "../../support/steps/02_listar_produto_GET.js";
const listarProduto = new ListarProduto();

describe("Listagem de Produto", () => {
  it("001 - Listar um produto", () => {
    var dados = {
      endpoint: endpoint.endponitProdutos(),
      idProduto: "1",
    };
    var assert = {
      status: "200",
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "men's clothing",
    };
    listarProduto.listarProduto(dados, assert);
  });
});
