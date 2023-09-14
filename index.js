import dotenv from "dotenv";
dotenv.config();

import express from "express";
import getWeather from "./controller/getWeather.js";

const app = express();
const PORT = 3000;

app.get("/", getWeather)


app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})


