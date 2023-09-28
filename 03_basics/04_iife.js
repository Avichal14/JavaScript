//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();


// ()//function definiton()//excution
( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('avichal')