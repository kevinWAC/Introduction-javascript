function load() {
    let tbody = document.querySelector("tbody")
    let data;

    fetch('https://digicode.cleverapps.io/json/pays/pollution')
    .then(response => response.json())
    .then(res => {
        res.pays.forEach(element => {
            data += `<tr><td><img src="https://flagcdn.com/32x24/${element.code}.png">${element.nom}</td><td>${element.valeur}</td><td>${element.pourcentage}</td>`; 
        });
        tbody.innerHTML = data;
    });
    
}

function valider() {
    let tbody = document.querySelector("tbody")
    let data;

    min = Number(document.querySelector("#min").value);
    max = Number(document.querySelector("#max").value);
  

    if(min > max) {
       alert("Minimum supérieur au maximum");
        return; 
    }
    else if (min < 0) {
        alert("Minimum ne peut être négatif");
        return;
    }
    else if (max === 0) {
        max = Number.MAX_VALUE;
    }

    fetch('https://digicode.cleverapps.io/json/pays/pollution')
    .then(response => response.json())
    .then(res => {
        res.pays.forEach(element => {
            if(element.valeur >= min && element.valeur <= max) {
                data += `<tr><td><img src="https://flagcdn.com/32x24/${element.code}.png">${element.nom}</td><td>${element.valeur}</td><td>${element.pourcentage}</td>`; 
            }
        });
        tbody.innerHTML = data;
    });
}