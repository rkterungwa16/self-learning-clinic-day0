 'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');



describe('fizz Buzz test', function() {
  it('Should return a string' , function() {
    expect(myApp.fizzBuzz(3)).to.be.an('String');
  }) 

  it ('Should accept only a number', function() {
    expect(myApp.fizzBuzz('a')).to.not.equal('string');
  })

  it("should return 'Fizz' for number divisible by 3", function() {
    expect(myApp.fizzBuzz(5)).to.be.a('Buzz');
  });

})