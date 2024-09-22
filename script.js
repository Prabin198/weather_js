let searchBtn=document.getElementById('btn');
let cityRef=document.getElementById('city');
let result=document.getElementById('result');
let searchBox=document.getElementById('search')
//fetching weather data
let getWeather=()=>{
    let cityValue=cityRef.value;
    if(cityValue.length == 0){
        result.innerHTML='Please enter your city name !!'
    }
    else{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            tempC=data.main.temp-273.15;
            tempInCelsius=Math.floor(tempC*100)/100;
            tempMin=data.main.temp_min-273.15;
            tempMax=data.main.temp_max-273.15;
            tempMaxCelsius=Math.floor(tempMax*100)/100;
            tempMinCelsius=Math.floor(tempMin*100)/100;
            console.log(data);
            result.innerHTML=`
            <div class="area">
                <h2>${data.name}</h2>
                <div class="dataWeather">
                <h5 class="weather">${data.weather[0].main}</h5>
                <h5 class="description">${data.weather[0].description}</h5>
                </div>
            </div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" height="50px">
            <h1>${tempInCelsius}&#176;C</h1>
            <div class="temp-container">
                <div>
                       <h4 class="min">min</h4>
                       <h4 class="temp">${tempMinCelsius}&#176;C</h4>     
                </div>
                <hr style="opacity:0.5">
                <div>
                    <h4 class="max">max</h4>
                    <h4>${tempMaxCelsius}&#176;C</h4>
                </div>`
        }).catch((reject)=>{
             result.innerHTML=`<h2>Error!!Not Found</h2>
             <h5>Please Enter City Name</h5>`
             
        })
    }
   
}
searchBtn.addEventListener('click',getWeather);
window.addEventListener('load',getWeather);
searchBox.addEventListener('keypress',(e)=>{
    if(e.keyCode ===13){
        e.keyCode=searchBtn.click();
    }
})