function miniMaxSum(arr) {
  // find min and max
  var max = arr[0];
  for (var num of arr) {
      if (num > max) {
          max = num;
      }
  }

  var min = arr[0];
  for (var num of arr) {
      if (num < min) {
          min = num;
      }
  }

  var minSum = 0;
  var maxSum = 0;
  for (var num of arr) {
      if (num <= max - 1) {
          minSum += num;
      }
      if (num >= min + 1) {
          maxSum += num;
      }
  }

  if (min === max) {
      var sum = arr[0]*(arr.length-1)
      console.log(sum,sum)
  } else {
      console.log(minSum, maxSum);
  }
}
