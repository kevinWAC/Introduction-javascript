function fonctionConstante() {
    return 33;
}

console.log(fonctionConstante());

function bonjourUntel(arg) {
    if(arg == undefined) {
        return;
    }
    else {
        return "Bonjour " + arg;
    }
}

console.log(bonjourUntel());

function fonctionCalcul(a, b) {
    if(typeof a != 'number' || typeof b != 'number') {
        throw 'Vous devez fournir des nombres en paramètres';
    }
    return a * b + a + b;
}

console.log(fonctionCalcul(10,5));

function fonctionControleTableau(arr) {
    let check = true;
    for (const iterator of arr) {
        if(typeof iterator == "number") {
            console.log(iterator);
        }
        else{
            return false
        }
    }
    if(check){
        return true
    }
}

let array1 = [15,2,10,15];
let array2 = [15,2,10,"t"];
let array3 = [];
console.log(fonctionControleTableau(array1));
console.log(fonctionControleTableau(array2));
console.log(fonctionControleTableau(array3));

function fonctionMoyenne(array) {

    if (!Array.isArray(array)) {
        throw "Ce n'est pas un tableau";
    }
    if (array.length === 0) return 0;

    for (const iterator of array) {
        if(typeof iterator != 'number') {
           return false;
        }
    }

    let length = array.length;

    let total = 0;
    array.forEach(element => {
        total += element;
    });
    
    return "Moyenne : " + (total/length);
}

let arrayMoyenne1 = [10,10,10];
let arrayMoyenne2 = [];
let arrayMoyenne3 = [10,10,"t"];

console.log(fonctionMoyenne(arrayMoyenne1));
console.log(fonctionMoyenne(arrayMoyenne2));
console.log(fonctionMoyenne(arrayMoyenne3));