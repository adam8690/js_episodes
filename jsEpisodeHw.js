// Episode 1

// will print out Keith because the function can see the outer scope where the variable is defined.
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// Episode 2
// will print out 3 because that is the output of  the function result. score is not reassigned because it is inside the function and is defined as a local variable. 
score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// Episode 3
// allsuspects prints Harvey as the third suspect as he is assigned to the variable within the function. Console.log prints out Keith as the third suspect because suspect 3 is a local variable to the allsuspects function and so cannot be accessed from outside.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// Episode 4
// will return the detective name as poirot as it is globally reassigned to poirot inside the detectiveinfo function when it is called.

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// Episode 5
// will return rick as the murderer as the vars declared inside the functions are local and so do not effect the murderer variable outside of the function which is the one being called.
var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);