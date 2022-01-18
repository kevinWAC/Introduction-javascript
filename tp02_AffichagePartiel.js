let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

array.forEach(element => {
    if(element > 3) {
        console.log(element);
    }
});

array.forEach(element => {
    if(element % 2 != 0) {
        console.log(element);
    }
});

