function dwarfRollCall(dwarves) {
var output = [];
for (var i = 0; i < dwarves.length ; i++) {
  output.push(`${i + 1}. ${dwarves[i]} `)
}
return output.join("")
}

function summonCaptainPlanet(planeteerCalls){
return planeteerCalls.map(string=>string.toUpperCase()+"!")
  
}

function longPlaneteerCalls(words) {
  for(var i = 0 ; i<words.length ; i++){
    if (words[i].length>4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  
  for(var i = 0 ; i<foods.length ; i++){
  if (foods[i]=="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"
  ){
    return foods[i]
  }
}
return "no cheese!"
}
