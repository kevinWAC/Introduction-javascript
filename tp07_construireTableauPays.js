function load() {
    let tbody = document.querySelector("tbody")
    let data;
    
    let header = document.querySelector("thead");
    let valueHead = "<th>nom</th><th>Valeur</th><th>Pourcentage</th>";
    header.innerHTML = valueHead;
    
    fetch('https://digicode.cleverapps.io/json/pays/pollution')
    .then(response => response.json())
    .then(res => {
        res.pays.forEach(element => {
            data += `<tr><td><img src="https://flagcdn.com/32x24/${element.code}.png">${element.nom}</td><td>${element.valeur}</td><td>${element.pourcentage}</td>`; 
        });
        tbody.innerHTML = data;
    });
}