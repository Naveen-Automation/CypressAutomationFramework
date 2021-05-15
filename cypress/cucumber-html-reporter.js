var reporter = require('cucumber-html-reporter');
var options = {

    theme: 'bootstrap',
    jsonFile: 'cypress/results/cucumber/cucumber-json',
    output: 'cypress/results/cucumber/cucumber_html/cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    Environment_Details: {
        "Website Name": "www.johnlewis.com",
        "Test Environment": "QA",
        "Browser": "Chrome  90",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};
reporter.generate(options);