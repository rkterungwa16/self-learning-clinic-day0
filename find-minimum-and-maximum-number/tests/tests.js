
'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');



describe('Find Minimum and Maximum', function() {
	it('Should return an array' , function() {
		expect(findMinMax([])).to.be.an('array');
	})
})