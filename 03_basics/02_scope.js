

let a=300;
if(true){

    let a=10;
    const b=20;
    // var c=30;
    // console.log(a);
}


// console.log(a);
// console.log(b);
// console.log(c); // this will return value its has largest scope
// var should be avoided 


// Nested scope

function one(){
    const username = "avichal"

    function two(){
        const website = "udemy"
        // console.log(username);

    }
    // console.log(website);
    two()
}

one()

console.log(addone(5))

function addone(num){
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num +2
}
