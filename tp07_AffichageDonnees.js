function load() {
    let b = document.querySelector("body");

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.text())
        .then(text => b.innerHTML = text);
}