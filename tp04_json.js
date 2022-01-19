let entreprise = {
    "nom": "Google",
    "siegeSocial": "Googleplex, Mountain View, California, United States",
    "fondateurs": [{
        "nom": "Larry Page",
        "dateDeNaissance": "26/03/1973",
        "ville": "East Lansing",
        "lieu": "Michigan"
    },
    {
        "nom": "Sergey Brin",
        "dateDeNaissance": "21/08/1973",
        "ville": "Moscou",
        "lieu": "Union Soviétique"
    }],
    "chiffresAffaires": [{
        "date": "2008",
        "ca":"16.49"
    },
    {
        "date": "2012",
        "ca":"37.97"
    },
    {
        "date": "2016",
        "ca":"89.46"
    },
    {
        "date": "2018",
        "ca":"136.2"
    }]
};

entreprise.fondateurs.forEach(element => {
    console.log("Nom:" + element.nom + "\nDate de naissance: " + element.dateDeNaissance + "\nVille: " + element.Ville + "\nLieu: " + element.lieu);
});

entreprise.chiffresAffaires.forEach(element => {
    console.log("Date: " + element.date + "\nChiffres d'affaires en milliards de $" + element.ca);
});
   