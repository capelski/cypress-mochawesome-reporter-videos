const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
  },
  e2e: {
    setupNodeEvents: (on) => {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/tests/**/*.cy.js',
    video: true,
  },
});
