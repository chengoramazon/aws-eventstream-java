// Import the displayHelloWorld function
const { displayHelloWorld } = require('../scripts/hello.js');

// Mock the alert and console.log functions
const consoleSpy = jest.spyOn(console, 'log');
const alertSpy = jest.spyOn(window, 'alert');

describe('displayHelloWorld', () => {
  it('should display "hello world" message', () => {
    displayHelloWorld();
    expect(alertSpy).toHaveBeenCalledWith('hello world');
    expect(consoleSpy).toHaveBeenCalledWith('hello world');
  });
});
