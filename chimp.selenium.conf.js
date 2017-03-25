module.exports = {
    // - - - - CHIMP - - - -
    watch: true,
    watchTags: '@watch,@focus',
    domainSteps: null,
    e2eSteps: null,
    fullDomain: false,
    domainOnly: false,
    e2eTags: '@e2e',
    watchWithPolling: false,
    server: false,
    serverPort: 8060,
    serverHost: 'localhost',
    sync: true,
    offline: false,
    showXolvioMessages: true,

    // - - - - GULP CHIMP - - - -
    singleRun:  true,

    // - - - - CUCUMBER - - - -
    path: './tests/features',
    format: 'pretty',
    tags: '~@ignore',
    singleSnippetPerFile: true,
    recommendedFilenameSeparator: '_',
    chai: false,
    screenshotsOnError: true,
    screenshotsPath: './e2e_output/screenshots',
    captureAllStepScreenshots: false,
    saveScreenshotsToDisk: true,
    saveScreenshotsToReport: true,
    jsonOutput: './e2e_output/cucumber.json',
    conditionOutput: true,

    // - - - - CUCUMBER REPORT - - - -
    htmlReport: true,
    theme: 'bootstrap',
    jsonFile: './e2e_output/cucumber.json',
    output: './e2e_output/report/cucumber.html',
    reportSuiteAsScenarios: true,
    launchReport: true,

    // - - - - SELENIUM  - - - -
    browser: 'chrome',
    platform: 'MAC',
    name: '',
    user: '',
    key: '',
    //port: Math.floor(Math.random() * 8000) + 1000,
    //host: null,
    port: 4444,
    host: null,

    // - - - - SAUCELABS - - - -
    // user: "",
    // key: "",
    // port: 80,
    // host: "ondemand.saucelabs.com",

    // - - - - SESSION-MANAGER  - - - -
    noSessionReuse: false,

    // - - - - MOCHA  - - - -
    mocha: false,
    // path: './source/e2e',
    mochaTags: '',
    mochaGrep: null,
    mochaTimeout: 60000,
    mochaReporter: 'spec',
    mochaSlow: 10000,

    // - - - - PHANTOM  - - - -
    phantom_w: 1280,
    phantom_h: 1024,

    // - - - - DEBUGGING  - - - -
    log: 'info',
    debug: false,
    seleniumDebug: true,
    debugCucumber: null,
    debugBrkCucumber: null,
    debugMocha: null,
    debugBrkMocha: null
};
