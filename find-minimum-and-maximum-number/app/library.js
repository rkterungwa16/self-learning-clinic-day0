'use strict'

module.exports = {
 
  findMinMax: function (arr) {
  	var minMaxArray = [];
  	if (arr.length === 0) {
  		return [];
  	}
 	minMaxArray.push(arr[0]);
 	minMaxArray.push(arr[1]);
	return minMaxArray;
  }
}
