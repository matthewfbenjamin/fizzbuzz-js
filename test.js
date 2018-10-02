var expect = require('chai').expect;
var FizzBuzz = require('./index.js');
require('mocha-sinon')

var TestFizzBuzz

describe('FizzBuzz', function () {
  beforeEach(function () {
    TestFizzBuzz = new FizzBuzz(5);
    this.sinon.stub(console, 'log')
  });
  it('Create a long string', function () {
    let longString = TestFizzBuzz.createResultsQ1(false)
    expect(longString).to.be.equal('1 2 fizz 4 buzz ');
  });
  it ('Should replace all three\'s with lucky', function () {
    let longString = TestFizzBuzz.createResultsQ2(false)
    expect(longString).to.be.equal('1 2 lucky 4 buzz ');
  })
  it('Should log once', function () {
    TestFizzBuzz.createResultsQ2()
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('1 2 lucky 4 buzz ')).to.be.true;
  })
  it('Should add track counts', function () {
    TestFizzBuzz.createResultsQ3(false)
    const countValues = TestFizzBuzz.countValues
    expect(countValues.int).to.equal(3)
    expect(countValues.lucky).to.equal(1)
    expect(countValues.buzz).to.equal(1)
    expect(countValues.fizzbuzz).to.equal(0)
  })
});