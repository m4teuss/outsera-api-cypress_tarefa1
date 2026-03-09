import { EndpointsApi } from "../../support/helpers/endpoints-env.js";
const endpoint = new EndpointsApi();

import { AtualizarProduto } from "../../support/steps/03_atualizar_produto_PUT.js";
const atualizarProduto = new AtualizarProduto();

import { ListarProduto } from "../../support/steps/02_listar_produto_GET.js";
const listarProduto = new ListarProduto();

describe("Atualização de Produto", () => {
  it("001 - Atualizar um produto", () => {
    var dados = {
      endpoint: endpoint.endponitProdutos(),
      idProduto: "1",
      title: "teste",
      price: "teste",
      description: "teste",
      category: "teste",
    };
    var assert = {
      status: "200",
      id: 1,
      title: "teste",
      price: "teste",
      description: "teste",
      category: "teste",
    };
    atualizarProduto.atualizarProduto(dados, assert);
  });

  // ### Esse cenário na teoria era pra funcionar, mas essa API por padrão reseta os valores.

  //   it("002 - Listar produto atualizado", () => {
  //     var dados = {
  //       endpoint: endpoint.endponitProdutos(),
  //       idProduto: "1",
  //     };
  //     var assert = {
  //       status: "200",
  //       id: 2,
  //       title: "teste",
  //       price: "teste",
  //       description: "teste",
  //       category: "teste",
  //     };
  //     listarProduto.listarProduto(dados, assert);
  //   });
});
