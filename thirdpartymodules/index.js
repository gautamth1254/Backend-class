// const giveMeAJoke=require('give-me-a-joke')
// const colors=require('colors')

// giveMeAJoke.getRandomDadJoke(function(joke){
// console.log(joke.brightYellow);
// })

const figlet = require('figlet');

figlet('byee World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});