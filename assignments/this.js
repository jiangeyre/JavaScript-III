/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. GLOBAL/WINDOW BINDING: If none of the other rules apply, the 'this' keyword defaults to the window object. Unless you are in strict mode, then the case is undefined. Strict mode prevents window binding from breaking our code but will return undefined.
* 2. IMPLICIT BINDING: This is the most common binding (80% of all cases). When the function is invoked, you look to the left of the dot - that's what the 'this' keyword is referring to (only applies to objects with methods).
* 3. NEW BINDING: using the 'new' keyword constructs a new object and this points to it
* 4. EXPLICIT BINDING:
    -call: will immediately invoke the function / ,call passes arguments in one by one
    -apply: will immediately invoke the function / .apply passes the argument in as an array
    -bind: you pass arguments in one by one but it does not immediately invoke the function; it returns a brand new function that can be invoked later.
    ALL of the above allow us to explicitly state what the 'this' keyword is in any given function.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sacrifice(){
    console.log(this.baphomet);
}
var baphomet = "😈 Who shall we sacrifice today to our savior, Baphomet? 🔪";

sacrifice();


// Principle 2
// code example for Implicit Binding

let sacrificialVirgin = {
    name: 'Edward',
    age: 13,
    location: 'Salem, Oregon',
    beg: function(){
        console.log(`Please don't sacrifice me. My name is ${this.name}. I am only ${this.age}-years-old. I live with my family in ${this.location}. 🥺`);
    }
}

sacrificialVirgin.beg();


// Principle 3
// code example for New Binding

function Baphomet(dialogue){
    this.phrase = dialogue;
}
 let myDevil = new Baphomet('Welcome, my child. Your soul was delicious.');

console.log(myDevil.phrase);


// Principle 4
// code example for Explicit Binding

//call
function evilSpirit () {
    console.log(this.scream);
}

let myEvil = {
    name: 'Medusa',
    scream: '🐍, HISS HISS. RUN WHILE YOU CAN BEFORE I TURN YOU INTO STONE.'
}

let herEvil = {
    name: 'Pennywise',
    scream: 'OH HOW I HAVE MISSED YOU 🤡'
}

evilSpirit.call(myEvil);
evilSpirit.call(herEvil);

//bind
function nightmare(){
    console.log(this.scare);
}

let myNightmare = {
    name: 'Perfection',
    scare: 'You will never achieve perfection in your entire life.'
}

let yourNightmare = {
    name: 'Intimacy',
    scare: 'You will never know true intimacy in your relationships.'
}

savageNightmare = nightmare.bind(myNightmare);
savageNightmare();

savageNightmare = nightmare.bind(yourNightmare);
savageNightmare();

//apply
function hellSpeak(person, adjective) {
    this.greeting = "Good day, ";
    this.person = person;
    this.adj = adjective;
    this.speak = function() {
        console.log(this.greeting + this.person + ". " + this.adj + " day in Hell, isn't it? A wonderful day to torture these poor souls.");
    };
}

const oscarWilde = new hellSpeak('Oscar Wilde', 'Marvelous');
const voldy = new hellSpeak('Lord Voldemort - a.k.a. Tom Marvolo Riddle', 'Absolutely beautiful');

//oscarWilde.speak();
//voldy.speak();

oscarWilde.speak.call(voldy);
voldy.speak.apply(oscarWilde);
