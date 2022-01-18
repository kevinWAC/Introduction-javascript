let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let length = array.length;

let total = 0;
array.forEach(element => {
    total += element;
});

console.log("Moyenne : " + (total/length));