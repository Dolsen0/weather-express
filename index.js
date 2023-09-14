import dotenv from "dotenv";
dotenv.config();

import express from "express";
import getWeather from "./controller/getWeather.js";
import getForecast from "./controller/getForecast.js";
import getAstro from "./controller/getAstro.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Weather API!");
});

app.get("/current/:location", getWeather)

app.get("/forecast/:location", getForecast)

app.get("/astro/:location", getAstro)

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})


