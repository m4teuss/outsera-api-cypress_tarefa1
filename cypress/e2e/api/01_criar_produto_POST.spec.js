import { EndpointsApi } from "../../support/helpers/endpoints-env.js";
const endpoint = new EndpointsApi();

import { CriarProduto } from "../../support/steps/01_criar_produto_POST.js";
const criarProduto = new CriarProduto();

describe("Criacao de Produto", () => {
  it("001 - Criar novo produto", () => {
    var dados = {
      endpoint: endpoint.endponitProdutos(),
      title: "Fone de Ouvido OUTSERA",
      price: "20",
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "Acessórios",
    };
    var assert = {
      status: 201,
      id: 21,
      title: "Fone de Ouvido OUTSERA",
      price: "20",
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "Acessórios",
    };
    criarProduto.criarProduto(dados, assert);
  });

  it("002 - Criar produto sem preencher o titulo", () => {
    var dados = {
      endpoint: endpoint.endponitProdutos(),
      title: "",
      price: "20",
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "Acessórios",
    };
    var assert = {
      status: 201,
      id: 21,
      title: "",
      price: "20",
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "Acessórios",
    };
    criarProduto.criarProduto(dados, assert);
  });

  it("003 - Criar produto sem preencher o preço", () => {
    var dados = {
      endpoint: endpoint.endponitProdutos(),
      title: "Fone de Ouvido OUTSERA",
      price: "",
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "Acessórios",
    };
    var assert = {
      status: 201,
      id: 21,
      title: "Fone de Ouvido OUTSERA",
      price: "",
      description: "O fone de Ouvido OUTSERA é muito bom",
      category: "Acessórios",
    };
    criarProduto.criarProduto(dados, assert);
  });
});
