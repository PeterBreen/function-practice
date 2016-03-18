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

//problem 3 - sum and multiply function.
var sumAndMultiply = function(samNumber1, samNumber2, samNumber3) {
  samSum = sum(sum(samNumber1, samNumber2), samNumber3);
  samProduct = multiply((multiply(samNumber1, samNumber2)), samNumber3);
  console.log(samNumber1 + ' and ' + samNumber2 + ' and ' + samNumber3 + ' sum to ' + samSum + '.');
  console.log('The numbers ' + samNumber1 + ' and ' + samNumber2 + ' and ' + samNumber3 + ' have a product of ' + samProduct + '.');
  return {sum: samSum, product: samProduct};
};

//problem 4 - sum of an array
var sumArray = function(inputSumArray) {
  var outputSum = 0;
  for (var i = 0; i < inputSumArray.length; i++) {
    outputSum += inputSumArray[i];
  }
  console.table(inputSumArray);
  console.log(inputSumArray + ' was passed in as an array of numbers and ' + outputSum + ' is their sum.');
};

//problem 5 - product of an array
var multiplyArray = function(inputProductArray) {
  var outputProduct = 1;
  for (var i = 0; i < inputProductArray.length; i++) {
    outputProduct *= inputProductArray[i];
  }
  console.table(inputProductArray);
  console.log('The numbers ' + inputProductArray + ' have a product of ' + outputProduct + '.');
};
