// // number, string , boolean , null , undefined , Nan , BigInt , Infinity , Symbol // Примитивы
// // object , array , function
// let user = {
//     name: "Alex",
//     age: 23,
//     isStudent: true
//     //........
// } // #345
//
//
// let newUser = user
//
// newUser.name = "Bob"
// console.log(user)
//
// //  user => copy user => change copy of user => use copy  of user with changes
//
// // let copyUser = {} //# 007
// //
// // copyUser.name = user.name
// // copyUser.age  = user.age
// // copyUser.isStudent  = user.isStudent
//
//
// const copyUser = {...user} // object.assign(), JSON
// console.log(copyUser === user) // false
//
// const users = [
//     {
//         name: "Bob",
//         friends: ["Alex",]
//     },
//
//     {
//         name: "Alex",
//         friends: ["Nick","Bob"]
//     },
//     {
//         name: "Nick",
//         friends: ["Bob"]
//     },
//     {
//         name: "Ann",
//         friends: ["Nick", "Bob"]
//     },
//     // {name: "Donald"},
// ]
// // const copyUsers =  [... users, {name: "Donald"}]
// // console.log(copyUsers)
//
//
// const  copyUser = [...user] // Поверхностная копия
// const  deepCopyUsers = users.map(u => ({...u, friends: [...u.friends]})) // глубокая копия
// const addFr = user.map(u => u.name)
