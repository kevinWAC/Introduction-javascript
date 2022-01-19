function plusGrandeDate(arg1, arg2) {
    if(arg1>arg2) {
        console.log(arg1);
    }else{
        console.log(arg2)
    }
}

plusGrandeDate(new Date(), new Date(2018, 8, 22));

function calculerAge(date) {
    let now = new Date();
    console.log('date:',date);
    let years = now.getFullYear()-date.getFullYear();
    console.log('years',years);
    let month = now.getMonth() - date.getMonth();
    if (month < 0 || (month === 0 && now.getDate() < date.getDate())) {
        years = years - 1;
    }

    console.log(years, month)
    
}

calculerAge(new Date(1999,12,1));