/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/

// pair up a combination of numbers, in which the combined sum of all pairs' smallest number is maximized
// for instance, [1,4,3,2] => min(1,2) + min (3,4) = 1 + 3 = 4
// [-5623,-4835,-470,66]

// input: array of size 2n, that means its even length, the lowest is size 2(1) = 2
// output: integer maximized minimum value sum
// are they sorted : probably not
// no edge cases

// stratgey: pair up the biggest numbers together, i,e if their sorted then the pairing will just be, min( array[i], array[i+1]) + ... min(array[n-2], array[n-1])

// the eaisest way is to sorted first

var arrayPairSum = function(nums) {
  // sort it first
    // Time complexity O(nlogn)
    // Space complexity O(n)
  var sorted = nums.sort((a,b)=>a-b);
  var sum = 0;
  for (var i = 0; i < sorted.length; i+=2) {
    sum += Math.min(sorted[i],sorted[i+1]);
  }

  return sum;
};




