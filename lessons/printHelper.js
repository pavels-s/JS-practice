export function printAge(age){
    console.log(age)
}

class CustomerDetails {

    printFirstName(firstName){
    /**
    * this method will print first name
    * @param {string} firstName 
    */
        console.log(firstName)
    }

}

export const customerDetails = new CustomerDetails()