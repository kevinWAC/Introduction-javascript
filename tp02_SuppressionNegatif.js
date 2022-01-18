let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

array.forEach((element, index) => {
    console.log(index);
    if(element < 0) {
        array.splice(index,1);
    }
});

console.log(array);