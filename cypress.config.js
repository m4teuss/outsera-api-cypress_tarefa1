const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://fakestoreapi.com", // URL base projeto
    specPattern: "cypress/e2e/**/*.js",
  },
});
