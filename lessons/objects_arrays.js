//objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Volvo", "Toyota", "Tesla"]
}

console.log(customer)
console.log(customer['lastName'])

customer.lastName = "Dowe"
console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)


//arrays (list of items)
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car[0])
console.log(customer.cars[0])