function load() {
    let b = document.querySelector("body");

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=e7600d82a734460a8fc05666f3f03c12')
    .then(response => response.json())
    .then(res => {console.log("vent:", res.wind.speed);
        console.log("temperature:", res.main.temp)
        console.log("pression:", res.main.pressure);
        console.log("temps:", res.weather[0].description);
        console.log("temps_icon:", res.weather[0].icon);
        let timestamp = res.dt * 1000;
        let dateNow = new Date(timestamp);
        dateNow.getTime();

        let dateSelector = document.querySelector(".date");
        console.log()
        let ventSelector = document.querySelector(".vent");
        let temperatureSelector = document.querySelector(".temperature");
        let pressionSelector = document.querySelector(".pression");
        let tempsSelector = document.querySelector(".temps");
        let temps_iconSelector = document.querySelector(".temps_icon");

        let vent = res.wind.speed;
        let temperature =  res.main.temp;
        let pression = res.main.pressure;
        let temps = res.weather[0].description;
        let temps_icon = res.weather[0].icon;

        dateSelector.innerHTML = dateNow;
        ventSelector.innerHTML = vent;
        temperatureSelector.innerHTML = temperature;
        pressionSelector.innerHTML = pression;
        tempsSelector.innerHTML = temps;
        temps_iconSelector.innerHTML = `<img src="https://openweathermap.org/img/w/${temps_icon}.png">`;

    })
}