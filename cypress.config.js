const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dsfn88',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
