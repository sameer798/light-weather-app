// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api = {
     key: "8618d3cf0159720bdac444c515735cf2",
     baseUrl: "https://api.openweathermap.org/data/2.5/weather"
 }

 const searchbox = document.querySelector('.search-box');
 searchbox.addEventListener('keypress',(event) => {

     if(event.keyCode == 13) {
        //  console.log(searchbox.value);
         getResults(searchbox.value);
     }
 });

 function getResults(city) {
     fetch(`${api.baseUrl}?q=${city}&appid=${api.key}&units=metric`)
     .then(weather => {
         return weather.json();
     }).then(showResults);
 }

 function showResults(weather){
    //  console.log(weather);
     let city = document.querySelector('.location .city');
     city.innerText = `${weather.name}, ${weather.sys.country}`;

     let now = new Date();
     let date = document.querySelector('.location .date');
     date.innerText = dateBuilder(now);

     let temp = document.querySelector('.current .temp');
     temp.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;
 
     let weather_el = document.querySelector('.current .weather');
     weather_el.innerText = weather.weather[0].main;
 
     let hilow = document.querySelector('.hi-low');
     hilow.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c(min) / ${Math.ceil(weather.main.temp_max)}&deg;c(max)`;
 
}

 function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May",
   "June", "July", "Augest", "September", "October", "November",
"December"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `(${day}) ${date} ${month} ${year}`;
}


 