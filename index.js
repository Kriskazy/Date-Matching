function dateMatch(groupA, groupB, places, newGroupA) {
  if (newGroupA.length === 0)
    newGroupA = [...groupA];
   // clone group A if there is no more person

  // pick an item randomly from a given list
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  // pick random
  const personA = pickRandom(newGroupA);
  const personB = pickRandom(groupB);
  const place = pickRandom(places);

  //remove person in groupA to avoid duplicate
  newGroupA.splice(newGroupA.indexOf(personA), 1);

  return `${personA} and ${personB} will be going on a dinner date at ${place}`
 
}

const groupA = [
  "Kriskazy",
  "Tomisin",
  "Uzo",
  "Kuyel",
  "Joe",
  "Jackson",
];
const groupB = [
  "Mary",
  "Tomi",
  "Jummy",
  "Funmi",
  "Elizabeth",
  "Julia",
 
];
const places = [
  "Olive Gardens",
  "Bukka Hut",
  "Dominoes",
  "Chicken Republic",
  "Farm City",
  "Golden Tulip",
];
const newGroupA = [...groupA];


console.log(dateMatch(groupA, groupB, places, newGroupA));