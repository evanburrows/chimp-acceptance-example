//const expect = require('chai-nightwatch').expect;

module.exports = {

  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

   'Does not show the task list if there are no tasks': function(browser) {
       browser
           .url('http://todomvc.com/examples/angularjs/#/')
           .waitForElementVisible('#header h1', 1000)
           .assert.hidden('#main')
           //.expect.element('#main').to.not.be.visible;
           .end();
   },
   'Does not show the footer if there are no tasks': function(browser) {
       browser
           .url('http://todomvc.com/examples/angularjs/#/')
           .waitForElementVisible('#header h1', 1000)
           .assert.hidden('#footer')
           .end();
   },
   'Does initially focus on the input field': function(browser) {
       browser
           .url('http://todomvc.com/examples/angularjs/#/')
           .waitForElementVisible('#header h1', 1000)
           .assert.elementPresent('#header #new-todo:focus')
           .end();
   },
   'Shows todo items': function(browser) {
       browser
           .url('http://todomvc.com/examples/angularjs/#/')
           .waitForElementVisible('#header h1', 1000)
           .setValue('#new-todo', 'My new task')
           .submitForm('#todo-form')
           .assert.containsText('#todo-list li:first-child label', 'My new task')
           .end();
   },
};
