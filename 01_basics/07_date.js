
// //date
// let myDate= new Date()
// // console.log(myDate.toString());
// console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// // let myCreateDate= new Date(2023,0,23)
// // console.log((myCreateDate.toDateString()));


// // let mydate= new Date("2023-04-23")
// let mydate= new Date("08-29-2023")
// // console.log(mydate.toLocaleString());

// let myTimeStamp= Date.now()
// // console.log(myTimeStamp);
// // console.log(mydate.getTime());


// console.log(Math.floor( Date.now()/1000));



let newDate= new Date()
console.log(newDate.getDay());


// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "date"
})