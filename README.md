# PROJETO OUTSERA WEB

### Objetivo 
- Este projeto consiste em uma suíte de testes automatizados voltada para a validação de fluxos de API (CRUD), utilizando o framework Cypress. A estrutura foi desenhada seguindo as melhores práticas de organização, separando a lógica de execução (specs) da lógica de negócio e helpers.

### Tecnologias Utilizadas
- JavaScript
- Node.js
- Cypress 14.0.2
- Cucumber (BDD)

### Pré requisito
- Computador com no mínimo 2 cores e 8GB de RAM
- [Nodejs](https://nodejs.org/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- IDE de desenvolvimento [(sugiro o VSCode)](https://code.visualstudio.com/)

### Instalação do Cypress

- Abrir terminal na pasta do projeto:

- Executar o comando `npm install --save-dev cypress`
  

### Executar os testes

- Executar os testes via headless `$ npx cypress run`

- Executar os testes via interface `$ npx cypress open`


### Estrutura de diretórios

api-testes/
├── cypress/
│   ├── e2e/
│   │   └── api/
│   │       ├── 01_criar_produto_POST.spec.js
│   │       ├── 02_listar_produto_GET.spec.js
│   │       ├── 03_atualizar_produto_PUT.spec.js
│   │       └── 04_deletar_produto_DELELE.spec.js
│   ├── fixtures/
│   ├── plugins/
│   │   └── index.js
│   └── support/
│       ├── helpers/
│       │   └── endpoints-env.js
│       ├── steps/
│       │   ├── 01_criar_produto_POST.js
│       │   ├── 02_listar_produto_GET.js
│       │   ├── 03_atualizar_produto_PUT.js
│       │   └── 04_deletar_produto_DELETE.js
│       └── e2e.js
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md                 
