//problem 1 - sum function
var sum = function(sumNumber1, sumNumber2) {
  sumTotal = sumNumber1 + sumNumber2;
  return sumTotal;
  //console.log('The sum of ' + sumNumber1 + ' and ' + sumNumber2 + ' is ' + sumTotal + '.');
};

//problem 2 - multiply function
var multiply = function(multiplyNumber1, multiplyNumber2) {
  multiplyTotal = multiplyNumber1 * multiplyNumber2;
  return multiplyTotal;
  //console.log('The product of ' + multiplyNumber1 + ' and ' + multiplyNumber2 + ' is ' + multiplyTotal + '.');
};

//problem 3 - sum and multiply function. comments out console log for sum() and multiply()
var sumAndMultiply = function(samNumber1, samNumber2, samNumber3) {
  samSum = sum((sum(samNumber1, samNumber2)), samNumber3);
  samProduct = multiply((multiply(samNumber1, samNumber2)), samNumber3);
  console.log(samNumber1 + ' and ' + samNumber2 + ' and ' + samNumber3 + ' sum to ' + samSum + '.');
  console.log('The numbers ' + samNumber1 + ' and ' + samNumber2 + ' and ' + samNumber3 + ' have a product of ' + samProduct + '.');
  return [samSum, samProduct];
};

//problem 4 - sum of an array
var sumArray = function(inputSumArray) {
  var outputSumArray = 0;
  console.table(inputSumArray);
  for (var i = 0; i < inputSumArray.length; i++) {
    outputSumArray += inputSumArray[i];
  }
  console.log(inputSumArray + ' was passed in as an array of numbers and ' + outputSumArray + ' is their sum.');
};
