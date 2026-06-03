// Declarative function - can be runned in the beginning of the code
function helloOne(){
    console.log("Hello one")
}
helloOne()


//anonymous function - should be run after it is declared
var helloTwo = function(){
    console.log("Hello two")
}

helloTwo()

//ES6 function (arrow function)
var helloThree = () => {
    console.log("Hello three")
}

helloThree()


//function with arguments
function printName(name){
    console.log(name)
}
printName("name")

//function with return
function multiplyByTwo(number){
    var result = number *2
    return result
}
var result = multiplyByTwo(5)
console.log(result)

//import function
import {printAge} from '../lessons/printHelper.js'
printAge(5)


//import everything
import * as helper from '../lessons/printHelper.js'
helper.printAge(10)