function load() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(res => res.map(r=>{
        if(!r.capital) {
            return;
        }else{
            console.log(r.capital[0]);
        }
        console.log(r.population);
        console.log(r.name.common);
    }));
}