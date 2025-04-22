function calculateCartPrice(...num1) { // ... is a rest operator
    return num1
}
//console.log(calculateCartPrice(200, 300, 400, 500, 600))

const user = {
    name: "Mark",
    age: 30,
    email: "V5B1d@example.com",
    location: "New York"
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.name} and age is ${anyobject.age}`)

}
handleObject(user)

const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))    