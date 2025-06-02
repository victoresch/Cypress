const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const isMobile = config.env.viewport === 'mobile';
      config.defaultCommandTimeout = 10000;
      config.viewportWidth = isMobile ? 375 : 1280;
      config.viewportHeight = isMobile ? 812 : 720;

      return config;
    },
    baseUrl: 'https://automationteststore.com'
    }
});
