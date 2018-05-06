var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for (var i =0; i<musicians.length; i++){
    newArray.push( musicians[i] + " plays "+ instruments[i]);
  }
  return newArray;
}



var facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts (facts){
  var newArray = [];
  var i = 0;
  while (i<facts.length){
    newArray.push(facts[i] + "!!!")
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(i){
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    i++;
  } while (i<15);
  return newArray;
}

/*function iLoveTheBeatles(number) { 
let newArray = []; 
do {
newArray.push(`I love the Beatles!`); 
number++; 
} 
while (number < 15);
return newArray;
}*/