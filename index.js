import dotenv from "dotenv";
dotenv.config();

import express from "express";
import getWeather from "./controller/getWeather.js";
import getForecast from "./controller/getForecast.js";
import getAstro from "./controller/getAstro.js";

const app = express();
const PORT = 3000;

app.get("/", getWeather)

app.get("/forecast", getForecast)

app.get("/astro", getAstro)


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})


