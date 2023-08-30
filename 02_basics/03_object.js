// Singleton
// Object.create

// objct literals

const mySym = Symbol("Key1")

const JsUser={
    name:"Avichal",
    "fullname" :"Avichal Kumar ",
    [mySym] : "myKey1",
    age:22,
    location: "Kanpur",
    isLoggedIn: false,
    email: "avichal.bharti14@gmail.com",

}

// to access ement
// console.log(JsUser.email); 
// console.log(JsUser["email"]); 
// console.log(JsUser["fullname"]); 
// console.log(JsUser["fullname"]); 
// console.log( JsUser[mySym]); 

// JsUser.email= "avichal@chatgpt.com"

// Object.freeze(JsUser)

// JsUser.email ="avichal@ms.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());