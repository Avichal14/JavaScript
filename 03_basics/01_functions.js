// functions in javaScript

// no work on 02 sept

// still not done anything on 03 sept

function sayMyName(){
    console.log("AVICHAL");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }


function addTwoNumber(number1, number2){
    // let result=number1+number2
    // return result
    // return number1+number2
}



const result= addTwoNumber(3,"4")
// console.log("Result " , result);


function loginUserMessage(username = "Sam Curran"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Avichal"));
// console.log(loginUserMessage("Avichal"));

function calculateCartPrice(...num1){ // ... <- this is the rest operator 
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username :"avichal",
    price : 99
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:99
})