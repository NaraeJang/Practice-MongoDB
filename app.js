const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/personDB');


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save().then(() => console.log('it is working'));

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
   name: "sugar",
    rating: 1,
    review: "This is not a fruit",
});

fruit.save().then(() => console.log('Successfully saved everything on the server.'));

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "It is delicious fruit most of time. I never failed about this fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 8,
//     review: "Sometimes it's too sour"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 4,
//     review: "It's a good fruit to bake a bread but.."
// });

// Fruit.insertMany([kiwi, orange, banana]).then(() =>
//         console.log('Successfully saved everything on the server.'));

// Fruit.find().then((fruits) => {
//     fruits.forEach((fruit) => {
//         console.log(fruit.name);
//     });

    // mongoose.connection.close();
// });