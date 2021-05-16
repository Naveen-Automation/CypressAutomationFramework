/********************************************************************************************************
Description: To load test data json file in the test script
Parameters: test data file name
*********************************************************************************************************/
Cypress.Commands.add("LoadTestDataFile", fileName => {
    cy.fixture(fileName).then(function (data) {
        globalThis.data = data
    })
})
