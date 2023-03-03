const { FindCursor } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/personDB');



//Schema Part
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

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouritFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);


// Add New Data
const pineapple = new Fruit({
    name: "Pineapple",
    rating: 10,
    review: "It's delicious fruit."
})

const person = new Person({
    name: "Amy",
    age: 12,
    favouritFruit: pineapple

});


pineapple.save();

person.save().then(() => console.log('it is working')).catch(err => {
    console.log(err);
});




// Person.deleteMany({name: 'John'}).then(result => {
//     console.log("Successefully delete all of John.");
// });

Person.find().then((people) => {
   people.forEach((person) => {
    console.log(person.name);
   });
});


//----------------------------//






// const fruit = new Fruit({
// name: 'lemon',
//     rating: 1,
//     review: "I just don't like lemon",
// });

// fruit.save().then(() => console.log('Successfully saved everything on the server.'));

// Fruit.updateOne({ _id: '64012da0b78519b2af2acdb6' }, { name: 'Lemon'});




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
//     mongoose.connection.close();
// });

//Delete data
// Fruit.deleteOne({ name: 'Banana' }).then(result => {
//     mongoose.connection.close();
//     console.log(result);
// }).catch(err => {console.log(err);});