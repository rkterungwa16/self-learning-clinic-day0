
'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');



describe('Find Minimum and Maximum', function() {
	it('Should return an array' , function() {
		expect(myApp.findMinMax([])).to.be.an('array');
	})

  it('Should expect an empty array to return empty', function() {
    expect(myApp.findMinMax([])).to.be.empty;
  })

  it('Element of array should be a number', function() {
    expect(myApp.findMinMax([1])[0]).to.be.a('Number');
  })

  it('Should return an array length of at most 2', function() {
    expect(myApp.findMinMax([1,3,4,5])).to.have.length.of.at.most(2);
  })

  it('should return [1,4] for [1, 2, 3 , 4]', function () {
    expect(myApp.findMinMax([1, 2, 3, 4])).to.eql([1, 4]);
  });
})