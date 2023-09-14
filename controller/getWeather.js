import axios from 'axios';

let location = 33065



    export default async function getWeather(req, res) {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${location}&aqi=no`);
        res.send(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Failed to fetch weather data.');
    }
}
