import { ReportAggregator } from "wdio-html-nice-reporter";
let reportAggregator = new ReportAggregator();
export const config = {
  runner: "local",
  specs: ["../test/specs/**/*.js"],
  maxInstances: 2,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["headless", "disable-gpu"],
      },
    },
    {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost:8080",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver", "geckodriver"],
  framework: "mocha",
  reporters: [
    [
      "spec",
      {
        addConsoleLogs: true,
      },
    ],
    [
      "html-nice",
      {
        debug: false,
        outputDir: "./reports/html-reports/",
        filename: "report.html",
        reportTitle: "Web Test Report",
        showInBrowser: false,
        useOnAfterCommandForScreenshot: false,
        linkScreenshots: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    retries: 2,
  },
  onPrepare: function (config, capabilities) {
    reportAggregator = new ReportAggregator({
      outputDir: "./reports/html-reports/",
      filename: process.env.TEST_BROWSER + "-master-report.html",
      reportTitle: "Micro-Magic Web Test Report",
      browserName: process.env.TEST_BROWSER
        ? process.env.TEST_BROWSER
        : "unspecified",
      showInBrowser: true,
    });
    reportAggregator.clean();
  },
  before: function (capabilities, specs) {
    browser.setWindowSize(1920, 1080);
  },
  onComplete: async function (exitCode, config, capabilities, results) {
    await reportAggregator.createReport();
  },
};
