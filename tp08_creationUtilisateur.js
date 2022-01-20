function load() {
    let tbody = document.querySelector("tbody")
    let data;
    
    fetch('https://digicode.cleverapps.io/utilisateurs')
    .then(response => response.json())
    .then(res => {
        res.map(r=> {
            data += `<tr><td>${r.nom}</td><td>${r.prenom}</td><td>${r.dateNaissance}</td><td>${r.lieuNaissance}</td><td>${r.departementNaissance}</td><td>${r.numeroRue}</td><td>${r.libelleRue}</td><td>${r.codePostal}</td><td>${r.ville}</td>`; 
        })
        tbody.innerHTML = data;
    });
}
function valider() {
    let obj = {};
    obj.nom = document.querySelector("#nom").value;
    obj.prenom = document.querySelector("#prenom").value;
    obj.dateNaissance = document.querySelector("#dateNaissance").value;
    obj.lieuNaissance = document.querySelector("#lieuNaissance").value;
    obj.departementNaissance = document.querySelector("#departement").value;
    obj.numeroRue = document.querySelector("#numeroRue").value;
    obj.libelleRue = document.querySelector("#libelle").value;
    obj.codePostal = document.querySelector("#codePostal").value;
    obj.ville = document.querySelector("#ville").value;

    console.log(obj)
    fetch("https://digicode.cleverapps.io/utilisateurs", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
        }).then((response) => {
    location.reload();
    }).then((data) => {
        console.log(data)
    });
}

