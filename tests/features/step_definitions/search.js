module.exports = function() {
 
  this.Given(/^I have visited Google$/, function () {
    // Write code here that turns the phrase above into concrete actions
    browser.url('http://google.com'); // SETUP
    //expect(browser.getTitle()).to.equal('Google'); // VERIFY
    //return this.browser.url('http://google.com')
  });

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    // Write code here that turns the phrase above into concrete actions
    return this.browser.setValue('input[name="q"]', searchTerm)
      .keys(['Enter'])
  });

  this.Then(/^I see "([^"]*)"$/, function (link) {
    // Write code here that turns the phrase above into concrete actions
    //this.browser.waitForExist('a=' + link);
    const elements = client.elements('a')
    const element = elements.value[1]
    //console.log(elements)
    console.log(element)
    //client.moveTo(element.ELEMENT)
    //client.elementIdClick(element.value)
    //this.browser.elementIdClick(element.ELEMENT);
    //return this.browser.waitForExist('a=' + link);

    //var details = browser.gridProxyDetails(proxyId)
    //console.log(details);
  });
}
