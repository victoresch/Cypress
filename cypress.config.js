const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const isMobile = config.env.VIEWPORT === 'mobile';
      
      // Configuración dinámica del viewport
      config.viewportWidth = isMobile ? 375 : 1280;
      config.viewportHeight = isMobile ? 812 : 720;
      config.defaultCommandTimeout = 10000;
      
      // Configuración del reporter
      const reportDir = config.env.VIEWPORT || 'default';
      config.reporterOptions = {
        reportDir: `cypress/report/${reportDir}`,
        overwrite: false,
        html: true,
        json: true,
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false
      };

      // Configuración de videos y screenshots
      on('before:run', async (details) => {
        console.log("Running tests in", isMobile ? "MOBILE" : "DESKTOP", "mode");
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        await afterRunHook();
      });

      return config;
    },

    baseUrl: 'https://automationteststore.com',
    reporter: 'cypress-mochawesome-reporter',
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32
  }
});