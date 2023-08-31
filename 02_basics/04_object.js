// Singleton

// const tinderUser= new Object() - singleton object
const tinderUser= {} // non singleton object

tinderUser.id="123abc"
tinderUser.name = "avichal"
tinderUser.isLoggedin = false


// console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullname:{
        username:{
            firstname: "avichal",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1= {1:"a", 2:"b"}
const obj2= {3:"a", 4:"b"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2}
// console.log(obj3);


const users= [
    {
        id:1,
        email :"h@gmail.com"
    },
]

users[0].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


//destructring

const course = {
    coursename :"js ",
    price: "99",
    coursenamestu: "avichal"
}

// course.coursename

const{coursenamestu : student}= course
// console.log(student);


// const navbar = ({company})=>{

// }

// navbar(company = "avichal")

// Apna kaam kisi or k sir pr daalne ko API khte hai

// {
//     "name" : "avichal",
//     "coursename" :"js ",
//     "price" : "free"
// }

[
    {
        
    }
    {

    }
]