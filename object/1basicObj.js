const user = {
    name: "Mark",
    age: 30,
    email: "V5B1d@example.com",
    location: "New York"
}
console.log(user.age)
console.log(user ["email"])

user.email = "Mark@google.com"
console.log(user ["email"])


user.greetint = function(){
    console.log(`Hello User, ${this.name}`)
}
console.log(user.greetint())