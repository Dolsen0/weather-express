import axios from 'axios';


export default function getWeather(req, res) {
    let location = req.params.location
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${location}&aqi=no`)
    .then(response => {
        return response.data;
    })
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.log(error);
        res.status(500).send('Failed to fetch weather data.');
    });
}
