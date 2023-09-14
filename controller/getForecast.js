import axios from "axios";

let location = 33065;

export default function getForecast(req, res) {
  axios
    .get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.KEY}&q=${location}&days=3&aqi=yes&alerts=yes`
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Failed to fetch weather data.");
    });
}
