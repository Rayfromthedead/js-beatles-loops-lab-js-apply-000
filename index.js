var musicians = ('John lennon ' , 'Ringo Star ', 'Paul McCartney ', 'George Harrison');
var instruments = (' Guitar', ' Drums',' Bass guitar', ' Guitar');
var i =[0];
function theBeatlesPlay(musicians, instruments) {
  var emptyArray =[];
  for (var i =0 ; i<musicians.length ; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return emptyArray;
}

var facts= ["foo", "bar", "He was the last Beatle to learn to drive", ":he was never a vegetarian", "He was a choir boy and a boy scout","He hated the sound of his own voice"];
function johnLennonFacts(facts){
var factsAboutJohnLennon = [];
var i = 0;
while (facts[i]) {factsAboutJohnLennon.push(facts[i] + "!!!"); i++;}
return factsAboutJohnLennon
}
