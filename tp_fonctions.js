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

let array = [15,2,10,15];
console.log(fonctionControleTableau(array));

function fonctionMoyenne(array) {

    if (array.length === 0) return 0;

    for (const iterator of array) {
        if(typeof iterator != 'number') {
            throw 'Erreur dans le tableau';
        }
    }

    let length = array.length;

    let total = 0;
    array.forEach(element => {
        total += element;
    });
    
    return "Moyenne : " + (total/length);
}

let arrayMoyenne = [10,10,10];

console.log(fonctionMoyenne(arrayMoyenne));