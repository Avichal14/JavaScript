const user={
    username: "avichal",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to our website`);
        console.log(this);
    }

}

// user.welcomeMessage()

// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username="avichal"
    console.log(this);
}

// chai()


// arrow funtion
// const addtwo=(num1,num2)=>{
//     return num1+num2;
//  }

// console.log(addtwo(3,4));

//. implicit funciotn
// const addtwo=(num1,num2)=>  num1+num2;
// const addtwo=(num1,num2)=>  (num1+num2);
const addtwo=(num1,num2)=>  ({username:"avichal"});
 

console.log(addtwo(3,4));



// const myArray=[2,3,4,5,6];
// myArray.forEach
