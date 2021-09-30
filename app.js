const cityForm = document.querySelector("form"); //app.js
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = (data) => {
  const { cityDets, weather } = data;

  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  const iconSrc = `../img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "../img/day.svg";
  } else {
    timeSrc = "../img/night.svg";
  }

  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  forecast //calling it on the instance of the Forecast class
    .updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
  //Set Local Storage
  localStorage.setItem("city", city);
});

//Will only run if city is found.
//returns a promise or throws an error
if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
