 'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');



describe('fizzBuzz', function() {
  it('Should a string' , function() {
    expect(myApp.fizzBuzz(4)).to.be.an('String');
  }) 

})