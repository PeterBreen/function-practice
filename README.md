# function-practice
cf201 lab for march 18, 2016

This repo contains an index.html and an app.js which allows for the following functions to be run through the developer console when viewing index.html in your browser. Detailed descriptions of each function are below.

* sum()
* multiply()
* sumAndMultiply()
* sumArray()
* multiplyArray()

## Functions available
###sum(n1,n2)
sum() takes two numbers, n1 and n2, as parameters and returns the summed total of both. Note that this function was modified for sumAndMultiply - console.log for this function is commented out.

__Example:__
`sum(4,7)` will console.log "The sum of 4 and 7 is 11."

###multiply(n1,n2)
multiply() takes two numbers, n1 and n2, as parameters, and returns the multiplied total (the product) of both. Note that this function was modified for sumAndMultiply - console.log for this function is commented out.

__Example:__
`multiply(4,7)` will console.log "The product of 4 and 7 is 28."

###sumAndMultiply(n1,n2,n3)
sumAndMultiply() takes three numbers, (n1, n2, n3) as parameters, and returns both the sum of all three and the product of all three in an array, sumAndMultiplyArray. It will also console.log both the sum and the product.

__Example:__
`sumAndMultiply(4,5,6)` will console.log "4 and 5 and 6 sum to 15." and "The numbers 4 and 5 and 6 have a product of 120." as well as returning an array consisting of [sum, product] - e.g. `[15, 120]`

###sumArray([n1,n2, ... nX])
sumArray() takes a single array of numbers as a parameter and console.tables the array, adds the values of each index in the array together, and reports the summed total via console.log.

__Example:__
`sumArray([1,2,3,4,5])` will return a console.table of [1,2,3,4,5] as well as console.logging "1,2,3,4,5 was passed in as an array of numbers and 15 is their sum."

###multiplyArray([n1, n2, ... nX])
multiplyArray() takes a single array of numbers as a parameter and console.tables the array, and then console.logs the product of the values in the array.

__Example:__
`multiplyArray([2,3,4,5])` will return a console.table of [2,3,4,5] as well as console.logging "The numbers 2,3,4 have a product of 24."
