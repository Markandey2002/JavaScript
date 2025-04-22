const tinderUssr = new Object()
tinderUssr.id = 123
tinderUssr.name = "Tinder"
tinderUssr.isLoggedIn = false

// console.log(tinderUssr)

const regularUser = {
    email: "V5B1d@example.com",
    fullName: {
        user: {
            firstName: "Mark",
            lastName: "Zuckerberg"
        }
    }
}
//console.log(regularUser.fullName.user.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {obj1, obj2} this will giive object inside the object just like array inside an array
//console.log(obj3)
//const obj3  = Object.assign({},obj1, obj2) //{} this is use to return a seperate object if we reove this then all the object will be assign to obj1
const obj3 = {...obj1, ...obj2}
//console.log(obj3)

// From database value come in form of object inside array

const users = [
    {userId: 1, email: "V5B1d@example.com"},
    {userId: 2, email: "V5B1d@example.com"},
    {userId: 3, email: "V5B1d@example.com"},
    {userId: 4, email: "V5B1d@example.com"}
]

console.log(Object.values(users))