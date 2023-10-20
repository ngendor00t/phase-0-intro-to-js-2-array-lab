// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}

function appendCat(name){
    const newCats = [...cats];
    newCats.splice(newCats.length, 0, "Broom");
    return newCats;
}

function prependCat(name){
    const newCats = [ ...cats];
    newCats.splice(0, 0, "Arnold")
    return newCats;
}

function removeLastCat(){
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat(){
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}