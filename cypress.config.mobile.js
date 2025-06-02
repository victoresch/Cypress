const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      config.viewportWidth = 375;
      config.viewportHeight = 812;
      config.defaultCommandTimeout = 10000;
      config.videosFolder = "cypress/videos/mobile";
      config.screenshotsFolder = "cypress/screenshots/mobile";
      
      config.reporterOptions = {
        reportDir: "cypress/report/mobile",
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