//logical 'and'
console.log(true && true) //all values have to be true for expression to be true

//logical "or"
console.log(true || false) //any falue should be true for expression to be true

var ageIsMoreThanEighteen = false
var USCitizen = true
var eligibilityForDL = ageIsMoreThanEighteen && USCitizen
console.log('Customer is eligible for driving license: ' + eligibilityForDL)