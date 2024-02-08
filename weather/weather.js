const input = document.querySelector("#input-val");
const btn = document.querySelector("#submit");

btn.addEventListener("click", function (e) {
  if (input.value == "") {
    alert("Enter City Name");
  } else {
    e.preventDefault();
    const city = input.value;
    const key = "281f00595d03fe8d0fd1c527dbcf27a2";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        key
    )
      .then((response) => response.json())
      .then((data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //console.log(name,icon,description,temp,humidity,speed)
        document.getElementById("name").innerHTML = name;
        document.getElementById("temp").innerHTML = Math.floor(temp) + "°C";
        document.getElementById("humidity").innerHTML = humidity + "%";
        document.getElementById("description").innerHTML = description;
        document.getElementById("speed").innerHTML = speed + "km/h";
        document.getElementById("icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
      }).catch(()=>{
        alert("Enter valid location");
      })
      input.value=""
  }
});

/* let weather={
    key:'281f00595d03fe8d0fd1c527dbcf27a2',
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&appid="
            + this.key
        )
        .then(response=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} =data;
        const {icon, description} =data.weather[0]; 
        const {temp, humidity} = data.main
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.getElementById("name").innerHTML=name
        document.getElementById("temp").innerHTML="Temperature:"+temp+"°C"
        document.getElementById("humidity").innerHTML="Humidity:"+humidity+"%"
        document.getElementById("description").innerHTML="Description:"+description
        document.getElementById("speed").innerHTML="Speed:"+speed+"km/h"
        document.getElementById("icon").src="https://openweathermap.org/img/wn/"+icon+".png"
    },
    search: function(){
        //const search=document.form.input.value;
        this.fetchWeather(document.getElementById("input").value);
    }
};

document.getElementById("submit").addEventListener('click', function(){
    weather.search();
}) */
