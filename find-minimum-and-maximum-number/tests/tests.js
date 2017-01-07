
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

  it('should return [4, 6] for [6, 4]', function () {
    expect(myApp.findMinMax([6, 4])).to.eql([4, 6]);
  });

  it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
    expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.eql([2, 78]);
  });

})

describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(myApp.findMinMax([4, 4, 4, 4])).to.eql([4]);
    });

})