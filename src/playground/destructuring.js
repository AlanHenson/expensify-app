//object destructuring
// const person = {
//     name: 'Alan',
//     age: 28,
//     location: {
//         city: 'Glorieta',
//         temp: 40
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
//
// console.log(`${firstName} is ${age}`);
//
// const {temp: temperature,city} = person.location;
//
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);;
// }


// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); //penguin, Self-Published

//array destructuring


// const address = ['1299 s juniper st', 'philadelphia','Pennsylvania', '19147'];
//
// const [, city, state = 'New York'] = address;
//
// console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name,,medPrice] = item;
console.log(`A medium ${name} costs ${medPrice}`);
