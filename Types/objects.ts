
// type person = {
//     first:string,
//     last:string
// }

// type point = {
//     x:number,
//     y:number
// }


// const printName = (Person:person)=>{
//     console.log(`my nanme is ${person.first} ${person.last}`)
// }
// printName({first:'kiran',last:'pant'})

// const coordinates :point={x:4,y:4}

// printName({first:'xy',last:'gg',age:56})
// const another = {first:'xy',last:'gg',age:56}
// printName(another) // only going to check first and last and ignores age

// optional properties
// type names = {
//  a:number,
//  b:number,
//  c?:number
// }

// function dis(Names:names) {
// return Names
    
    
// }
// dis({a:5,b:5})

// read only 
// type User = {
//     readonly id:number,
//     username:string
// }

// const user:User={
//     id:453,
//     username:'kiran'
// }
// // you can not assign again like below code because it read only property
// user.id = 84848


// intersection types
type Circle ={
    radius:number
}
type Colourful = {
    color:string
}

type colourfulCircle = Circle & Colourful