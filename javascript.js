function load() {

    let b = document.querySelector("body");
    /*
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.text())
        .then(text => b.innerHTML = text);
    }*/

   /*
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(res => res.map(r=>{
        if(!r.capital) {
            return;
        }else{
              console.log(r.capital[0]);
        }
        console.log(r)
        console.log(r.population);
        console.log(r.name.common);
    }))
    */


    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(res => res.map(r=>{
        if(!r.capital) {
            return;
        }else{
            let baliseOl = document.createElement("ol");
            let baliseLi1 = document.createElement("li");
            baliseLi1.innerText = r.capital[0];

            baliseOl.appendChild(baliseLi1);
            let baliseLi2 = document.createElement("li");
            baliseLi2.innerText = r.capital[0];
            baliseOl.appendChild(baliseLi2);

            let baliseLi3 = document.createElement("li");
            baliseLi3.innerText = r.capital[0];
            baliseOl.appendChild(baliseLi3);

            b.appendChild(baliseOl);
            console.log("capital : ",r.capital[0]);
            console.log("population : ", r.population);
            console.log("pays : ", r.name.common);

        }
    }))
}