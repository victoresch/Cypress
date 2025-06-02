const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      config.viewportWidth = 1280;
      config.viewportHeight = 720;
      config.defaultCommandTimeout = 10000;
      config.videosFolder = "cypress/videos/desktop";
      config.screenshotsFolder = "cypress/screenshots/desktop";
      
      config.reporterOptions = {
        reportDir: "cypress/report/desktop",
        charts: true,
        embeddedScreenshots: true
      };

      return config;
    },
    baseUrl: 'https://automationteststore.com',
    reporter: 'cypress-mochawesome-reporter',
    video: true
  }
});